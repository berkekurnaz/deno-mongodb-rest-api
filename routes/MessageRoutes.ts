import { Fastro } from "https://deno.land/x/fastro/mod.ts";
import * as MessageController from "../controllers/MessageController.ts";

export const messageRoutes = function (fastro: Fastro) {
    fastro.get("/messages", MessageController.getAllMessages);
    fastro.get("/messages/:id", MessageController.getMessageById);
    fastro.post("/messages", MessageController.addNewMessage);
    fastro.put("/messages/:id", MessageController.updateMessageById);
    fastro.delete("/messages/:id", MessageController.deleteMessageById);
};
