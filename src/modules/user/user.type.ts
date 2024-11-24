import { Types } from "mongoose";

export type TUser = {
    fullName: string;
    email: string;
    password: string;
    role: "user" | "admin";
    accountStatus: | "active" | "inactive" | "blocked";
    address: string;
    orders?: Types.ObjectId[];
}