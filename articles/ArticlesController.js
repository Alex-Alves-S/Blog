const express = require("express");
const router = express.Router();

router.get("/articles", (req,res) =>{
    res.send("Rote de articles")
});

module.exports = router;