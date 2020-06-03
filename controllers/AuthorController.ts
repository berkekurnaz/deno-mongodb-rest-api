import { Request } from "https://deno.land/x/fastro/mod.ts";
import { authors } from "../database/db.ts";

//@desc Get All Authors
export const getAllAuthors = async (req: Request) => {
  const result = await authors.find();
  req.send(result);
};

//@desc Get One Author By Id
export const getAuthorById = async (req: Request) => {
  const id = req.parameter.id;

  const result = await authors.findOne({ _id: { $oid: id } });
  if (result) {
    req.send(result, 200);
  } else {
    req.send("Not Found !", 404);
  }
};

//@desc Add One Author
export const addNewAuthor = async (req: Request) => {
  const data = JSON.parse(req.payload);

  await authors.insertOne({
    "namesurname": data.namesurname,
    "description": data.description,
    "username": data.username,
    "password": data.password,
  });
  req.send("OK", 201);
};

//@desc Update One Author By Id
export const updateAuthorById = async (req: Request) => {
  const id = req.parameter.id;

  const data = JSON.parse(req.payload);

  const result = await authors.updateOne(
    { _id: { $oid: id } },
    {
      $set: {
        "namesurname": data.namesurname,
        "description": data.description,
        "username": data.username,
        "password": data.password,
      },
    },
  );

  if (result.modifiedCount === 1) {
    req.send("OK");
  } else {
    req.send("Not Found !");
  }
};

//@desc Delete One Author By Id
export const deleteAuthorById = async (req: Request) => {
  const id = req.parameter.id;

  const result = await authors.deleteOne({ _id: { $oid: id } });
  if (result) {
    req.send(result, 200);
  } else {
    req.send("Not Found !", 404);
  }
};
