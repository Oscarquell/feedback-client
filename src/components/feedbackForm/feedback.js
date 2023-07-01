import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './style.css'

const FeedbackForm = () => {
    const [name, setName] = useState('');
    const [secondName, setSecondName] = useState('')
    const [message, setMessage] = useState('');
    const [radio, setRadio] = useState('')
    const [isSended, SetIsSended] = useState(false)
    const [inputValidation, setInputValidation] = useState(false)
    const [isDisable, setIsDisable] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsDisable(true)
        setTimeout(() => {
            setIsDisable(false);
        }, 4000);


        if (!name || !secondName || !radio) {
            setInputValidation(true);
            return;
        }

        try {
            await axios.post('/send-feedback', {
                name,
                secondName,
                message,
                radio
            });
            SetIsSended(true)
            setName('');
            setSecondName('');
            setMessage('');
            setRadio('');
            setInputValidation(false)
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
                    placeholder="Введите имя"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <p className='feedback-form-input-rules'>Обязательно к заполнению*</p>
                <input
                    className='feedback-form-input'
                    type="text"
                    placeholder="Введите фамилию"
                    value={secondName}
                    onChange={(e) => setSecondName(e.target.value)}
                />
                <p className='feedback-form-input-rules'>Обязательно к заполнению*</p>


                <div className='feedback-form-input-radio'>
                    <input
                        type="radio"
                        id='1'
                        name='radio'
                        value='Обязательно приду'
                        onChange={(event) => {setRadio(event.target.value)}}
                    />
                    <label htmlFor="1">Обязательно приду</label>
                </div>

                <div className='feedback-form-input-radio'>
                    <input
                        type="radio"
                        id='2'
                        name='radio'
                        value='Не смогу прийти'
                        onChange={(event) => {setRadio(event.target.value)}}
                    />
                    <label htmlFor="2">Не смогу прийти</label>
                </div>
                <p className='feedback-form-input-rules'>Обязательно к заполнению*</p>



                <textarea
                    className='feedback-form-input custom-textarea'
                    placeholder="Предложения, пожелания или просто Ваши мысли"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button
                    className='feedback-form-input'
                    type="submit"
                    disabled={isDisable}
                    >
                    Отправить</button>
            </form>
            {isSended && <div className='feedback-form-sended'>Сообщение доставлено</div>}
            {inputValidation && <div className='feedback-form-validation'>Пожалуйста, заполните обязательные поля *</div>}

        </div>
    );
};

export default FeedbackForm;
