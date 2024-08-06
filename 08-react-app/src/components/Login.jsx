import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 300px;
    border-radius: 5px;
    padding: 10px;
    margin: 200px 25%;
    box-shadow:  3px 3px 5px rgba(0, 0, 0, 0.3), 
        -3px 3px 5px rgba(0, 0, 0, 0.3), 
        3px -3px 5px rgba(0, 0, 0, 0.3), 
        -3px -3px 5px rgba(0, 0, 0, 0.3);
`

const Title = styled.h2`
    text-align: center;
    padding-top: 10px;
`

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: auto;
`

const Input = styled.input`
    height: 30px;
    font-size: 15px;
    padding-left: 5px;
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



const Login = () => {
    return (
        <Container>
            <Title>Login</Title>
            <LoginContainer>
                <p>Usename:</p>
                <Input/>
                <p>Password:</p>
                <Input />
                <Button>Login</Button>
            </LoginContainer>
        </Container>
    );
}

export default Login;