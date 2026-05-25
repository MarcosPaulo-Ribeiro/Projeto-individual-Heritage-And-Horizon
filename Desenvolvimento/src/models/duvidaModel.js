var database = require("../database/config");

// trocado de avisos para Duvidas para acomodar o BD
// a Similaridade torna a adaptação muito mais fácil

function listar() {
    console.log("ACESSEI O DUVIDA  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
        SELECT 
            d.idDuvida,
            d.titulo,
            d.pergunta,
            d.marca,
            d.fkUsuario,
            u.id AS idUsuario,
            u.nome,
            u.email,
            u.senha
        FROM duvidas d 
            INNER JOIN usuario u
                ON d.fkUsuario = u.id;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function pesquisarPergunta(texto) {
    console.log("ACESSEI O DUVIDA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function pesquisarDescricao()");
    var instrucaoSql = `
        SELECT 
            d.idDuvida,
            d.titulo,
            d.pergunta,
            d.marca,
            d.fkUsuario,
            u.id AS idUsuario,
            u.nome,
            u.email,
            u.senha
        FROM duvidas d
            INNER JOIN usuario u
                ON d.fkUsuario = u.id
        WHERE d.pergunta LIKE '${texto}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarPorUsuario(idUsuario) {
    console.log("ACESSEI O DUVIDA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPorUsuario()");
    var instrucaoSql = `
        SELECT 
            d.idDuvida,
            d.titulo,
            d.pergunta,
            d.marca,
            d.fkUsuario,
            u.id AS idUsuario,
            u.nome,
            u.email,
            u.senha
        FROM duvidas d
            INNER JOIN usuario u
                ON d.fkUsuario = u.id
        WHERE u.id = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function publicar(titulo, pergunta, temaSelecionado, idUsuario) {
    console.log("ACESSEI O DUVIDA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", titulo, pergunta, temaSelecionado, idUsuario);
    var instrucaoSql = `
        INSERT INTO duvidas (titulo, pergunta, marca, fkUsuario) VALUES ('${titulo}', '${pergunta}', '${temaSelecionado}', ${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function editar(novaPergunta, idDuvida) {
    console.log("ACESSEI O DUVIDA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ", novaPergunta, idDuvida);
    var instrucaoSql = `
        UPDATE duvidas SET pergunta = '${novaPergunta}' WHERE idDuvida = ${idDuvida};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function deletar(idDuvida) {
    console.log("ACESSEI O DUVIDA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", idDuvida);
    var instrucaoSql = `
        DELETE FROM duvidas WHERE idDuvida = ${idDuvida};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// nova function para usar na Dashboard
function estatisticas() {
    console.log("ACESSEI O DUVIDA MODEL - FUNÇÃO estatisticas");
    
    // traz o agrupamento de dúvidas E as métricas do quiz juntas
   var instrucaoSql = `
        SELECT 
            d.marca,
            COUNT(d.idDuvida) AS qtd,
            (SELECT COUNT(DISTINCT fkUsuario) FROM tentativa) AS total_participantes,
            (SELECT COUNT(*) FROM tentativa) AS total_quizzes,
            (SELECT IFNULL(ROUND(AVG(acertos / (acertos + erros) * 100)), 0) FROM tentativa) AS media_acertos,
            (SELECT IFNULL(SUM(acertos), 0) FROM tentativa WHERE tema = 'porsche') AS acertos_porsche,
            (SELECT IFNULL(SUM(erros), 0) FROM tentativa WHERE tema = 'porsche') AS erros_porsche,
            (SELECT IFNULL(SUM(acertos), 0) FROM tentativa WHERE tema = 'genesis') AS acertos_genesis,
            (SELECT IFNULL(SUM(erros), 0) FROM tentativa WHERE tema = 'genesis') AS erros_genesis
        FROM duvidas d
        GROUP BY d.marca;
    `;
    
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// nova Function para a Dashboard(no caso a tabela de liderança)
function leaderboard() {
    console.log("ACESSEI O DUVIDA MODEL - FUNÇÃO leaderboard");
    var instrucaoSql = `
        SELECT 
            u.nome AS nome_usuario,
            SUM(t.acertos) AS pontuacao
        FROM usuario u
        INNER JOIN tentativa t ON t.fkUsuario = u.id
        GROUP BY u.id, u.nome
        ORDER BY pontuacao DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    listar,
    listarPorUsuario,
    pesquisarPergunta, // trocado de pesquisarDescricao para pesquisarPergunta 
    publicar,
    editar,
    deletar,
    estatisticas, // adicionado para a Dashboard
    leaderboard // adicionado para a Dashboard
}
