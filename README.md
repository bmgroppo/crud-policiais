# Sistema de Registro de Policiais (CRUD Simplificado)

## Diretoria de Sistemas de Informação  
**Seção de Instrução Especializada**  
Curso de Análise e Desenvolvimento de Sistemas – CADSPM I 2025  
**Avaliação Prática – Sistema de Registro de Policiais**  
**Aluno:** Bruno Miranda PPO  
**Data:** 25/08/2025

---

## Objetivo do Projeto

Este projeto tem como objetivo desenvolver uma aplicação web para cadastro e listagem de policiais militares, permitindo o gerenciamento de dados pessoais básicos. O sistema foi desenvolvido como parte de uma avaliação prática para o Curso de Análise e Desenvolvimento de Sistemas, seguindo as orientações e requisitos técnicos estabelecidos pela Seção de Instrução Especializada.

---

## Tecnologias Utilizadas

- **Backend:** Node.js, Express, MySQL, dotenv, bcrypt (para criptografia)
- **Frontend:** Angular 19 standalone
- **Banco de Dados:** MySQL

---

## Estrutura do Projeto

O repositório está organizado em duas pastas principais:

```
crud-policiais/
│
├── backend/    # Código-fonte do Node.js (API RESTful)
│   ├── src/
│   ├── .env.example
│   └── package.json
│
└── frontend/   # Código-fonte do Angular 19 (SPA)
    ├── src/
    └── angular.json
```

---

## Instruções de Instalação e Execução

### **Pré-requisitos**

- Node.js (versão 18+ recomendada)
- Angular CLI (versão 19)
- MySQL Server

### **Banco de Dados**

1. Crie um banco de dados no MySQL:
   ```sql
   CREATE DATABASE crud_policiais;
   ```
2. Crie a tabela `policiais`:
   ```sql
   CREATE TABLE policiais (
     id INT AUTO_INCREMENT PRIMARY KEY,
     rg_civil VARCHAR(20) NOT NULL UNIQUE,
     rg_militar VARCHAR(20) NOT NULL UNIQUE,
     cpf VARCHAR(14) NOT NULL UNIQUE,
     data_nascimento DATE NOT NULL,
     matricula VARCHAR(255) NOT NULL,
     INDEX idx_cpf (cpf),
     INDEX idx_matricula (matricula)
   );
   ```

### **Backend**

1. Acesse a pasta `backend`:
   ```
   cd backend
   ```
2. Instale as dependências:
   ```
   npm install
   ```
3. Copie o arquivo `.env.example` para `.env` e configure as variáveis do banco:
   ```
   DB_HOST=localhost
   DB_USER=seu_usuario
   DB_PASSWORD=sua_senha
   DB_DATABASE=crud_policiais
   ```
4. Inicie o servidor:
   ```
   npm start
   ```
5. API disponível em: `http://localhost:3000`

#### **Rotas Principais**
- `POST /policiais` – Cadastra policial (com validação de CPF e criptografia da matrícula)
- `GET /policiais` – Lista policiais (matrícula descriptografada, permite filtro por CPF/RG)

### **Frontend**

1. Acesse a pasta `frontend`:
   ```
   cd frontend
   ```
2. Instale as dependências:
   ```
   npm install
   ```
3. Inicie a aplicação:
   ```
   ng serve
   ```
4. Acesse pelo navegador: `http://localhost:4200`

---

## Prints das Telas

### Tela de Cadastro

![Tela de Cadastro](./prints/cadastro.png)

### Tela de Listagem

![Tela de Listagem](./prints/listagem.png)

---

## Observações sobre Boas Práticas

- Uso de variáveis de ambiente para dados sensíveis.
- Criptografia de matrícula com bcrypt.
- Mensagens de erro claras para o usuário.
- Estrutura de projeto modular e organizada.
- Commits frequentes e mensagens explicativas para facilitar o acompanhamento da evolução do projeto.

---

## Justificativa da Organização no GitHub

A publicação deste projeto em um repositório público no GitHub permite ao avaliador:
- Acessar facilmente todo o código-fonte e documentação.
- Auditar a evolução do desenvolvimento via histórico de commits.
- Testar a aplicação seguindo as instruções fornecidas neste README.
- Comprovar o domínio das melhores práticas de versionamento, organização e documentação em projetos de software.

---

**Desenvolvido por:**  
Bruno Miranda Groppo  
25/08/2025
