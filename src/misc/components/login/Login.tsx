import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    border: '1px solid black';
    margin: 0 200px 0 200px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const FullWidthInput = styled.input`
    width: 100%;
`

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    return(
        <Container>
            <Form>
            <h2>Login</h2>
                <label>
                    Username<br></br>
                    <FullWidthInput type="text" name="username" value={username}></FullWidthInput>
                </label>
                <label>
                    Password<br></br>
                    <FullWidthInput type="password" name="password" value={password}></FullWidthInput>
                </label>
                <label>
                    Remember me <input type="checkbox"></input>
                </label>
            </Form>
        </Container>
    )
}