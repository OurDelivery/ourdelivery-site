import emailjs from 'emailjs-com';
import React from 'react';
import {
    Container,
    Form,
    FormButton,
    FormContent,
    FormH1,
    FormInput,
    FormInputText,
    FormLabel,
    FormWrap,
    Icon
} from './ContactElements'

const Contact = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service', 'template', e.target, 'user')
            .then((result) => {
                alert('E-mail enviado com sucesso.', result.status, result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to='/'>OurDelivery</Icon>
                    <FormContent>
                        <Form onSubmit={sendEmail}>
                            <FormH1>Fale conosco</FormH1>
                            <FormLabel htmlFor='for'>Nome</FormLabel>
                            <FormInput htmlFor='nome' name='user_nome' placeholder="Seu nome" required/>

                            <FormLabel htmlFor='for'>E-mail</FormLabel>
                            <FormInput htmlFor='email' type='email' name='user_email' placeholder="contato@email.com"
                                       required/>

                            <FormLabel htmlFor='for'>Mensagem</FormLabel>
                            <FormInputText htmlFor='mensagem' name="user_message"
                                           placeholder="Escreva aqui sua mensagem" required/>

                            <FormButton type='submit' value='send'>Enviar</FormButton>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default Contact