import { Request } from "https://deno.land/x/fastro/mod.ts";
import { articles } from "../database/db.ts";

//@desc Get All Articles
export const getAllMessages = async (req: Request) => {
  const result = await articles.find();
  req.send(result);
};
