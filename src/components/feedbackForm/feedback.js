import React, { useState } from 'react';
import axios from 'axios';
import './style.css'

const FeedbackForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('/send-feedback', {
                name,
                email,
                message
            });
            alert('Ваше сообщение отправлено!');
            setName('');
            setEmail('');
            setMessage('');
        } catch (error) {
            console.error('Ошибка при отправке сообщения:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
                placeholder="Сообщение"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit">Отправить</button>
        </form>
    );
};

export default FeedbackForm;
