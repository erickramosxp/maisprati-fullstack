import { useState } from "react";
import styled from "styled-components";
import QRCode from 'qrcode.react'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 500px;
    margin: 200px 25%;
    padding: 10px;
    box-shadow:  3px 3px 5px rgba(0, 0, 0, 0.3), 
        -3px 3px 5px rgba(0, 0, 0, 0.3), 
        3px -3px 5px rgba(0, 0, 0, 0.3), 
        -3px -3px 5px rgba(0, 0, 0, 0.3);
`

const Title = styled.h2`
    margin-bottom: 10px;
`

const Input = styled.input`
    
`
const QRContainer = styled.div`
    margin-top: 20px;
`

const QrCodeGenerator = () => {

    const [input , setInput] = useState();
    return (
        <Container>
            <Title>QrCode Generator</Title>
            <Input onChange={(event) => (setInput(event.target.value))}/>
            <QRContainer>
                {input && <QRCode value={input}/>}
            </QRContainer>
        </Container>
    );
}

export default QrCodeGenerator;