import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './style.css'

const FeedbackForm = () => {
    const [name, setName] = useState('');
    const [secondName, setSecondName] = useState('')
    const [message, setMessage] = useState('');
    const [isSended, SetIsSended] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('/send-feedback', {
                name,
                secondName,
                message
            });
            SetIsSended(true)
            setName('');
            setSecondName('');
            setMessage('');
        } catch (error) {
            alert('Ошибка при отправке сообщения', error)
        }
    };

    useEffect(() => {
        setTimeout(() => {
            SetIsSended(false);
        }, 3000);
    }, [isSended]);

    return (
        <div className='feedback-from-bg'>

            <h2 className='feedback-form-title'>АНКЕТА ГОСТЯ</h2>
            <p className="feedback-form-description">
                Пожалуйста, подтвердите свое присутствие на торжестве до 20 июля
            </p>

            <form onSubmit={handleSubmit}>
                <input
                    className='feedback-form-input'
                    type="text"
                    placeholder="Введите Ваше имя"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    className='feedback-form-input'
                    type="text"
                    placeholder="Введите Вашу фамилию"
                    value={secondName}
                    onChange={(e) => setSecondName(e.target.value)}
                />
                <textarea
                    className='feedback-form-input'
                    placeholder="Предложения или пожелания"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button
                    className='feedback-form-input'
                    type="submit"
                    onClick={null}
                    >
                    Отправить</button>
            </form>
            {isSended && <div className='feedback-form-sended'>Сообщение доставлено</div>}

        </div>
    );
};

export default FeedbackForm;
