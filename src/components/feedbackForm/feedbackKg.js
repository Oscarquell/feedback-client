import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './style.css'

const FeedbackFormKg = () => {
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

            <h2 className='feedback-form-title'>КОНОК АНКЕТАСЫ</h2>
            <p className="feedback-form-description">
                Майрамга катышууңузду 20-июлга чейин ырастаңыз
            </p>

            <form onSubmit={handleSubmit}>
                <input
                    className='feedback-form-input'
                    type="text"
                    placeholder="Сиздин атыңыз"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <p className='feedback-form-input-rules'>Толтуруу үчүн талап кылынат*</p>
                <input
                    className='feedback-form-input'
                    type="text"
                    placeholder="Сиздин фамилияңыз"
                    value={secondName}
                    onChange={(e) => setSecondName(e.target.value)}
                />
                <p className='feedback-form-input-rules'>Толтуруу үчүн талап кылынат*</p>


                <div className='feedback-form-input-radio'>
                    <input
                        type="radio"
                        id='1'
                        name='radio'
                        value='Мен сөзсүз келем'
                        onChange={(event) => {setRadio(event.target.value)}}
                    />
                    <label htmlFor="1">Мен сөзсүз келем</label>
                </div>

                <div className='feedback-form-input-radio'>
                    <input
                        type="radio"
                        id='2'
                        name='radio'
                        value='Мен келе албайм'
                        onChange={(event) => {setRadio(event.target.value)}}
                    />
                    <label htmlFor="2">Мен келе албайм</label>
                </div>
                <p className='feedback-form-input-rules'>Толтуруу үчүн талап кылынат*</p>



                <textarea
                    className='feedback-form-input custom-textarea'
                    placeholder="Сунуштар же каалоолор"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button
                    className='feedback-form-input'
                    type="submit"
                    disabled={isDisable}
                >
                    Жөнөтүү</button>
            </form>
            {isSended && <div className='feedback-form-sended'>Билдирүү жеткирилди</div>}
            {inputValidation && <div className='feedback-form-validation'>Сураныч, талап кылынган талааларды толтуруңуз *</div>}

        </div>
    );
};

export default FeedbackFormKg;
