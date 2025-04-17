const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    username:{type:String,required:true,unique:true},
    email:{type:String , required:true,unique:true},
    password:{type:String,required:true},
});

userSchema.pre("save",async function (next){
    //passeord modified -> aage badho
    //modify-> first encypt kro
    //used for reset password 
    if(!this.isModified("password")){
        return next();
    }
    const salt = await bcrypt.getSalt(10);
    this.password = await bcrypt.hash(this.password,salt);
    next();
});

userSchema.method.matchPassword = async function (enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password);
};

const User = mongoose.model("User",userSchema);

module.exports = User;