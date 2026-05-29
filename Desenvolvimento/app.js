// var ambiente_processo = 'producao';
var ambiente_processo = 'desenvolvimento';

var caminho_env = ambiente_processo === 'producao' ? '.env' : '.env.dev';
// Acima, temos o uso do operador ternário para definir o caminho do arquivo .env
// A sintaxe do operador ternário é: condição ? valor_se_verdadeiro : valor_se_falso

require("dotenv").config({ path: caminho_env });

var express = require("express");
var cors = require("cors");
var path = require("path");
var PORTA_APP = process.env.APP_PORT;
var HOST_APP = process.env.APP_HOST;

var app = express();

var indexRouter = require("./src/routes/index");
var usuarioRouter = require("./src/routes/usuarios");
var duvidaRouter = require("./src/routes/duvida"); // trocado de avisos para duvida
var quizRouter = require("./src/routes/quiz");// aqui é a rota onde o meu Quiz pega

// var medidasRouter = require("./src/routes/medidas"); Não é necessário, não há medidas
// var aquariosRouter = require("./src/routes/aquarios"); não é necessário, não se trata de aquários mais
// var empresasRouter = require("./src/routes/empresas"); não há empresas nesse projeto 




app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use("/", indexRouter);
app.use("/usuarios", usuarioRouter);
app.use("/duvida", duvidaRouter); // trocado de avisos para duvida
app.use("/quiz", quizRouter); // encaminha para o Routes

// app.use("/medidas", medidasRouter);
// app.use("/aquarios", aquariosRouter);
// app.use("/empresas", empresasRouter);






app.listen(PORTA_APP, function () {
    console.log(`
 #     # ####### ######  ### #######    #     #####  #######         #     # ####### ######  ### ####### ####### #     # 
 #     # #       #     #  #     #      # #   #     # #               #     # #     # #     #  #       #  #     # ##    # 
 #     # #       #     #  #     #     #   #  #       #               #     # #     # #     #  #      #   #     # # #   # 
 ####### #####   ######   #     #    #     # #  #### #####    #####  ####### #     # ######   #     #    #     # #  #  # 
 #     # #       #   #    #     #    ####### #     # #               #     # #     # #   #    #    #     #     # #   # # 
 #     # #       #    #   #     #    #     # #     # #               #     # #     # #    #   #   #      #     # #    ## 
 #     # ####### #     # ###    #    #     #  #####  #######         #     # ####### #     # ### ####### ####### #     # 
`)
    console.log(`
    ##   ##  ######   #####             ####       ##     ######     ##              ##  ##    ####    ######  
    ##   ##  ##       ##  ##            ## ##     ####      ##      ####             ##  ##     ##         ##  
    ##   ##  ##       ##  ##            ##  ##   ##  ##     ##     ##  ##            ##  ##     ##        ##   
    ## # ##  ####     #####    ######   ##  ##   ######     ##     ######   ######   ##  ##     ##       ##    
    #######  ##       ##  ##            ##  ##   ##  ##     ##     ##  ##            ##  ##     ##      ##     
    ### ###  ##       ##  ##            ## ##    ##  ##     ##     ##  ##             ####      ##     ##      
    ##   ##  ######   #####             ####     ##  ##     ##     ##  ##              ##      ####    ######  
    \n\n\n                                                                                                 
    Servidor do seu site já está rodando! Acesse o caminho a seguir para visualizar .: http://${HOST_APP}:${PORTA_APP} :. \n\n
    Você está rodando sua aplicação em ambiente de .:${process.env.AMBIENTE_PROCESSO}:. \n\n
    \tSe .:desenvolvimento:. você está se conectando ao banco local. \n
    \tSe .:producao:. você está se conectando ao banco remoto. \n\n
    \t\tPara alterar o ambiente, comente ou descomente as linhas 1 ou 2 no arquivo 'app.js'\n\n`);
    
});
