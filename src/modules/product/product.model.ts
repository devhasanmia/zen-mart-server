import { model, Schema } from "mongoose";
import { TProduct } from "./product.type";

const productSchema = new Schema<TProduct>({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    stockQuantity: {
        type: Number,
        required: true,
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category",
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    images: {
        type: [String],
    },
    status: {
        type: String,
        enum: ["active", "inactive", "out-of-stock", "discontinued"],
        required: true,
    },
    brand: {
        type: Schema.Types.ObjectId,
        ref: "Brand",
        required: true,
    },
    discount: {
        type: Number,
    },
    SKU: {
        type: String,
        required: true,
        unique: true,
    },
    tags: {
        type: [String],
    },
}, { timestamps: true });

const Product = model<TProduct>("Product", productSchema);
export default Product;
