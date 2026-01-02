import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    console.log('Contact API invoked');
    console.log('Env USER:', process.env.EMAIL_USER);
    console.log('Env PASS set:', !!process.env.EMAIL_PASS);

    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        console.error('Missing email env vars');
        return res
            .status(500)
            .json({ message: 'Server configuration error: Missing email credentials.' });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Verify connection configuration (catch errors)
        try {
            await transporter.verify();
        } catch (verifyErr) {
            console.error('Transporter verify failed:', verifyErr);
            return res
                .status(500)
                .json({ message: 'Email configuration verification failed', error: verifyErr.message });
        }

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            replyTo: email,
            subject: `Portfolio Contact: ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        });

        return res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Email sending error:', error);
        return res.status(500).json({ message: 'Error sending email', error: error.message });
    }
}
