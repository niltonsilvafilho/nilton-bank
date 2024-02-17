/* eslint-disable @typescript-eslint/no-var-requires */
import express, { Request, Response } from "express";
import { getCategories, getCategoryBalance } from "./controllers/Category";
import { createMovements, getMovements } from "./controllers/Movements";
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

app.get("/teste", async function (req: Request, res: Response) {
  // eslint-disable-next-line prefer-const
  let response = await getCategories(req, res);
  console.log("🚀 ~ app.get ~ response:", response);
  res.status(200).send(response);
});

app.get("/balance", async function (req: Request, res: Response) {
  // eslint-disable-next-line prefer-const
  let response = await getCategoryBalance(req, res);
  console.log("🚀 ~ app.get ~ response:", response);
  res.status(200).send(response);
});

app.get("/movements", async function (req: Request, res: Response) {
  // eslint-disable-next-line prefer-const
  let response = await getMovements(req, res);
  console.log("🚀 ~ app.get ~ response:", response);
  res.status(200).send(response);
});

app.post("/movements", async function (req: Request, res: Response) {
  console.log("🚀 ~ app.post ~ movements:", req.body);
  let response = await createMovements(req, res);

  res.send("");
});

app.post("/teste", function (req: Request, res: Response) {
  console.log("🚀 ~ app.post ~ teste:");
  console.log(req.body);
  res.send("");
});

app.listen(3000, () => {
  console.log("Projeto executando na porta 3000");
});
