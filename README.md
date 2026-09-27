# CRUD de Livros da Bíblia com Node.js

API simples para cadastrar e gerenciar livros da Bíblia, usando Node.js, Express e Mongoose.

## Estrutura

```text
src/
├── controllers/
│   └── livroController.js
├── models/
│   └── Livro.js
├── routes/
│   └── livroRoutes.js
└── server.js

## Executar

```bash
npm install
cp .env.example .env
npm run dev
```

É necessário ter o MongoDB rodando localmente.

## Rotas

| Método | Rota | Ação |
|---|---|---|
| GET | /Livro | Lista livros |
| GET | /Livro/:id | Busca um livro |
| POST | /Livro | Cria um livro |
| PUT | /Livro/:id | Atualiza um livro |
| DELETE | /Livro/:id | Exclui um livro |

## Exemplos de JSON

```json
{
  "nome": "Gênesis",
  "testamento": "Antigo",
  "capitulos": 50
}

{
  "nome": "João",
  "testamento": "Novo",
  "capitulos": 21
}