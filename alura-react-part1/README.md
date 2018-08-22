# Curso Alura React parte 1
Projeto desenvolvido para acompanhamento do curso da Alura
https://cursos.alura.com.br/course/react

## Criação do projeto
```bash
npm install -g create-react-app
create-react-app alura-react-part1
```

## Configurar o java para o jar da API
- Criar variável de ambiente "JAVA_HOME='C:\Program Files\Java\jdk1.8.0_181'"
- Editar a variável de ambiente "PATH" adicionando o valor "%JAVA_HOME%\bin"
- Testar com "java -version" e "javac -version"
Obs.: O jar fornecido não funcionou e não está sendo utilizado

## Executar o projeto
```bash
cd alura-react-part1
npm start

# Url de acesso
http://localhost:3000/
```

## Gerar código para produção
npm run build

## Rodar o build em um servidor estático
npm install -g serve
serve -s build

## Observações
- react-route `O curso está utilizando a versão 2.7.0, essa versão está apresentando um bug, por isso está sendo utilizado a versão 3.2.0 para conseguir acompanhar o código do curso, porque a partir da versão 4 a implementação é diferente e utiliza o react-router-dom. Durante o curso o react-router foi atualizado`

## Fontes
https://cursos.alura.com.br/course/react
https://purecss.io/start/
http://purecss.io/layouts/side-menu/download
https://github.com/mroderick/PubSubJS
https://github.com/ReactTraining/react-router
https://reacttraining.com/react-router/
https://www.npmjs.com/package/serve