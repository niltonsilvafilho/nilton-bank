import { Request, Response } from "express";
import { prismaClient } from "../lib/prisma";

export async function getMovements(req: Request, res: Response) {
  try {
    return await prismaClient.movements.findMany();
  } catch (error) {
    console.log(error);
  }
}

export async function createMovements(req: Request, res: Response) {
  try {
    console.log(req.body, "entrou no");
    return await prismaClient.movements.create(req.body);
  } catch (error) {
    console.log(error);
  }
}
