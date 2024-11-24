export const generateSKU = () => {
    const randomString = Math.random().toString(36).substring(2, 15).toUpperCase();
    return `ZEN-${randomString}`;
};