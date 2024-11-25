import config from "../../config";
import AppError from '../../errors/AppError';
import User from "./user.model";
import { TUser } from "./user.type"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const signup = async (payload: TUser) => {
    try {
        payload.password = await bcrypt.hash(payload.password, 10); // Password hashing
        const user = await User.create(payload);
        return user;
    } catch (error) {
        throw error;
    }
}


const login = async (email: string, password: string) => {
    try {
        if (!email || !password) {
            throw new AppError(404, "Email and password are required");
        }
        const user = await User.findOne({ email });
        if (!user) {
            throw new AppError(404, "Invalid email or password");
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            throw new AppError(404, "Invalid email or password");
        }
        const token = jwt.sign({ id: user._id }, config.JWT_SECRET as string, { expiresIn: "12h" });
        const data = await User.findOne({ email: user.email }).select("-password");
        return {
            data,
            token,
        };
    } catch (error) {
        throw error;
    }
};


export const UserService = {
    signup,
    login,
}