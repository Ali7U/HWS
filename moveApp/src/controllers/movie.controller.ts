import { Request, Response } from "express";
import prisma from "../config/db";

const postMovie = async (req: Request, res: Response) => {
  try {
    const setMovie = req.body;
    await prisma.movie.create({
      data: setMovie,
    });
    res.json({ msg: "movie has been post!" });
  } catch (error) {
    console.log(error);
  }
};

const showMovies = async (req: Request, res: Response) => {
  let movies = await prisma.movie.findMany();
  res.json(movies);
};

export const updateMovie = async (req: Request, res: Response) => {
  let upd = await prisma.movie.update({
    where: {
      id: req.params.id,
    },
    data: {
      movieName: req.body.movieName,
      genre: req.body.genre,
      rating: req.body.rating,
      duration: req.body.duration,
    },
  });
  if (upd) {
    console.log(upd);
  } else {
    console.log("err");
  }
  res.json({ msg: "Updated seccesfully" });
};

export const deleteMovie = async (req: Request, res: Response) => {
  try {
    await prisma.movie.delete({
      where: {
        id: req.params.id,
      },
    });
    res.json({ msg: "Delete movie has been succesful" });
  } catch (err) {
    res.json({ msg: err });
  }
};

export { postMovie, showMovies };
