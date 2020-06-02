import { Fastro } from "https://deno.land/x/fastro/mod.ts";
import * as MessageController from "./controllers/MessageController.ts";

const server = new Fastro();

/* ******************************** ROUTES ******************************** */

// Article Routes
server.get("/articles", MessageController.getAllMessages);
server.get("/articles/:id", MessageController.getAllMessages);
server.post("/articles", MessageController.getAllMessages);
server.put("/articles/:id", MessageController.getAllMessages);
server.delete("/articles/:id", MessageController.getAllMessages);

// Author Routes
server.get("/authors", MessageController.getAllMessages);
server.get("/authors/:id", MessageController.getMessageById);
server.post("/authors", MessageController.getAllMessages);
server.put("/authors/:id", MessageController.getAllMessages);
server.delete("/authors/:id", MessageController.getAllMessages);

// Message Routes
server.get("/messages", MessageController.getAllMessages);
server.get("/messages/:id", MessageController.getMessageById);
server.post("/messages", MessageController.addNewMessage);
server.put("/messages/:id", MessageController.updateMessageById);
server.delete("/messages/:id", MessageController.deleteMessageById);

/* ************************************************************************ */



// Start Server
await server.listen({ port: 3000 }, (err, addr) => {
  if (err) console.error(err);
  console.log("Listen on:", addr);
});
