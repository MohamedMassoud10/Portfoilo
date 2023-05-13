require("dotenv").config();
let sgMail = require("@sendgrid/mail");

let { SG_API_KEY, FROM_EMAIL, TO_EMAIL } = process.env;

sgMail.setApiKey(SG_API_KEY);

export default async function handler(req, res) {
  let { name, email, message } = req.body;

  let msg = {
    to: TO_EMAIL,
    from: FROM_EMAIL,
    subject: "My portfolio form",
    html: `<P><strong>NAME:</strong>${name}</P>
    <P><strong>EMAil:</strong>${email}</P>
    <P><strong>MESSAGE:</strong>${message}</P>
    `,
  };
  await sgMail.send(msg);
  res.json({ success: true });
}
