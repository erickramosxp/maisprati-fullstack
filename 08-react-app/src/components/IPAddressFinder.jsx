import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import CardIPAddress from "./CardIPAddres";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 500px;
    height: 300px;
    margin: 200px 25%;
    box-shadow:  3px 3px 5px rgba(0, 0, 0, 0.3), 
        -3px 3px 5px rgba(0, 0, 0, 0.3), 
        3px -3px 5px rgba(0, 0, 0, 0.3), 
        -3px -3px 5px rgba(0, 0, 0, 0.3);
`

const MenuFinder = styled.div`
    display: flex;
    flex-direction: column;
`
const Title = styled.h2`
    text-align: center;
    margin-top: 20px;
    margin-bottom: 10px;
`

const Input = styled.input`
    max-width: 300px;
    margin: auto;
`
const Button = styled.button`
    padding: 8px 14px;
    width: 100px;
    margin: auto;
    margin-top: 10px;
    background-color: #1c1b34;
    color: #e9dede;
    border: none;
    border-radius: 2px;
    cursor: pointer;
`


const IPAddressFinder = () => {

    const [ip , setIp] = useState();

    const [resp, setResp] = useState();

    const FindIp = async () => {
        
        const response = await axios.get(`https://ipinfo.io/${ip}?token=fb057cc46c192e`);
        setResp(response.data);
        console.log(resp);
    }
    return (
        <Container>
            <Title>Finder IP</Title>
            <MenuFinder>
                <Input onChange={(event) => (setIp(event.target.value))}></Input>
                <Button onClick={FindIp}>Search</Button>
            </MenuFinder>
            {resp && <CardIPAddress props={resp}/>}
        </Container>
    );
}

export default IPAddressFinder;