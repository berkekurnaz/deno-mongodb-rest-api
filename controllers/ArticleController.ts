import { Request } from "https://deno.land/x/fastro/mod.ts";
import { articles,authors } from "../database/db.ts";

//@desc Get All Articles
export const getAllArticles = async (req: Request) => {
  var result = await articles.find();
  for(var i=0; i<result.length; i++){
    result[i].author = await authors.findOne({ _id: { $oid: result[i].author_id } });
  }
  req.send(result);
};

//@desc Get Last Articles
export const getLastArticles = async (req: Request) => {
  const count = req.parameter.count;

  var result = await articles.find();

  result = result.reverse();
  result = result.slice(0,count);
  
  for(var i=0; i<result.length; i++){
    result[i].author = await authors.findOne({ _id: { $oid: result[i].author_id } });
  }
  req.send(result);
};

//@desc Get One Article By Id
export const getArticleById = async (req: Request) => {
  const id = req.parameter.id;

  const result = await articles.findOne({ _id: { $oid: id } });
  result.author = await authors.findOne({ _id: { $oid: result.author_id } });
  if (result) {
    req.send(result, 200);
  } else {
    req.send("Not Found !", 404);
  }
};

//@desc Add One Article
export const addNewArticle = async (req: Request) => {
  const data = JSON.parse(req.payload);

  await articles.insertOne({
    "title": data.title,
    "content": data.content,
    "author_id": data.author_id,
  });
  req.send("OK", 201);
};

//@desc Update One Article By Id
export const updateArticleById = async (req: Request) => {
  const id = req.parameter.id;

  const data = JSON.parse(req.payload);

  const result = await articles.updateOne(
    { _id: { $oid: id } },
    {
      $set: {
        "title": data.title,
        "content": data.content,
        "author_id": data.author_id,
      },
    },
  );

  if (result.modifiedCount === 1) {
    req.send("OK");
  } else {
    req.send("Not Found !");
  }
};

//@desc Delete One Article By Id
export const deleteArticleById = async (req: Request) => {
  const id = req.parameter.id;

  const result = await articles.deleteOne({ _id: { $oid: id } });
  if (result) {
    req.send(result, 200);
  } else {
    req.send("Not Found !", 404);
  }
};