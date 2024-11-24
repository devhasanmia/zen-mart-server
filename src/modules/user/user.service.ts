import config from "../../config";
import User from "./user.model";
import { TUser } from "./user.type"
import bcrypt from "bcryptjs";
import jwt, { JwtPayload } from "jsonwebtoken";
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
            throw new Error("Email and password are required");
        }
        const user = await User.findOne({ email });
        if (!user) {
            throw new Error("Invalid email or password");
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            throw new Error("Invalid email or password");
        }
        const token = jwt.sign({ id: user._id }, config.JWT_SECRET as string, { expiresIn: "12h" });
        // remove password from user object before returning
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