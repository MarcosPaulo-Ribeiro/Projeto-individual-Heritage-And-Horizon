var express = require("express");
var router = express.Router();

var duvidaController = require("../controllers/duvidaController");

router.get("/listar", function (req, res) {
    duvidaController.listar(req, res);
});

router.get("/listar/:idUsuario", function (req, res) {
    duvidaController.listarPorUsuario(req, res);
});

router.get("/pesquisar/:pergunta", function (req, res) {
    duvidaController.pesquisarPergunta(req, res);
});

router.post("/publicar/:idUsuario", function (req, res) {
    duvidaController.publicar(req, res);
});

router.put("/editar/:idDuvida", function (req, res) {
    duvidaController.editar(req, res);
});

router.delete("/deletar/:idDuvida", function (req, res) {
    duvidaController.deletar(req, res);
});

// Rota que o front-end chamou: fetch('/duvida/estatisticas')
router.get("/estatisticas", function (req, res) {
    duvidaController.estatisticas(req, res);
});

router.get("/leaderboard", function (req, res) {
    duvidaController.leaderboard(req, res);
});

module.exports = router;