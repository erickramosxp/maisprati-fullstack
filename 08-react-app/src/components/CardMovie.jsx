import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 200px;
    height: 300px;
    border-radius: 5px;
    border: 1px solid grey;
    padding: 10px;
    background-color: #1c1b34;
    color: #d4d4d4;
`

const Img = styled.img`
    height: 200px;
    width: 150px;
    object-fit: cover;
    border-radius: 5px;
`


const CardMovie = ({title , post, year}) => {
    return (
        <Container>
            <div>
                <Img src={post} alt="" />
            </div>
            <p>{title}</p>
            <p>{year}</p>
        </Container>
    )
}

export default CardMovie;