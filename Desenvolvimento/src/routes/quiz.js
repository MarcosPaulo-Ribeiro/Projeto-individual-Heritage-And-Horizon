// O frontend fez um fetch para "/quiz/salvar"

// o app.js recebeu, direciona todas as rotas que começam com "/quiz" para este arquivo de rotas (quizRouter)

var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

// Define que quando chegar um POST(definido no js do quiz.HTML) no caminho "/salvar", chama o controller
router.post("/salvar", function (req, res) {
    quizController.salvarResultado(req, res);
});

// permite o router para outros arquivos da aplicação
// possibilitando isso var quizRouter = require("./src/routes/quiz");

module.exports = router;