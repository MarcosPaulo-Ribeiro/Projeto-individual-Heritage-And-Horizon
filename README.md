Heritage & Horizon
Projeto interativo desenvolvido para o curso de Ciência da Computação na SPTech. O sistema combina um portal informativo sobre cultura automotiva com um Quiz dinâmico, onde o desempenho dos usuários é exibido em uma Dashboard em tempo real.

📋 Sobre o Projeto
O projeto utiliza a base tecnológica do projeto "AquaTech", totalmente adaptada para o setor automotivo.

O Heritage & Horizon nasceu da necessidade de transformar dados estáticos em informações dinâmicas.

O Desafio: Capturar as respostas do usuário, enviar para o banco de dados e transformar o volume de acertos/erros em gráficos analíticos.

Público-alvo: Entusiastas de carros e estudantes de CCO interessados em lógica de gamificação.

Por que Heritage & Horizon(Legado e horizonte)?
O projeto tem tema automotivo, porém os dois focos dele são duas Marcas, Porsche e Genesis.
Heritage(legado) simboliza os mais de 100 anos que a Porsche fez história na indústria.

Horizon(Horizonte)simboliza a novidade Coreana, o início da Genesis forjada em 2015 e inovadora

🚀 Tecnologias Utilizadas
Front-end: HTML5, CSS3 e JavaScript.

Back-end: Node.js com framework Express.

VirtualBox: ambiente virtual
Banco de Dados: MySQL rodando em ambiente virtual.

Hardware de Desenvolvimento: Acer Nitro(Windows).

🛠️ Configuração e Instalação
Pré-requisitos
Node.js instalado.

VirtualBox
MySQL Server (via VM).

Instalação
Clone o repositório.

No diretório raiz, instale as dependências:

Bash
npm install
Configure as credenciais do banco de dados no arquivo .env ou config.js (ambiente de desenvolvimento).

Executando o Projeto
Para iniciar o servidor, utilize o comando:

Bash
npm start
O servidor estará disponível em: http://localhost:3333.

🛡️ Funcionalidades
Fluxo de Autenticação: Cadastro e Login otimizados para o perfil do usuário.

Quiz Interativo: Sistema de perguntas com captura de pontuação.

Dashboard Dinâmica: Os gráficos (Chart.js) não são estáticos; eles refletem o desempenho médio dos usuários, ranking de acertos e categorias de carros mais conhecidas.

📝 Histórico de Desenvolvimento
Este projeto passou por uma fase de refatoração para eliminar o "código legado" de monitoramento de aquários, resultando em um back-end mais leve e funcional para a temática de carros.

👤 Autor
Marcos Paulo - Estudante de CCO(1/8) na SPTech.