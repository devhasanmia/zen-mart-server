import { Request, Response, NextFunction } from "express";
export const globalError = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err.statusCode || 500;
  const errorResponse = {
    status: "error",
    message: err.message || "Internal Server Error",
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  };
  console.error(err);
  res.status(statusCode).json(errorResponse);
};
