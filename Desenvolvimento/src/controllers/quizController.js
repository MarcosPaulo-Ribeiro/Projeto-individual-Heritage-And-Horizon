var quizModel = require("../models/quizModel");

function salvarResultado(req, res) {
    // Capturando os dados enviados pelo frontend no body da requisição
    var acertos = req.body.acertosServer;
    var erros = req.body.errosServer;
    var tema = req.body.marcaServer;
    var fkUsuario = req.body.idUsuarioServer;

    // Validação básica para não vier dados incompletos, embora acho difícil acontecer pois em teoria esses dados só vem quando o Quiz Termina. . .
    if (acertos == undefined || erros == undefined || tema == undefined || fkUsuario == undefined) {
        res.status(400).send("Seus dados estão undefined! Verifique o Controller.");
    } else {
        // após a verificação profissional, manda os dados para a função do Model
        quizModel.salvarResultado(acertos, erros, tema, fkUsuario)
            .then(function (resultado) {
                res.json(resultado);
            }).catch(function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao salvar o resultado! Erro: ", erro.sqlMessage); // Mensagem de erro caso ocorre algum erro
                res.status(500).json(erro.sqlMessage);
            });
    }
}

// Exportando a função para a rota ser utilizável
module.exports = {
    salvarResultado
};