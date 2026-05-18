var quizModel = require("../models/quizModel");

function salvarResultado(req, res) {
    // Capturando os valores que vêm do corpo da requisição (body)
    var acertos = req.body.acertosServer;
    var erros = req.body.errosServer;
    var tema = req.body.marcaServer;
    var fkUsuario = req.body.idUsuarioServer;

    // Validação básica para não vier dados incompletos, embora acho difícil acontecer. . .
    // deixa pra lá, sou eu que estou fazendo, ainda não tenho tamanha confiança em mim
    if (acertos == undefined || erros == undefined || tema == undefined || fkUsuario == undefined) {
        res.status(400).send("Seus dados estão undefined! Verifique o Controller.");
    } else {
        // após a verificação profissional, manda os dados para a função do Model
        quizModel.salvarResultado(acertos, erros, tema, fkUsuario)
            .then(function (resultado) {
                res.json(resultado);
            }).catch(function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao salvar o resultado! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

// Exportando a função para o Controller poder usar o Quiz
module.exports = {
    salvarResultado
};