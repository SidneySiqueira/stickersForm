Projeto Sticker Pack
-Visão Geral
Este projeto é uma aplicação de pacote de adesivos construída usando Next.js, React e Styled-components. Ele permite aos usuários navegar e usar uma coleção de adesivos. Este README fornece uma visão geral do projeto, como configurá-lo e as tecnologias usadas.

-Índice
Começando
Estrutura do Projeto
Dependências
Scripts


-Começando
Para colocar este projeto em funcionamento em sua máquina local, siga estas etapas:

-Clone o Repositório

git clone https://github.com/SidneySiqueira/stickers-form.git
cd sticker-pack

-Instale as Dependências
Certifique-se de ter o Node.js e o npm (Node Package Manager) instalados em seu sistema. Em seguida, execute:

npm install ou yarn

-Inicie o Servidor de Desenvolvimento

npm run dev ou yarn dev

Isso iniciará o servidor de desenvolvimento e você poderá acessar a aplicação em http://localhost:3000 em seu navegador da web.

-Estrutura do Projeto
A estrutura de diretórios do projeto está organizada da seguinte forma:

pages/: Contém as páginas do Next.js para roteamento e renderização.
components/: Contém componentes React usados em toda a aplicação.
styles/: Contém estilos globais e arquivos relacionados ao Styled-components.
public/: Contém ativos públicos, como imagens e fontes.
utils/: Contém funções de utilidade e módulos auxiliares.

-Dependências
Aqui está uma visão geral das principais dependências usadas neste projeto:

Next.js: Um framework React para aplicações React renderizadas no servidor.
React: Uma biblioteca JavaScript para construir interfaces de usuário.
Styled-components: Uma biblioteca CSS-in-JS para estilizar componentes React.
TypeScript: Uma extensão tipada estática do JavaScript.
ESLint: Uma ferramenta popular de linting JavaScript para verificações de qualidade de código e estilo.
Dependências de Desenvolvimento
@types/node, @types/react, @types/react-dom: Definições de tipos TypeScript para Node.js e React.
eslint-config-next: Configuração do ESLint para projetos Next.js.

-Scripts
Aqui estão os scripts npm disponíveis para este projeto:

dev: Iniciar o servidor de desenvolvimento.
build: Construir a versão de produção da aplicação.
start: Iniciar o servidor de produção.
lint: Executar o ESLint para verificar o código em busca de erros e estilo de codificação.
