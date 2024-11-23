import { Request, Response, NextFunction } from "express";
const notFound = (req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    success: false,
    message: "Resource not found",
    errorMessages: [
      {
        path: req.originalUrl,
        message: "The requested resource could not be found.",
      },
    ],
  });
};

export default notFound;
