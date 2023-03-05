import { Request, Response } from "express";
import prisma from "../config/db";

export const postBook = async (req: Request, res: Response) => {
  try {
    const book = req.body;
    await prisma.books.create({
      data: book,
    });
    res.json({ msg: "books created successfully" });
  } catch (err) {
    console.log(err);
  }
};

export const getAllbooks = async (req: Request, res: Response) => {
  try {
    const books = await prisma.books.findMany();
    res.json(books);
  } catch (error) {
    console.log(error);
  }
};

export const deletebook = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await prisma.books.deleteMany({
      where: {
        id: id,
      },
    });
    res.json({
      message: " book has been deleted successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateBook = async (req: Request, res: Response) => {
  try {
    await prisma.books.update({
      where: {
        id: req.params.id,
      },
      data: {
        bookName: req.body.bookName,
        genre: req.body.genre,
      },
    });

    res.json({ msg: "book has been Updated seccesfully" });
  } catch (err) {
    console.log(err);
  }
};

