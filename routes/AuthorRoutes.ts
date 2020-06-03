import { Fastro } from "https://deno.land/x/fastro/mod.ts";
import * as MessageController from "../controllers/MessageController.ts";

export const authorRoutes = function (fastro: Fastro) {
    fastro.get("/authors", MessageController.getAllMessages);
    fastro.get("/authors/:id", MessageController.getMessageById);
    fastro.post("/authors", MessageController.getAllMessages);
    fastro.put("/authors/:id", MessageController.getAllMessages);
    fastro.delete("/authors/:id", MessageController.getAllMessages);
};
