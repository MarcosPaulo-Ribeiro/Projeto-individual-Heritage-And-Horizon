var database = require("../database/config");

function salvarResultado(acertos, erros, tema, fkUsuario) {
    console.log("\nACESSEI O QUIZ MODEL para salvar resultado:", acertos, erros, tema, fkUsuario);
    
    // Inserir dados no banco de dados, para o resultado do Quiz do jogador que o Controller enviou
    // após passar por app.js, routes, controllers e enfim models
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

/* ei, você chegou aqui no final. . . agora todos os dados estão no banco de dados, eles seguiram essa Rota aqui:

Quiz.html
 ↓
app.js
 ↓
quiz.js
 ↓
quizController.js
 ↓
quizModel.js  (Você está aqui)
 ↓
 3307
 ↓
projeto_carros
*/