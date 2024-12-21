const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuarioController");


router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

module.exports = router;