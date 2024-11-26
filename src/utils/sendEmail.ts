import nodemailer from "nodemailer";

export const sendEmail = async () => {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: "hasanmiaweb@gmail.com",
          pass: "uhco tsgj opjy esbh",
        },
      });
      await transporter.sendMail({
        from: '"hasanmiaweb@gmail.com', 
        to: "hasanmiadev05@gmail.com",
        subject: "OTP Verification",  
        text: "OTP ve", 
        html: "<b>Hello world?</b>",
      });
}