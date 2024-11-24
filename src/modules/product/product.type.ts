import { Types } from "mongoose";
export type TProduct = {
    name: string;
    description: string;
    price: number;
    stockQuantity: number;
    category: Types.ObjectId;
    image: string;
    images?: string[];
    status: "active" | "inactive" | "out-of-stock" | "discontinued";
    brand: Types.ObjectId;
    discount?: number;
    tags?: string[];
    SKU: string;
}