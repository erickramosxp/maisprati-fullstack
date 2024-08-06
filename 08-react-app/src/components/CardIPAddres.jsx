import styled from "styled-components";

const Container = styled.div`
    text-align: center;
    margin-top: 15px;
    border-radius: 5px;
    background-color: gray;
    color: #111414;
    margin: 20px 10px;
    padding: 10px;
`


const CardIPAddress = ({props}) => {
    console.log("props = " + props.city);
    return (
        <Container>
            <p>Cidade: {props.city}</p>
            <p>Estado: {props.region}</p>
            <p>Pais: {props.country}</p>
            <p>Ip: {props.ip}</p>
            <p>Longitude/Latitude: {props.loc}</p>
            <p>Org: {props.org}</p>
        </Container>
    );
}

export default CardIPAddress;