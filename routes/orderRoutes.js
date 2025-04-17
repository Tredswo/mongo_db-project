const express = require("express");
const router = express.Router();
const {createOrder , getOrdersByUser} = require("../controllers/userController");
router.post("/",createOrder);
router.get("/:userId",getOrderByUser);
module.exports.router;