var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

// Define que quando chegar um POST no caminho "/salvar", chama o controller
router.post("/salvar", function (req, res) {
    quizController.salvarResultado(req, res);
});

module.exports = router;