// Package Imports
import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import router from "./routes";
import notFound from "./middlewares/notFound";
import { globalError } from "./middlewares/globalError";
import multer from "multer";
const app: Application = express();

// Rate Limiting Configuration
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

// Middleware Configuration
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(limiter);

// Routes Configuration
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    status: "OK",
    message: "Server is up and running!",
  });
});
app.use("/api/v1/", router);
// Error Handling Middleware
app.use(((err, req, res, next) => globalError(err, req, res, next)) as (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => void);

// Not Found Middleware
app.use(notFound);

export default app;
