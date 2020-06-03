import { Fastro } from "https://deno.land/x/fastro/mod.ts";

import * as ArticleRoutes from "./routes/ArticleRoutes.ts";
import * as AuthorRoutes from "./routes/AuthorRoutes.ts";
import * as MessageRoutes from "./routes/MessageRoutes.ts";

const server = new Fastro();

// Article Routes
server.register(ArticleRoutes.articleRoutes);

// Author Routes
server.register(AuthorRoutes.authorRoutes);

// Message Routes
server.register(MessageRoutes.messageRoutes);

// Start Server
await server.listen({ port: 3000 }, (err, addr) => {
  if (err) console.error(err);
  console.log("Listen on:", addr);
});
