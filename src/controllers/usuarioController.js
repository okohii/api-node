const usuarioModel = require("../models/usuarioModel");

function listar(req, res) {
    usuarioModel.listar().then(
        function (resultado) {
            if (resultado.length < 1) {
                console.log("Nenhuma informação encontrada.");
                res.status(204);
            } else {
                res.json(resultado);
            }
        }
    ).catch (
        function (erro) {
            console.log(erro)
            res.status(500).json(erro.sqlMessage);
        }
    )
}

module.exports = {
    listar,
}