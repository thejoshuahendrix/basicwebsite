import { useState } from 'react'
import styled from 'styled-components'

const Input = styled.input`
    height: 30px;
    width: 50%;
    background-color: ${({theme})=> theme.text.ternary};
    border: .5px solid #444444;
    border-radius: 10px;
    box-shadow: ${({theme})=> theme.card.boxShadowSmall};
`
const TextArea = styled.textarea`
    height: 90px;
    width: 50%;
    background-color: ${({theme})=> theme.text.ternary};

    border: .5px solid #444444;
    border-radius: 10px;
    box-shadow: ${({theme})=> theme.card.boxShadowSmall};
    
`
const Button = styled.button`
    height: 30px;
    width: 60px;
    background: ${({theme})=> theme.button.background};
    border-radius: ${({theme})=> theme.card.borderRadius};
    color: ${({theme})=> theme.button.text};
    box-shadow: ${({theme})=> theme.card.boxShadowSmall};
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 2rem;
    margin: 10% auto 10% auto;
    padding: 20px 0 20px 0;
    width: 80%;
    color: ${({theme})=> theme.text.secondary};
    background-color: ${({theme})=> theme.background.secondary};
    border-radius: ${({theme})=> theme.card.borderRadius};
    box-shadow: ${({theme})=> theme.card.boxShadow};
`
const FormWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`
const ContactHeading = styled.div`
    font-size: 32px;
    color: ${({theme})=> theme.text.primary};
    margin: 40px;
    padding: 40px;
`

const Contact = () => {
    const [text, setText] = useState('');
    const handleSubmit = (e: any) => {
        e.preventDefault();
        setText('Email Sent!')
    }
    return (
        <FormWrapper id="contact">
            <Form data-testid="contactForm">
                <ContactHeading>Contact Me!</ContactHeading>
                <label>Name</label>
                <Input data-testid='nameInput' type="text" name="name" />
                <label>Email</label>
                <Input data-testid='emailInput' type="email" name="email" />
                <label>Message</label>
                <TextArea data-testid='messageInput' name="message" />
                <Button data-testid='submitButton' onClick={(e)=>handleSubmit(e)}>Submit</Button>
                <div>{text}</div>
            </Form>
        </FormWrapper>
    )
}

export default Contact
