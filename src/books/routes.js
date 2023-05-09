const { Router } = require("express");
const bookRouter = Router();

bookRouter.get("/books", controller.getBooks);
bookRouter.get("/books/:id", controller.getBookById);

bookRouter.post("/books", controller.createBook);

bookRouter.put("/books/:id", controller.updateBook);

bookRouter.delete("/books/:id", controller.deleteBook);

module.exports = bookRouter;