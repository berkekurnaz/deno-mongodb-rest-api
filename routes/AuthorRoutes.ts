import { Fastro } from "https://deno.land/x/fastro/mod.ts";
import * as AuthorController from "../controllers/AuthorController.ts";

export const authorRoutes = function (fastro: Fastro) {
    fastro.get("/authors", AuthorController.getAllAuthors);
    fastro.get("/authors/:id", AuthorController.getAuthorById);
    fastro.post("/authors", AuthorController.addNewAuthor);
    fastro.put("/authors/:id", AuthorController.updateAuthorById);
    fastro.delete("/authors/:id", AuthorController.deleteAuthorById);
};
