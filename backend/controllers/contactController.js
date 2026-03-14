import {
  createTransporter,
  createContactEmailTemplate,
} from "../config/emailConfig.js";
import { EMAIL_CONFIG } from "../config/constants.js";

export const sendContactEmail = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all required fields (name, email, message)",
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address",
      });
    }

    // Check if email credentials are configured
    if (!EMAIL_CONFIG.SENDER_EMAIL || !EMAIL_CONFIG.SENDER_PASSWORD) {
      console.error(
        "Email credentials not configured. Please set SENDER_EMAIL and SENDER_PASSWORD in .env file",
      );
      return res.status(500).json({
        success: false,
        message:
          "Email service is not configured. Please contact the administrator.",
      });
    }

    // Create transporter
    const transporter = createTransporter();

    // Verify transporter configuration
    try {
      await transporter.verify();
      console.log("✅ Email server is ready to send messages");
    } catch (error) {
      console.error("❌ Email server verification failed:", error);
      return res.status(500).json({
        success: false,
        message:
          "Email service configuration error. Please check your email credentials.",
      });
    }

    // Create email template
    const mailOptions = createContactEmailTemplate({
      name,
      email,
      subject,
      message,
    });

    // Send email
    const info = await transporter.sendMail(mailOptions);

    console.log("✅ Email sent successfully:", info.messageId);
    console.log("📧 To:", EMAIL_CONFIG.RECEIVER_EMAIL);
    console.log("👤 From:", name, `(${email})`);

    res.status(200).json({
      success: true,
      message:
        "Your message has been sent successfully! We will get back to you soon.",
      messageId: info.messageId,
    });
  } catch (error) {
    console.error("❌ Error sending email:", error);
    res.status(500).json({
      success: false,
      message:
        "Failed to send email. Please try again later or contact us directly.",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
};
