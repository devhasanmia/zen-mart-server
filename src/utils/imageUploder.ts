import { upload } from "./sendImageToCloudinary"

export const imageUpload = () => {
    return upload.fields([{name: "image",maxCount: 1}, {name: "images",maxCount: 10}])
}