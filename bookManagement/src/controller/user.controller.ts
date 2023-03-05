import prisma from "../config/db";
import { Request, Response } from "express";
// import { v4 as uuidv4 } from "uuid";

export const findUsers = async (req: Request, res: Response) => {
  let users = await prisma.user.findMany();
  res.json(users);
};
export const Register = async (req: Request, res: Response) => {
  let user = await prisma.user.create({
    data: {
      username: req.body.username,
      password: req.body.password,
    },
  });
  res.json({ msg: "user created", user: user });
};

export const updateUser = async (req: Request, res: Response) => {
  let upd = await prisma.user.update({
    where: {
      id: req.params.id,
    },
    data: {
      username: req.body.username,
      password: req.body.password,
    },
  });
  if (upd) {
    console.log(upd);
  } else {
    console.log("err");
  }
  res.json({ msg: "Updated seccesful" });
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    await prisma.user.delete({
      where: {
        id: req.params.id,
      },
    });
    res.json({ msg: "Deleted user has been succesfully" });
  } catch (err) {
    res.json({ msg: err });
  }
};

export const Login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    let user = await prisma.user.findFirst({
      where: {
        username,
        password,
      },
    });
    if (!user) {
      return res.json({ msg: "username or password is wrong" });
    } else {
      res.json({ msg: `welcome back ${username}` });
    }
  } catch (error) {
    console.log(error);
  }
};
