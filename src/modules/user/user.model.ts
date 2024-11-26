import { model, Schema } from "mongoose";
import { TUser } from "./user.type";

const userSchema = new Schema<TUser>({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user",
    },
    accountStatus: {
        type: String,
        enum: ["active", "inactive", "blocked"],
        default: "inactive",
    },
    address: {
        type: String,
        required: true,
    },
    orders: {
        type: [Schema.Types.ObjectId],
        ref: "Order",
    },
}, { timestamps: true });

userSchema.pre("save", async function (next) {
    this.role = "user";
    this.accountStatus = "inactive";
    next();
});

const User = model<TUser>("User", userSchema);
export default User;
