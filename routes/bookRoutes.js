const express = require("express");
const router = express.Router();

router.get("/",getBooks);
router.get("/.id",getBookById);