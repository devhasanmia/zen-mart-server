import { RequestHandler } from "express";
import { userValidation } from "./user.validation";
import { UserService } from "./user.service";
import { TUser } from "./user.type";

const signup: RequestHandler = async (req, res, next) => {
    try {
        const payload = await userValidation.create.parseAsync(req.body);
        const user = await UserService.signup(payload as TUser);
        res.status(201).json({
            success: true,
            message: "Congratulations, your account is successfully registered!",
            data: user,
        });
    } catch (error) {
        next(error);
    }
}

const login: RequestHandler = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await UserService.login(email, password);
        res.json({
            success: true,
            message: "Logged in successfully!",
            data: user,
        });
    } catch (error) {
        next(error);
    }
}

export const UserController = {
    signup,
    login,
}