import { sendEmail } from "../utils/mail.js";

export const newsletterController = (req, res) => {
  const { email } = req.body;
  try {
    sendEmail(
      email,
      "Crescentaria NewsLetter",
      `<body style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f4f4f4;">
    <div style="width: 100%; max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
        <div style="text-align: center; padding: 20px; background-color: #4a90e2; color: #ffffff;">
            <img src="logo.png" alt="Crescentaria Logo" style="max-width: 150px;">
        </div>
        <div style="text-align: center; margin: 20px 0;">
            <img src="banner.jpg" alt="Main Banner Image" style="width: 100%; max-width: 600px; height: auto;">
            <h1 style="font-size: 24px; margin: 10px 0;">Welcome to Crescentaria!</h1>
            <p style="font-size: 16px; margin: 10px 0;">Your source for the latest updates and stories.</p>
            <a href="#" style="display: inline-block; padding: 10px 20px; background-color: #4a90e2; color: #ffffff; text-decoration: none; border-radius: 5px; margin-top: 10px;">Read More</a>
        </div>
        <div style="padding: 20px 0;">
            <h2 style="font-size: 20px; margin-bottom: 10px;">Featured Articles</h2>
            <div style="display: flex; align-items: center; margin-bottom: 20px;">
                <img src="article1.jpg" alt="Article 1 Image" style="max-width: 100px; margin-right: 20px;">
                <div>
                    <h3 style="font-size: 18px; margin: 0;">Article Title 1</h3>
                    <p style="margin: 5px 0; font-size: 14px;">Brief description of the first article.</p>
                    <a href="#" style="color: #4a90e2; text-decoration: none;">Read More</a>
                </div>
            </div>
            <div style="display: flex; align-items: center; margin-bottom: 20px;">
                <img src="article2.jpg" alt="Article 2 Image" style="max-width: 100px; margin-right: 20px;">
                <div>
                    <h3 style="font-size: 18px; margin: 0;">Article Title 2</h3>
                    <p style="margin: 5px 0; font-size: 14px;">Brief description of the second article.</p>
                    <a href="#" style="color: #4a90e2; text-decoration: none;">Read More</a>
                </div>
            </div>
        </div>
        <div style="text-align: center; padding: 20px; background-color: #f4f4f4; color: #666666;">
            <p>&copy; 2024 Crescentaria. All rights reserved.</p>
            <p><a href="#" style="color: #4a90e2; text-decoration: none;">Unsubscribe</a> | <a href="#" style="color: #4a90e2; text-decoration: none;">Contact Us</a></p>
        </div>
    </div>
</body>`
    );
    res.status(200).json("The mail was sent successfully");
  } catch (err) {
    res.status(404).json(err);
  }
};
