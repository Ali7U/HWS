import { Request, Response } from "express";
import prisma from "../config/db";

export const postLoan = async (req: Request, res: Response) => {
  try {
    const { userID, bookID } = req.body;
    await prisma.loan.create({
      data:{
        userID,
        bookID
      },
    });
    res.json({ msg: "loan has been created successfully" });
  } catch (err) {
    console.log(err);
  }
};

export const getLoans = async (req: Request, res: Response) => {
  try {
    const loans = await prisma.loan.findMany();
    res.json(loans);
  } catch (error) {
    console.log(error);
  }
};


export const endpointWithBooks = async (req: Request, res: Response) => {
  let user = await prisma.loan.findFirst({
    where: {
      id: req.body.id,
    },
  });
  res.json({ msg: `Hello, your book id is: ${user?.bookID}` });
};