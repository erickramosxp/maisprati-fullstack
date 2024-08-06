import './App.css'
import LanguageTranslater from './components/LanguageTranslater'
import MovieSearchEnginer from './components/MovieSearchEnginer'
import QrCodeGenerator from './components/QrCodeGenerator'
import IPAddressFinder from './components/IPAddressFinder'
import Login from './components/Login'
import LateralBar from './components/LateralBar'
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
`

function App() {

  return (
    <Container>
    <Router>
      <LateralBar />
      <Routes>
        <Route path='/' Component={Login}/>
        <Route path='/qr-code-generator' Component={QrCodeGenerator}/>
        <Route path='/movie-search' Component={MovieSearchEnginer}/>
        <Route path='/translater' Component={LanguageTranslater}/>
        <Route path='/ip-finder' Component={IPAddressFinder}/>
      </Routes>
    </Router>
      {/* <MovieSearchEnginer /> */}
      {/* <LanguageTranslater /> */}
      {/* <QrCodeGenerator /> */}
      {/* <IPAddressFinder /> */}
      {/* <Login /> */}
    </Container>
  )
}

export default App
