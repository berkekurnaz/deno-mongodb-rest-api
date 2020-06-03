import { Request } from "https://deno.land/x/fastro/mod.ts";
import { articles } from "../database/db.ts";

//@desc Get All Articles
export const getAllArticles = async (req: Request) => {
  // BU KISIM HATALI...
  const result = await articles.aggregate([
    {
      $lookup: {
        from: "authors",
        localField: "author_id", // author_id
        foreignField: "_id.oid",
        as: "author",
      },
    },
    {
      $unwind: "$author",
    },
  ]);
  req.send(result);
};

//@desc Get One Article By Id
export const getArticleById = async (req: Request) => {
  // BU KISIM HATALI...
  const id = req.parameter.id;

  const result = await articles.findOne({ _id: { $oid: id } });
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