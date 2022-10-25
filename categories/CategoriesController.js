const express = require("express");
const router = express.Router();

router.get("/admin/categories/new", (req,res) =>{
    res.send("Rota de categoria")
});


module.exports = router;