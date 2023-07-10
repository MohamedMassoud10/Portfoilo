import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "mohameddmassoud@gmail.com",
        pass: "yijguffbhxcsyxdg",
      },
    });
    const { name, email, message } = req.body;
    const mailOptions = {
      from: "your-email@gmail.com",
      to: "mohameddmassoud@gmail.com",
      subject: "New Message from Portfoilo Contact Form",
      text: `From:${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    const info = await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Message sent successfully", info });
  } catch (error) {
    console.error("Error sending message:", error);
    res.status(500).json({ message: "Error sending message" });
  }
}
