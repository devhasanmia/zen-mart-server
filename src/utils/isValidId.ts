import mongoose from "mongoose";
import AppError from "../errors/AppError";
export const isValidId = (id: string, message: string) => {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new AppError(400, message);
    }
}


