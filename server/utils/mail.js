import nodemailer from "nodemailer";

export const sendEmail = (to, subject, text) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "crescentaria2024@gmail.com",
      pass: "iwkj ajfy duzj lqvl",
    },
  });

  transporter.verify(function (error, success) {
    if (error) {
      console.log("Connection error:", error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });
  let mailOptions = {
    from: "crescentaria2024@gmail.com",
    to: to,
    subject: subject,
    text: text,
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      console.log("Error " + err);
    } else {
      console.log("Email sent successfully");
    }
  });
};
