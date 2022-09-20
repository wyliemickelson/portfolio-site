import React from 'react'
import styled from 'styled-components';
import FormInput from './FormInput';

const StyledContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  button {
    font-family: ${props => props.theme.fonts.body};
    background-color: ${props => props.theme.colors.blue};
    color: white;
    padding: 1rem;
    font-size: 1.5rem;
    border-radius: 10px;
    margin-bottom: 3rem;
    border: none;

    &:hover {
      cursor: pointer;
    }
  }
`

const ContactForm = () => {
  return (
    <StyledContactForm action="https://formsubmit.co/3fda87a392d824f827323bd45426d877" method="POST" >
      <FormInput type="text" name="name" placeholder='Name' required={true} />
      <FormInput type="email" name="email" required={true} placeholder='Eg. example@email.com' />
      <FormInput type="textarea" name='message' required={true} placeholder='Please enter your messsage...' />
      <FormInput type="hidden" name="_captcha" value="true" />
      <FormInput type="hidden" name="_next" value="http://localhost:3000/" />
      <button type="submit">Send</button>
    </StyledContactForm>
  )
}

export default ContactForm