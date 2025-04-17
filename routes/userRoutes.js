const express = require("express");
const {registerUser , loginUser} = require("../controllers/userController");
const router = express.Router();

router.post("/",registerUser);
router.get("/:userId",loginUser);
module.exports.router;