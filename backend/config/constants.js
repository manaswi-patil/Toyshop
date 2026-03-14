import dotenv from 'dotenv';

// Load environment variables when this config file is imported
dotenv.config();

export const EMAIL_CONFIG = {
  // Email to receive contact form submissions
  RECEIVER_EMAIL: process.env.RECEIVER_EMAIL || "imanaswi.patil@gmail.com",

  // Email service configuration
  SERVICE: "gmail", // You can change this to 'outlook', 'yahoo', etc.

  // These will be loaded from environment variables
  SENDER_EMAIL: process.env.SENDER_EMAIL || "",
  SENDER_PASSWORD: process.env.SENDER_PASSWORD || "",

  // Email subject
  SUBJECT: "New Contact Form Submission - ToyShop",
};

export const SERVER_CONFIG = {
  PORT: process.env.PORT || 5000,
  NODE_ENV: process.env.NODE_ENV || "development",
};
