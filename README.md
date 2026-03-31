# 🌐 Pavan’s Interactive AI Portfolio

🚀 **Live Website:** https://pawanbudati.github.io  
📦 **Repository:** https://github.com/pawanbudati/pawanbudati.github.io

This is **not a static portfolio**.

It is an **AI-powered, interactive personal website** where visitors can:
- Ask **anything about me** using an AI chatbot (Gemini)
- Let the **AI send messages on their behalf** directly through chat
- Contact me using a **real backend-less system** powered by Google Apps Script

This portfolio itself is a **production-grade project**, not a template.

---

## ✨ Key Features

### 🤖 AI Assistant (Powered by Google Gemini)

- Integrated **Gemini AI** to answer questions about:
  - My skills
  - My experience
  - My projects
  - My background
- Conversational and context-aware
- **Action-capable AI**:
  - The bot can **send a message on behalf of the user**
  - Users don’t need to manually fill the contact form

> This is not just a chatbot - it performs real actions.

---

### 📬 Smart Contact System (No Traditional Backend)

- Contact form integrated using **Google Apps Script**
- Stores submissions directly in **Google Sheets**
- Sends **instant email notifications**
- Handles optional fields gracefully

Captured data:
- Name
- Email
- Phone number (optional)
- Message
- Timestamp

✅ No database  
✅ No backend server  
✅ Works perfectly on GitHub Pages  

---

## 🧠 Why This Portfolio Is Different

- Not a template
- Not static content
- Demonstrates:
  - Real AI integration
  - Backend-less architecture
  - Event-driven automation
  - Production-ready frontend design

This portfolio is both **a showcase and a system**.

---

## 🛠️ Tech Stack

### Frontend
- React
- TypeScript
- Vite
- HTML5 / CSS3 / JavaScript

### AI
- Google Gemini API

### Backend-less Automation
- Google Apps Script
- Google Sheets
- Gmail (Email notifications)

### Hosting
- GitHub Pages

---

## 📂 Project Structure

```
├── src/
|   ├── public/            # Static assets
│   ├── components/        # Reusable UI components
│   ├── hooks/             # Custom React hooks
│   ├── utils/             # Helper functions & configs
│   ├── App.tsx            # Main application
│   └── main.tsx           # Entry point
├── vite.config.ts
├── tsconfig.json
├── package.json
└── README.md

```

---

## 🤖 AI Capabilities (Detailed)

The AI assistant acts as a **smart interface**, not just a Q&A bot.

It can:
- Answer portfolio-specific questions
- Explain projects and technical choices
- Guide users through my experience
- **Trigger contact actions directly from chat**

Example:
> “Send Pavan a message saying I’m interested in collaborating.”

The AI handles the submission without the user touching the form.

---

## 📬 Contact Form – Google Apps Script Integration

This portfolio uses **Google Apps Script as a backend replacement**.

---

### 📊 Google Sheet Structure

Create a Google Sheet with the following headers **in this exact order**:

```

Name | Email | Message | Phone | Timestamp

````

---

### 🧠 Apps Script – Production Code

This is the **exact script used in this project**:

```javascript
function doPost(data) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var timestamp = new Date();
  
  var name = data.parameter.name;
  var email = data.parameter.email;
  var message = data.parameter.message;
  var phone = data.parameter.phone || "Not provided";
  
  sheet.appendRow([name, email, message, phone, timestamp]);

  var subject = "New Contact Form Submission from " + name;

  var body =
    `📩 New Contact Form Submission\n\n` +
    `Name: ${name}\n` +
    `Email: ${email}\n` +
    `Phone: ${phone}\n\n` +
    `Message:\n${message}\n\n` +
    `Submitted on: ${timestamp}`;

  MailApp.sendEmail({
    to: "pawanbudati@gmail.com",
    cc: "pawan1122143@gmail.com",
    subject: subject,
    body: body
  });
  
  return ContentService.createTextOutput("Form submission successful!");
}
````

---

### 🔍 What This Script Does

* Accepts `POST` requests from the frontend
* Extracts submitted form data
* Handles optional phone numbers safely
* Stores data in Google Sheets
* Sends formatted email notifications
* Returns a success response

No cron jobs. No polling. No backend server.

---

### 🚀 Deploying the Script

1. Open the Google Sheet
2. Go to **Extensions → Apps Script**
3. Paste the script above
4. Click **Deploy → New Deployment**
5. Choose **Web App**

   * Execute as: **Me**
   * Who has access: **Anyone**
6. Authorize permissions
7. Copy the generated **Web App URL**

---

### 🌐 Frontend Connection

The frontend sends a `POST` request with form data to the deployed Apps Script URL.

This allows:

* Static hosting on GitHub Pages
* Secure serverless form handling
* Easy maintenance and scalability

---

### 🧪 Optional Local Testing

```javascript
// function testDoPost() {
//   var data = {
//     parameter: {
//       name: "Test Name",
//       email: "test@example.com",
//       message: "This is a test message."
//     }
//   };
//   Logger.log(doPost(data));
// }
```

---

## 🧪 Verification Checklist

* Contact form submission works ✅
* Google Sheet updates correctly ✅
* Email notifications received ✅
* AI chatbot responds correctly ✅
* AI can send messages on behalf of the user ✅

---

## 📄 License

MIT License - feel free to explore the code and reuse ideas.

---

👉 **Visit the live site and try the AI assistant yourself -> https://pawanbudati.github.io/**
