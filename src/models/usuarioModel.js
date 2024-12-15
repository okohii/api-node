let database = require("../database/config")

function listar() {
    console.log('Acesso Model: listar');
    const sql = `SELECT * FROM usuario;`;
    
    console.log(`Executando: ${sql}`);
    return database.executar(sql);
}

module.exports = {
    listar,
};