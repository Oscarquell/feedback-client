import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {motion} from 'framer-motion'
import {Radio, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";
import Underline from "../../media/img/razdelitel.png";
import './style.css'

const FeedbackForm = () => {

  const [name, setName] = useState('');
  const [secondName, setSecondName] = useState('')
  const [message, setMessage] = useState('');
  const [presence, setPresence] = useState('')
  const [isSended, SetIsSended] = useState(false)
  const [inputValidation, setInputValidation] = useState(false)
  const [isDisable, setIsDisable] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !secondName || !presence) {
      setErrorMessage(false)
      SetIsSended(false);
      setInputValidation(true);
      return;
    }
    setIsDisable(true)

    try {
      await fetch('https://dry-wildwood-30712-9e60cd0a45ba.herokuapp.com/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          secondName: secondName,
          presence: presence,
          message: message
        })
      });
      await axios.post('/send-feedback', {
        name,
        secondName,
        presence,
        message,
      });

      SetIsSended(true)
      setIsDisable(false)
      setName('');
      setSecondName('');
      setMessage('');
      setPresence('');
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
    margin: '0.5em auto 0',
    display: 'block',
    fontSize: '1.5em'
  }

  const radioSettings = {
    marginTop: '0.2em',
    fontSize: '1.5em',
    margin: '0 auto',
    fontFamilyamily: " Roboto,Helvetica,Arial,sans-serif ",
    fontWeight: "400"
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
      transition={{ease: "easeInOut", duration: 1}}
      className='feedback-from-bg'
    >
      {/*<div className="bouquet-decoration">*/}
      {/*  <img src={Bouquet3} alt="" className="bouquet"/>*/}
      {/*</div>*/}
      <h2 className='feedback-form-title'>АНКЕТА ГОСТЯ</h2>
      <p className="feedback-form-description">
        Пожалуйста, подтвердите свое присутствие на торжестве до 23 июля
      </p>

      <form onSubmit={handleSubmit}>
        <TextField
          sx={inputSettings}
          value={name}
          className='text-field'
          fullWidth
          color='secondary'
          label="Ваше имя"
          id="fullWidth"
          onChange={(e) => setName(e.target.value)}
          disabled={true}
        />

        <TextField
          sx={inputSettings}
          value={secondName}
          className='text-field'
          fullWidth
          label="Ваша фамилия"
          id="fullWidth"
          onChange={(e) => setSecondName(e.target.value)}
          disabled={true}
        />

        <div className='feedback-form-input-radio'>
          <Radio
            sx={radioSettings}
            checked={presence === "Обязательно буду"}
            onChange={(event) => {
              setPresence(event.target.value)
            }}
            value='Обязательно буду'
            name="radio-buttons"
            inputProps={{'aria-label': 'A'}}
            id='1'
            disabled={true}
          />
          <label htmlFor="1">Обязательно буду</label>
        </div>

        <div className='feedback-form-input-radio'>
          <Radio
            sx={radioSettings}
            checked={presence === "К сожалению, не приду"}
            onChange={(event) => {
              setPresence(event.target.value)
            }}
            value='К сожалению, не приду'
            name="radio-buttons"
            inputProps={{'aria-label': 'B'}}
            id='2'
            disabled={true}
          />
          <label htmlFor="2">К сожалению, не приду</label>
        </div>

        <TextField
          sx={inputSettings}
          className='text-field'
          fullWidth label="Предложения или пожелания"
          id="fullWidth"
          onChange={(e) => setMessage(e.target.value)}
          disabled={true}
        />

        <div className='feedback-form-send-input'>
          <Box>
            <LoadingButton
              sx={buttonSettings}
              onClick={handleSubmit}
              endIcon={<SendIcon/>}
              loading={isDisable}
              loadingPosition="end"
              variant="outlined"
              disabled={true}
            >
              <span>Отправить</span>
            </LoadingButton>
          </Box>
        </div>


      </form>

      {isSended && <div className='feedback-form-sended'>Сообщение доставлено!</div>}
      {inputValidation && <div className='feedback-form-validation'>Пожалуйста, заполните форму обратной связи</div>}
      {errorMessage && <div className='feedback-form-validation'>Произошла ошибка при отправке сообщения...</div>}
      {/*<div className="bouquet-decoration reverse">*/}
      {/*  <img src={Bouquet3} alt="" className="bouquet"/>*/}
      {/*</div>*/}

      <div className="underline">
        <img src={Underline} alt="" className="underline-img"/>
      </div>
    </motion.div>
  );
};

export default FeedbackForm;


