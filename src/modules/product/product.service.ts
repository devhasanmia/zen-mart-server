import { generateSKU } from "../../utils/generateSKU";
import { sendImagesToCloudinary } from "../../utils/sendImageToCloudinary";
import Product from "./product.model";
type Image = {
    path: string;
}

const createProduct = async (payload: any, image: any) => {
    try {
  
        payload.SKU = generateSKU();
        const signle = image.image[0].path;
        const multipleI = image.images?.map((image: Image) => image.path) || [];
        const sendImage = [signle, ...multipleI];
        const uploadResult = await sendImagesToCloudinary(sendImage);
        const images = uploadResult.slice(1).map((img: any) => img.secure_url);
        payload.image = uploadResult[0].secure_url;
        payload.images = images;
        const product = await Product.create(payload);
        return product;
    } catch (error) {
        throw error;
    }
}


export const ProductService = {
    createProduct,
}



