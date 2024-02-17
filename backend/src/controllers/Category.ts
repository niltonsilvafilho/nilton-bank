/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from "express";
import { prismaClient } from "../lib/prisma";

export async function getCategories(req: Request, res: Response) {
  try {
    return await prismaClient.category.findMany();
  } catch (error) {
    console.log(error);
  }
}

export async function getCategoryBalance(req: Request, res: Response) {
  try {
    return await prismaClient.category.findMany({
      where: {
        slug: "balance",
      },
    });
  } catch (error) {
    console.log(error);
  }
}

export async function createCategory(req: Request, res: Response) {
  try {
    return await prismaClient.category.create(req.body);
  } catch (error) {
    console.log(error);
  }
}
