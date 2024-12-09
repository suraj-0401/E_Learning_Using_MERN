import nodemailer from 'nodemailer';

async function SendMail(email, message) {
    if (!process.env.EMAIL || !process.env.PASSWORD) {
        throw new Error("Missing EMAIL or PASSWORD in environment variables");
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL, 
            pass: process.env.PASSWORD, 
        },
    });

    const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: 'Mail regarding feedback',
        text: message,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully:', info.response);
    } catch (error) {
        console.error('Error sending email:', error);
        throw new Error('Failed to send email');
    }
}

const contact = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ error: "All fields are required" });
        }

        await SendMail(email, message);

        res.status(200).json({ success: "Email sent successfully" });
    } catch (error) {
        console.error('Error in contact controller:', error.message);
        res.status(500).json({ error: "An error occurred while sending the email" });
    }
};

export default contact;
