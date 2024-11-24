import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";

export const globalError = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err.statusCode || 500;

  // General error response
  const errorResponse = {
    success: false,
    message: err.message || "An unexpected error occurred.",
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  };

  // Zod validation error
  if (err instanceof ZodError) {
    const validationErrors = err.errors.map((validationError) => {
      const format = validationError.path.join(".");
      return {
        path: format,
        message: validationError.message,
      };
    });
    return res.status(400).json({
      success: false,
      message: "Validation errors occurred.",
      errors: validationErrors,
    });
  }

  // MongoDB duplicate key error (E11000)
  if (err.code === 11000) {
    const duplicateField = Object.keys(err.keyValue)[0];
    const duplicateValue = err.keyValue[duplicateField];
    let customMsg = "";
    if (duplicateField === 'email') {
      customMsg = `Email address '${duplicateValue}' is already in use.`;
    } else {
      customMsg = `The value '${duplicateValue}' is already in use for the field '${duplicateField}'.`;
    }
    return res.status(409).json({
      success: false,
      message: customMsg,
      errors: [
        {
          path: duplicateField,
          message: customMsg,
        },
      ],
    });
  }
  return res.status(statusCode).json(errorResponse);
};
