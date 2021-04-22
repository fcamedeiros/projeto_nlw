// importa a dependência express instalada anteriormente
import express, { request, response } from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";

import path from "path";

// importa o index.ts criado na pasta database que cria
// a conexão com o banco de dados sem a necessidade de referenciar
// o index.ts, visto que, o JS automaticamente entende que estamos
// importando um arquivo index.
import "./database";

import { routes } from "./routes";

// cria um objeto app para receber tudo que o express pode prover
const app = express();

// inserindo o caminho dos arquivos da pasta public
app.use(express.static(path.join(__dirname, "..", "public")));

// definindo que as views estão na pasta public
app.set("views", path.join(__dirname, "..", "public"));

// definindo que a engine utilizada sera o html e nao o ejs
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

// criando uma rota de teste para executar a pagina de suporte
app.get("/pages/client", (request, response) => {
  return response.render("html/client.html");
});

// cria o protocolo http
const http = createServer(app);

// cria o protocolo de ws (websocket)
const io = new Server(http);

io.on("connection", (socket: Socket) => {
  // console.log("Se conectou", socket.id);
});

app.use(express.json());

app.use(routes);

export { http, io };