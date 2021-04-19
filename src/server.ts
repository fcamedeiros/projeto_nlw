import express, { request, response } from "express";

const app = express();

/** 
 * GET    = Buscas
 * POST   = Criacao
 * PUT    = Alteracao
 * DELETE = Deletar
 * PATCH  = Alterar uma informacao especific
*/

app.get("/", (request, response) => {
  //return response.send("Ola NLW 05");
  return response.json({
    message: "Ola NLW 05",
  });
});

app.post("/", (request, response) => {
  return response.json({
    message: "Usuario salvo com sucesso!",
  });
});

app.listen(3333, () => console.log("Server is running on port 3333"));