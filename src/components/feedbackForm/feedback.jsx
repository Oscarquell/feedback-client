import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { motion } from 'framer-motion'
import {Radio,TextField} from "@mui/material";
import Box from "@mui/material/Box";
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";
import './style.css'

const FeedbackForm = () => {

    const [name, setName] = useState('');
    const [secondName, setSecondName] = useState('')
    const [message, setMessage] = useState('');
    const [radio, setRadio] = useState('')
    const [isSended, SetIsSended] = useState(false)
    const [inputValidation, setInputValidation] = useState(false)
    const [isDisable, setIsDisable] = useState(false)
    const [errorMessage, setErrorMessage] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !secondName || !radio) {
            setErrorMessage(false)
            SetIsSended(false);
            setInputValidation(true);
            return;
        }
        setIsDisable(true)
        try {
            await axios.post('/send-feedback', {
                name,
                secondName,
                message,
                radio
            });

            SetIsSended(true)
            setIsDisable(false)
            setName('');
            setSecondName('');
            setMessage('');
            setRadio('');
            setInputValidation(false);

        } catch (error) {
            setInputValidation(false);
            setErrorMessage(true)
            setIsDisable(false)
        }
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            SetIsSended(false);
            setInputValidation(false);
            setErrorMessage(false)
        }, 3000);

        return () => {
            clearTimeout(timeout);
        };
    }, [isSended, inputValidation, errorMessage]);

    const inputSettings = {
        maxWidth: '90%',
        margin: '0 auto',
        display: 'block',
        fontSize: '1.5em',
        marginTop: '0.5em',
    }

    const radioSettings = {
        marginTop: '0.2em',
        fontSize: '1.5em',
        margin: '0 auto'
    }

    const buttonSettings = {
        width: '90%',
        margin: '0 auto',
        color: 'black',
        border: '1px solid black',
        fontSize: '1em'
    }


    return (
        <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{ ease: "easeInOut", duration: 1 }}
            className='feedback-from-bg'>

            <h2 className='feedback-form-title'>АНКЕТА ГОСТЯ</h2>
            <p className="feedback-form-description">
                Пожалуйста, подтвердите свое присутствие на торжестве до 20 июля
            </p>

            <form onSubmit={handleSubmit}>
                <TextField
                    sx={inputSettings}
                    fullWidth label="Ваше имя"
                    id="fullWidth"
                    onChange={(e) => setName(e.target.value)}
                />

                <TextField
                    sx={inputSettings}
                    fullWidth label="Ваша фамилия"
                    id="fullWidth"
                    onChange={(e) => setSecondName(e.target.value)}
                />

                <div className='feedback-form-input-radio'>
                    <Radio
                        sx={radioSettings}
                        checked={radio === 'Обязательно приду'}
                        onChange={(event) => {setRadio(event.target.value)}}
                        value="Обязательно приду"
                        name="radio-buttons"
                        inputProps={{ 'aria-label': 'A' }}
                        id='1'
                    />
                    <label htmlFor="1">Обязательно приду</label>
                </div>

                <div className='feedback-form-input-radio'>
                    <Radio
                        sx={radioSettings}
                        checked={radio === 'Не смогу прийти'}
                        onChange={(event) => {setRadio(event.target.value)}}
                        value="Не смогу прийти"
                        name="radio-buttons"
                        inputProps={{ 'aria-label': 'B' }}
                        id='2'
                    />
                    <label htmlFor="2">Не смогу прийти</label>
                </div>

                <TextField
                    sx={inputSettings}
                    fullWidth label="Предложения или пожелания"
                    id="fullWidth"
                    onChange={(e) => setMessage(e.target.value)}
                />

                <div className='feedback-form-send-input' >
                    <Box >
                        <LoadingButton
                            sx={buttonSettings}
                            onClick={handleSubmit}
                            endIcon={<SendIcon />}
                            loading={isDisable}
                            loadingPosition="end"
                            variant="outlined"
                        >
                            <span>Отправить</span>
                        </LoadingButton>
                    </Box>
                </div>


            </form>

            {isSended && <div className='feedback-form-sended'>Сообщение доставлено!</div>}
            {inputValidation && <div className='feedback-form-validation'>Пожалуйста, заполните форму обратной связи</div>}
            {errorMessage && <div className='feedback-form-validation'>Произошла ошибка при отправке сообщения...</div>}

        </motion.div>
    );
};

export default FeedbackForm;


// <div className='feedback-form-input-radio'>
//     <input
//         type="radio"
//         id='1'
//         name='radio'
//         value='Обязательно приду'
//         checked={radio === 'Обязательно приду'}
//         onChange={(event) => {setRadio(event.target.value)}}
//     />
//     <label htmlFor="1">Обязательно приду</label>
// </div>
//
// <div className='feedback-form-input-radio'>
//     <input
//         type="radio"
//         id='2'
//         name='radio'
//         value='Не смогу прийти'
//         checked={radio === 'Не смогу прийти'}
//         onChange={(event) => {setRadio(event.target.value)}}
//     />
//     <label htmlFor="2">Не смогу прийти</label>
// </div>



// <button
//     className='feedback-form-input'
//     type="submit"
//     disabled={isDisable}>
//     {
//         isDisable ? <LinearIndeterminate /> : 'Отправить'
//     }
// </button>
