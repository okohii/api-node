let express = require("express");
let router = express.Router();
let usuarioController = require("../controllers/usuarioController");

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

module.exports = router;