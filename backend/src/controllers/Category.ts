import { Request, Response } from "express";
import { prismaClient } from "../lib/prisma";



export async function getCategories(req: Request, res: Response){
  try{

    return await prismaClient.category.findMany()
  }catch(error){
    console.log(error)
  }
}