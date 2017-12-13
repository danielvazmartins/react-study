# Hello World com ReactJS e pre-compilando com o Babel
Projeto básico para iniciar a utilização do ReactJS e Babel
Utilizando o babel-cli para pre-compilar o JSX

# Instalar o babel-cli globalmente
npm install babel-cli -g

# Instalar o compilador do babel para React (JSX)
npm install babel-preset-react --save-dev

# Executar o babel
babel --presets react src --watch --out-dir js // src é o diretorio de origem o js o destino

# Fontes utilizadas
https://reactjs.org/
https://babeljs.io/docs/setup/#installation
// Instalar syntaxe do Babel no Sublime
https://github.com/babel/babel-sublime