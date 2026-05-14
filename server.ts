import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;
  
  // Use lazy initialization for Resend to avoid crashing if API key is missing
  let resend: Resend | null = null;
  const getResend = () => {
    if (!resend) {
      const apiKey = process.env.RESEND_API_KEY;
      if (!apiKey) {
        throw new Error("RESEND_API_KEY is not set in environment variables");
      }
      resend = new Resend(apiKey);
    }
    return resend;
  };

  app.use(express.json());

  // API Route for Contact Form
  app.post("/api/contact", async (req, res) => {
    const { name, email, phone, business, service, message } = req.body;

    try {
      const client = getResend();
      const { data, error } = await client.emails.send({
        from: "PIXA Agency <onboarding@resend.dev>", // Replace with verified domain in production
        to: ["thepixa.info@gmail.com"],
        subject: `New Enquiry from ${name} - PIXA Agency`,
        html: `
          <h1>New Lead from Contact Form</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Business:</strong> ${business || "N/A"}</p>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      });

      if (error) {
        console.error("Resend Error:", error);
        return res.status(400).json({ error: error.message });
      }

      res.status(200).json({ status: "success", data });
    } catch (error: any) {
      console.error("Server Error:", error);
      res.status(500).json({ 
        error: error.message || "Failed to send email. Ensure RESEND_API_KEY is configured." 
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
