# ToyShop Backend API

Backend server for ToyShop application with email functionality.

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the `backend` directory:

```env
# Email Configuration
SENDER_EMAIL=your-email@gmail.com
SENDER_PASSWORD=your-app-password-here

# Server Configuration
PORT=5000
NODE_ENV=development
```

### 3. Gmail App Password Setup

To send emails using Gmail, you need to generate an App Password:

1. Go to your [Google Account](https://myaccount.google.com/)
2. Navigate to **Security**
3. Enable **2-Step Verification** (if not already enabled)
4. Go to **App passwords** (under 2-Step Verification)
5. Select **Mail** and **Other (Custom name)**
6. Enter "ToyShop Backend" as the name
7. Click **Generate**
8. Copy the 16-character password
9. Paste it in your `.env` file as `SENDER_PASSWORD`

**Important:** Use the App Password, NOT your regular Gmail password.

### 4. Run the Server

```bash
# Development mode (with auto-reload)
npm run dev

# Production mode
npm start
```

The server will run on `http://localhost:5000` (or the PORT specified in .env)

## API Endpoints

### Health Check

- **GET** `/api/health`
- Returns server status

### Contact Form

- **POST** `/api/contact`
- Sends contact form submission to `imanaswi.patil@gmail.com`
- Request body:
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "subject": "Inquiry",
    "message": "Hello, I have a question..."
  }
  ```
- Response:
  ```json
  {
    "success": true,
    "message": "Your message has been sent successfully!",
    "messageId": "email-message-id"
  }
  ```

## Project Structure

```
backend/
├── config/
│   ├── constants.js      # Configuration constants
│   └── emailConfig.js    # Email configuration and templates
├── controllers/
│   └── contactController.js  # Contact form handler
├── routes/
│   └── contactRoutes.js       # Contact routes
├── index.js              # Main server file
├── package.json
└── .env                  # Environment variables (not in git)
```

## Troubleshooting

### Email not sending?

1. Verify your `.env` file has correct credentials
2. Make sure 2-Step Verification is enabled on your Gmail account
3. Use App Password, not regular password
4. Check server logs for error messages

### CORS errors?

- The server is configured to allow CORS from all origins in development
- For production, update CORS settings in `index.js`
