import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
    height: 100vh;
    width: 300px;
    background-color: grey;
`

const StyleUl = styled.ul`
    display: flex;
    list-style: none;
    flex-direction: column;
    align-items: center;
    margin-top: 60px;
    gap: 25px;
`

const StyleLi = styled.li`
    width: 70%;
    text-align: center;
`

const StyleLink = styled(Link)`
    display: inline-block;
    text-decoration: none;
    padding: 8px 14px;
    margin-top: 10px;
    width: 100%;
    background-color: #1c1b34;
    color: #e9dede;
    border: none;
    border-radius: 2px;
    cursor: pointer;
`

const LateralBar = () => {
    return (
        <Container>
            <StyleUl>
                <StyleLi><StyleLink to="/">Home</StyleLink></StyleLi>
                <StyleLi><StyleLink to="/movie-search">Movie Enginer</StyleLink></StyleLi>
                <StyleLi><StyleLink to="/qr-code-generator">QrCode Generator</StyleLink></StyleLi>
                <StyleLi><StyleLink to="/translater">Translater</StyleLink></StyleLi>
                <StyleLi><StyleLink to="/ip-finder">IPAddress Finder</StyleLink></StyleLi>
            </StyleUl>
        </Container>
    );
}

export default LateralBar;