import nodemailer from "nodemailer";

// POST method
export async function POST(req: Request) {
  try {
    const body = await req.json(); // Parse the incoming JSON data
    const { name, email, quantity, message, productName } = body;

    // Validate required fields
    if (!name || !email) {
      return new Response(
        JSON.stringify({ message: "Name and email are required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Configure the Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // Replace with your email service
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password
      },
    });

    // Define email options
    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender address
      to: "contact@metalberginc.com", // Recipient address
      subject: "Bulk Order Request",
      text: `
        Bulk Order Request:
        - Product Name: ${productName}
        - Name: ${name}
        - Email: ${email}
        ${quantity ? `- Quantity: ${quantity}` : ""}
        ${message ? `- Message: ${message}` : ""}
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Return success response
    return new Response(
      JSON.stringify({ message: "Email sent successfully!" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
