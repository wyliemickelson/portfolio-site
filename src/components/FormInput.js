import React from 'react'
import styled from 'styled-components';

const StyledFormInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  input, textarea {
    all: unset;
    background-color: white;
    border: 1px solid ${props => props.theme.colors.blue};

    &:focus {
      border: 2px solid ${props => props.theme.colors.blue};
    }
  }

  input {
    padding: 1rem;
    font-size: 1rem;
  }

  textarea {
    font-family: ${props => props.theme.fonts.body};
    padding: 1rem;
  }
`

const FormInput = ({ name, type, placeholder, isRequired, value }) => {

  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <StyledFormInput>
      {type !== 'hidden' && <p>{capitalize(name)}</p>}
      {type === 'textarea' ? <textarea rows='10' type="textarea" name='message' placeholder='Please enter your messsage...' /> :
      <input type={type} name={name} placeholder={placeholder} required={isRequired} value={value} autoComplete='false' />}
    </StyledFormInput>
  )
}

export default FormInput