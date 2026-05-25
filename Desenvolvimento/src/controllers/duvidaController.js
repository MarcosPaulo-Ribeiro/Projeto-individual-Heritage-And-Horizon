var duvidaModel = require("../models/duvidaModel");

// trocado de avisos para Duvidas para acomodar o BD
// a Similaridade torna a adaptação muito mais fácil

function listar(req, res) {
    duvidaModel.listar().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function listarPorUsuario(req, res) {
    var idUsuario = req.params.idUsuario;

    duvidaModel.listarPorUsuario(idUsuario)
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "Houve um erro ao buscar os avisos: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function pesquisarPergunta(req, res) {
    var pergunta = req.params.pergunta;

    duvidaModel.pesquisarPergunta(pergunta)
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function publicar(req, res) {

    // linha para teste
    console.log("--- DADOS RECEBIDOS NO CONTROLLER ---");
    console.log("Título:", req.body.titulo);
    console.log("Pergunta:", req.body.pergunta);
    console.log("Tema:", req.body.marca); 
    console.log("ID Usuário:", req.params.idUsuario);
    console.log("-------------------------------------");

    var titulo = req.body.titulo;
    var pergunta = req.body.pergunta; // mudando para Pergunta
    var temaSelecionado = req.body.marca; // adicionando a variável da marca
    var idUsuario = req.params.idUsuario;

    if (titulo == undefined) {
        res.status(400).send("O título está indefinido!");
    } else if (pergunta == undefined) {
        res.status(400).send("A pergunta está indefinida!");
    } else if (temaSelecionado == undefined){
        res.status(400).send("O tema está indefinido!") // adicionando erro para a ,arca(caso aconteça)
    } else if (idUsuario == undefined) {
        res.status(403).send("O id do usuário está indefinido!");
    } else {
        duvidaModel.publicar(titulo, pergunta, temaSelecionado, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function editar(req, res) {
    var novaPergunta = req.body.pergunta; //novaPergunta agora
    var idDuvida = req.params.idDuvida; // idDuvida agora

    duvidaModel.editar(novaPergunta, idDuvida)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );

}

function deletar(req, res) {
    var idDuvida = req.params.idDuvida;

    duvidaModel.deletar(idDuvida)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao deletar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

// function adicionada para acomodar a Dashboard
function estatisticas(req, res) {
    console.log("ACESSEI O DUVIDA CONTROLLER - FUNÇÃO estatisticas");

    duvidaModel.estatisticas()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                // Se o banco estiver vazio, devolve um array vazio com status 204 (No Content)
                res.status(204).send("Nenhum resultado encontrado!");
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("\nHouve um erro ao buscar as estatísticas! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function leaderboard(req, res) {
    console.log("ACESSEI O DUVIDA CONTROLLER - FUNÇÃO leaderboard");

    duvidaModel.leaderboard()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("\nHouve um erro ao buscar o leaderboard! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    listar,
    listarPorUsuario,
    pesquisarPergunta, // mudado de pesquisarDescricao para pesquisarPergunta
    publicar,
    editar,
    deletar,
    estatisticas, // adicionado para a Dashboard
    leaderboard // adicionado para a Dashboard
}