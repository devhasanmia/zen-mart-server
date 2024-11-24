import { z } from "zod";


const productValidation = z.object(
    {
        name: z.string({
            invalid_type_error: "Product name must be a valid string",
            required_error: "Product name is required",
        }),
        description: z.string({
            invalid_type_error: "Description must be a valid string",
            required_error: "Description is required",
        }).min(10, "Description must be at least 10 characters long")
            .max(200, "Description must be at most 200 characters long"),
        price: z.number({
            invalid_type_error: "Price must be a valid number",
            required_error: "Price is required",
        }).positive(),
        stockQuantity: z.number({
            invalid_type_error: "Quantity must be a valid number",
            required_error: "Quantity is required",
        }),
        category: z.string({
            invalid_type_error: "Category must be a valid string",
            required_error: "Category is required",
        }),
        image: z.string({
            invalid_type_error: "Image URL must be a valid string",
            required_error: "Image URL is required",
        }).optional(),
        images: z.array(z.string({
            invalid_type_error: "Image URL must be a valid string",
        })).optional(),
        status: z.enum(["active", "inactive", "out-of-stock", "discontinued"], {
            invalid_type_error: "Status must be 'active', 'inactive', 'out-of-stock', or 'discontinued'",
        }),
        brand: z.string({
            invalid_type_error: "Brand must be a valid string",
            required_error: "Brand is required",
        }),
        discount: z.number({
            invalid_type_error: "Discount must be a valid number",
        }).optional(),
        tags: z.array(z.string({})).optional(),
        SKU: z.string({
            invalid_type_error: "SKU must be a valid string",
        }).optional(),
        orders: z.array(z.string({
            invalid_type_error: "Order ID must be a valid string",
        })).optional(),
    }
)


const productUpdateValidation = productValidation.partial();

export const ProductValidation = {
    create: productValidation,
    update: productUpdateValidation,
}