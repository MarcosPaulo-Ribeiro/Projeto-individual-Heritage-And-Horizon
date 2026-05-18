var database = require("../database/config");

function salvarResultado(acertos, erros, tema, fkUsuario) {
    console.log("\nACESSEI O QUIZ MODEL para salvar resultado:", acertos, erros, tema, fkUsuario);
    
    // Inserir dados no banco de dados para o resultado do Quiz do jogador
    var instrucaoSql = `
        INSERT INTO tentativa (acertos, Erros, tema, fkUsuario) 
        VALUES (${acertos}, ${erros}, '${tema}', ${fkUsuario});
    `;
    
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Exportando a função para o Controller possa interagir com esse model aqui
module.exports = {
    salvarResultado
};