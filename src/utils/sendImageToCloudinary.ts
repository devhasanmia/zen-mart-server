import { v2 as cloudinary } from 'cloudinary';
import config from '../config';
import multer from 'multer';

// Configuration
cloudinary.config({
    cloud_name: config.CLOUDINARY_CLOUD_NAME,
    api_key: config.CLOUDINARY_API_KEY,
    api_secret: config.CLOUDINARY_API_SECRET
});

// Upload an image
// export const sendImageToCloudinary = async () => {
//     const uploadResult = await cloudinary.uploader
//         .upload('https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg')
//         .catch((error) => {
//             console.log(error);
//         });
//     return uploadResult;
// }

export const sendImagesToCloudinary = async (images: any[]) => {
    try {
        const uploadResults = await Promise.all(
            images.map(async (image) => {
                const uploadResult = await cloudinary.uploader
                    .upload(image, {
                    })
                    .catch((error) => {
                        console.log("Error uploading image:", error);
                        return null;
                    });
                return uploadResult;
            })
        );
        const successfulUploads = uploadResults.filter((result) => result !== null);
        return successfulUploads;
    } catch (error) {
        console.error("Error during multiple image uploads:", error);
        throw new Error("Failed to upload images");
    }
}




const storage = multer.diskStorage({
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})

export const upload = multer({ storage: storage })



