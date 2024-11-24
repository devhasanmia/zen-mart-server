import { z } from "zod";


const userValidationSchema = z.object({
    fullName: z
        .string({
            invalid_type_error: "Full Name must be a valid string",
            required_error: "Full Name is required",
        })
        .min(3, "Full name must be at least 3 characters long"),
    email: z
        .string({
            required_error: "Email is required",
        })
        .email("Invalid email address"),
    password: z
        .string({
            invalid_type_error: "Password must be a valid string",
            required_error: "Password is required",
        })
        .min(6, "Password must be at least 6 characters long"),
    role: z
        .enum(["user", "admin"], {
            invalid_type_error: "Role must be either 'user' or 'admin'",
        })
        .default("user")
        .optional(),
    accountStatus: z
        .enum(["active", "inactive", "blocked"], {
            invalid_type_error: "Account status must be 'active', 'inactive', or 'blocked'",
        })
        .default("active"),
    address: z
        .string({
            invalid_type_error: "Address must be a valid string",
            required_error: "Address is required",
        })
        .min(5, "Address must be at least 5 characters long"),
    orders: z
        .array(
            z.string({
                invalid_type_error: "Order ID must be a valid string",
            })
        )
        .optional(),
});



const userValidationSchemaForUpdate = z.object({
    fullName: z
        .string({
            invalid_type_error: "Full Name must be a valid string",
        })
        .min(3, "Full name must be at least 3 characters long")
        .optional(),
    email: z
        .string({
            invalid_type_error: "Email must be a valid string",
        })
        .email("Invalid email address")
        .optional(),
    password: z
        .string({
            invalid_type_error: "Password must be a valid string",
        })
        .min(6, "Password must be at least 6 characters long")
        .optional(),
    role: z
        .enum(["user", "admin"], {
            invalid_type_error: "Role must be either 'user' or 'admin'",
        })
        .default("user")
        .optional(),
    accountStatus: z
        .enum(["active", "inactive", "blocked"], {
            invalid_type_error: "Account status must be 'active', 'inactive', or 'blocked'",
        })
        .default("active")
        .optional(),
    address: z
        .string({
            invalid_type_error: "Address must be a valid string",
        })
        .min(5, "Address must be at least 5 characters long")
        .optional(),
    orders: z
        .array(
            z.string({
                invalid_type_error: "Order ID must be a valid string",
            })
        )
        .optional(),
});


export const userValidation = {
    create: userValidationSchema,
    update: userValidationSchemaForUpdate,
}