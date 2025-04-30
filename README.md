# App SQLite - Exercício de Aula

Este projeto é um exercício prático desenvolvido durante as aulas de desenvolvimento mobile com React Native. O objetivo é demonstrar a implementação de operações CRUD (Create, Read, Update, Delete) utilizando SQLite como banco de dados local.

## Funcionalidades Implementadas

- **Cadastro de Usuários**
  - Formulário para inserir nome e email
  - Validação de campos obrigatórios
  - Feedback visual de sucesso/erro

- **Listagem de Usuários**
  - Exibição em lista de todos os usuários cadastrados
  - Informações de nome e email
  - Botão de exclusão para cada registro

- **Exclusão de Usuários**
  - Confirmação antes da exclusão
  - Feedback visual após a operação
  - Atualização automática da lista

## Tecnologias Utilizadas

- React Native
- Expo
- SQLite
- React Navigation

## Estrutura do Projeto

```
appSQLite/
├── db/
│   └── database.js    # Configuração e operações do banco de dados
├── screens/
│   ├── CadastroScreen.js  # Tela de cadastro de usuários
│   └── ConsultaScreen.js  # Tela de listagem e exclusão
└── App.js             # Configuração principal do aplicativo
```

## Como Executar

1. Clone o repositório
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Execute o projeto:
   ```bash
   npx expo start
   ```

## Aprendizados

Este projeto foi desenvolvido com o objetivo de praticar:
- Integração com banco de dados SQLite
- Navegação entre telas
- Manipulação de formulários
- Tratamento de erros
- Feedback ao usuário
- Boas práticas de desenvolvimento

## Observações

Este é um projeto didático desenvolvido para fins de aprendizado. As funcionalidades implementadas são básicas e podem ser expandidas conforme necessidade. 