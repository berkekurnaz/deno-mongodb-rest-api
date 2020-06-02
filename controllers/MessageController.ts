import { Request } from "https://deno.land/x/fastro/mod.ts";
import { messages } from "../database/db.ts";

//@desc Get All Messages
export const getAllMessages = async (req: Request) => {
  const result = await messages.find();
  req.send(result);
};

//@desc Get One Message By Id
export const getMessageById = async (req: Request) => {
  const id = req.parameter.id;

  const result = await messages.findOne({ _id: { $oid: id } });
  if (result) {
    req.send(result, 200);
  } else {
    req.send("Not Found !", 404);
  }
};

//@desc Add One Message
export const addNewMessage = async (req: Request) => {
  const data = JSON.parse(req.payload);

  await messages.insertOne({
    "namesurname": data.namesurname,
    "mail": data.mail,
    "title": data.title,
    "content": data.content,
  });
  req.send("OK", 201);
};

//@desc Update One Message By Id
export const updateMessageById = async (req: Request) => {
  const id = req.parameter.id;

  const data = JSON.parse(req.payload);

  const result = await messages.updateOne(
    { _id: { $oid: id } },
    {
      $set: {
        "namesurname": data.namesurname,
        "mail": data.mail,
        "title": data.title,
        "content": data.content,
      },
    },
  );

  if (result.modifiedCount === 1) {
    req.send("OK");
  } else {
    req.send("Not Found !");
  }
};

//@desc Delete One Message By Id
export const deleteMessageById = async (req: Request) => {
  const id = req.parameter.id;

  const result = await messages.deleteOne({ _id: { $oid: id } });
  if (result) {
    req.send(result, 200);
  } else {
    req.send("Not Found !", 404);
  }
};
