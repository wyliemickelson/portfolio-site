import React from 'react'
import styled from 'styled-components';

const StyledContactForm = styled.div`

`

const ContactForm = () => {
  return (
    <StyledContactForm>
      <form action="https://formsubmit.co/3fda87a392d824f827323bd45426d877" method="POST">
        <input type="text" name="name" placeholder='Name' required />
        <input type="email" name="email" required placeholder='Email Adress'/>
        <input type="text" name='message' placeholder='Enter your messsage' />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="http://localhost:3000/" />
        <button type="submit">Send</button>
      </form>
    </StyledContactForm>
  )
}

export default ContactForm