import { MongoClient } from "https://deno.land/x/mongo@v0.7.0/mod.ts";

const client = new MongoClient();
client.connectWithUri("mongodb://localhost:27017");

const db = client.database("DbMyFirstDenoRestApi");
const articles = db.collection("articles");
const authors = db.collection("authors");
const messages = db.collection("messages");

export { articles, authors, messages };