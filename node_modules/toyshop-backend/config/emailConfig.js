import nodemailer from "nodemailer";
import { EMAIL_CONFIG } from "./constants.js";

// Create reusable transporter object using SMTP transport
export const createTransporter = () => {
  return nodemailer.createTransport({
    service: EMAIL_CONFIG.SERVICE,
    auth: {
      user: EMAIL_CONFIG.SENDER_EMAIL,
      pass: EMAIL_CONFIG.SENDER_PASSWORD,
    },
  });
};

// Email template for contact form
export const createContactEmailTemplate = (formData) => {
  const { name, email, subject, message } = formData;

  return {
    from: EMAIL_CONFIG.SENDER_EMAIL,
    to: EMAIL_CONFIG.RECEIVER_EMAIL,
    subject: EMAIL_CONFIG.SUBJECT,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              border: 1px solid #ddd;
              border-radius: 10px;
              background-color: #f9f9f9;
            }
            .header {
              background: linear-gradient(to right, #ec4899, #a855f7);
              color: white;
              padding: 20px;
              border-radius: 10px 10px 0 0;
              text-align: center;
            }
            .content {
              background: white;
              padding: 30px;
              border-radius: 0 0 10px 10px;
            }
            .field {
              margin-bottom: 20px;
            }
            .label {
              font-weight: bold;
              color: #a855f7;
              display: block;
              margin-bottom: 5px;
            }
            .value {
              padding: 10px;
              background-color: #f5f5f5;
              border-radius: 5px;
              border-left: 3px solid #a855f7;
            }
            .footer {
              text-align: center;
              margin-top: 20px;
              color: #666;
              font-size: 12px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>🎁 New Contact Form Submission</h2>
              <p>From ToyShop Website</p>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">Name:</span>
                <div class="value">${name}</div>
              </div>
              
              <div class="field">
                <span class="label">Email:</span>
                <div class="value">${email}</div>
              </div>
              
              <div class="field">
                <span class="label">Subject:</span>
                <div class="value">${subject || "No subject provided"}</div>
              </div>
              
              <div class="field">
                <span class="label">Message:</span>
                <div class="value">${message.replace(/\n/g, "<br>")}</div>
              </div>
            </div>
            <div class="footer">
              <p>This email was sent from the ToyShop contact form.</p>
              <p>You can reply directly to: ${email}</p>
            </div>
          </div>
        </body>
      </html>
    `,
    text: `
      New Contact Form Submission - ToyShop
      
      Name: ${name}
      Email: ${email}
      Subject: ${subject || "No subject provided"}
      
      Message:
      ${message}
      
      ---
      This email was sent from the ToyShop contact form.
      You can reply directly to: ${email}
    `,
  };
};
