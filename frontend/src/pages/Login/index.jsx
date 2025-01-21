import React from "react";
import './index.css'
import InputEmail from "../../components/InputEmail";
import InputPassword from "../../components/InputPassword";
import BotaoLogin from "../../components/Botao";
import {Container, Row, Col, Form} from 'react-bootstrap';


function Login(){

    return(
        <>
            <Container>
                <Row>
                <Col xs={3}></Col>
                <Col xs={6}>
                    <h1>Formulário de Login</h1>
                    <Form> 
                    <InputEmail />
                    <InputPassword />
                    </Form>
                    <BotaoLogin />
                </Col>
                <Col xs={3}></Col>
                </Row>
            </Container>
        </>
    );
}

export default Login;