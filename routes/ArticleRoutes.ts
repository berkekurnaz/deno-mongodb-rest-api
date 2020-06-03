import { Fastro } from "https://deno.land/x/fastro/mod.ts";
import * as MessageController from "../controllers/MessageController.ts";

export const articleRoutes = function (fastro: Fastro) {
  fastro.get("/articles", MessageController.getAllMessages);
  fastro.get("/articles/:id", MessageController.getAllMessages);
  fastro.post("/articles", MessageController.getAllMessages);
  fastro.put("/articles/:id", MessageController.getAllMessages);
  fastro.delete("/articles/:id", MessageController.getAllMessages);
};
