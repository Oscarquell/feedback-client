const express = require('express');
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');

const app = express();
app.use(express.json());

// Создаем транспорт для отправки писем через Mail.ru SMTP
const transporter = nodemailer.createTransport(
    smtpTransport({
        host: 'smtp.mail.ru',
        port: 587,
        secure: false,
        auth: {
            user: 'oscarquell@mail.ru',
            pass: 'N5BGDrsduvG5aWwegfzD\n'
        }
    })
);

// Middleware для обработки CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // Укажите URL вашего React приложения
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.post('/send-feedback', (req, res) => {
    const formData = req.body;

    // Опции письма
    const mailOptions = {
        from: 'oscarquell@mail.ru',
        to: 'askar.kulenbekov.js@gmail.com',
        subject: 'Feedback',
        text: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    };

    // Отправляем письмо
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent:', info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});