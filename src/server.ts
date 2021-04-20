// importa a dependência express instalada anteriormente
import express, { request, response } from "express";

// importa o index.ts criado na pasta database que cria
// a conexão com o banco de dados sem a necessidade de referenciar
// o index.ts, visto que, o JS automaticamente entende que estamos
// importando um arquivo index.
import "./database";

import { routes } from "./routes";

// cria um objeto app para receber tudo que o express pode prover
const app = express();

app.use(express.json());

app.use(routes);

// criando o servidor e colocando para rodar na porta 3333
app.listen(3333, () => console.log("Server is running on port 3333"));