const { Router } = require("express");
const authorRouter = Router();

const { addAuthor, getAuthorAndBooks } = require("./controllers");

authorRouter.post("/authors/addauthor", addAuthor);
authorRouter.get("/authors/getauthorandbooks/:authorname", getAuthorAndBooks);
authorRouter.delete("/authors/deleteauthor/:authorname", deleteAuthor);
authorRouter.put("/authors/updateauthor/:authorname", updateAuthor);

module.exports = authorRouter;