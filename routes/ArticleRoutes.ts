import { Fastro } from "https://deno.land/x/fastro/mod.ts";
import * as ArticleController from "../controllers/ArticleController.ts";

export const articleRoutes = function (fastro: Fastro) {
  fastro.get("/articles", ArticleController.getAllArticles);
  fastro.get("/articles/:id", ArticleController.getArticleById);
  fastro.post("/articles", ArticleController.addNewArticle);
  fastro.put("/articles/:id", ArticleController.updateArticleById);
  fastro.delete("/articles/:id", ArticleController.deleteArticleById);
};
