import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { validationResult } from "express-validator";

const signup = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const validation = validationResult(req);

    return res.json({ body: { ...req.body }, validation });

    return res
      .status(StatusCodes.OK)
      .json({ status: "success", mag: "signup" });
  } catch (error) {
    return next(error);
  }
};

const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    return res.status(StatusCodes.OK).json({ status: "success", mag: "login" });
  } catch (error) {
    return next(error);
  }
};

const logout = async (req: Request, res: Response, next: NextFunction) => {
  try {
    return res
      .status(StatusCodes.OK)
      .json({ status: "success", mag: "logout" });
  } catch (error) {
    return next(error);
  }
};

export { signup, login, logout };