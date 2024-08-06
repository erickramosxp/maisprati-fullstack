import { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import CardMovie from './CardMovie';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 55rem;
    padding: 10px;
    margin: 200px 15%;
    border-radius: 5px;
    /* border: 1px red solid; */
    box-shadow:  3px 3px 5px rgba(0, 0, 0, 0.3), 
        -3px 3px 5px rgba(0, 0, 0, 0.3), 
        3px -3px 5px rgba(0, 0, 0, 0.3), 
        -3px -3px 5px rgba(0, 0, 0, 0.3);
    ::-webkit-scrollbar {
        width: 5px;
    }
    ::-webkit-scrollbar-track {
        background: #7e7c7c;
    }
    ::-webkit-scrollbar-thumb {
      background: #1c1b34;
    }
`

const Titler = styled.h2`
    
`

const Input = styled.input`
    margin-top: 5px;
`

const Button = styled.button`
    padding: 8px 14px;
    margin-top: 10px;
    background-color: #1c1b34;
    color: #e9dede;
    border: none;
    border-radius: 2px;
    cursor: pointer;
`

const MoviesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    overflow-y: scroll;
    background-color: grey;
    border-radius: 5px;
    margin-top: 10px;
    gap: 10px;
    min-width: 300px;
    max-width: 860px;
    min-height: 300px;
    max-height: 500px;
    border: solid 1px gray;
    padding: 5px;
`

const MovieSearchEnginer = () => {

    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const searchMovie = async () => {
        try {
            const config = {
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzEzOTM5OWQyNWFlZGM4NWFiNzA4MDI3MWZjZDY5YSIsIm5iZiI6MTcyMjg4MjM5OC4wMzk5NjgsInN1YiI6IjY2YjExODdmNzQ0MmYwMGEyMjM1NzZjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-pnKEjUZHnG_RHC-qjDczy0UeaBVU6VE8GgyqF9DKkU` 
                }
            };
            const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}`, config);
            console.log(response.data.results);
            if (response.data.results.length == 0) {
                setMovies([
                    {
                        Poster:"https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png",
                        title:"Nada encontrado",
                        release_date:"N/A"
                    } 
                ]);
            } else {
                setMovies(response.data.results);
            }
        } catch (error) {
            console.log("Não foi possivel encontrar o filme ", error);
        }
    }

    return (
        <Container>
            <Titler>Movie Search Enginer</Titler>
            <Input type="text" name={query} onChange={(event) => setQuery(event.target.value)}/>
            <Button onClick={searchMovie}>Search</Button>
            <MoviesContainer>
                {movies && movies.map((movie) => (<CardMovie title={movie.title}  post={movie.poster_path ? `https://image.tmdb.org/t/p/w500` + movie.poster_path: "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png"} year={movie.release_date} />))}
            </MoviesContainer>
        </Container>
    );
}

export default MovieSearchEnginer;