import { useState } from "react";
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 200px 25%;
    width: 600px;
    height: 400px;
    border-radius: 5px;
    box-shadow:  3px 3px 5px rgba(0, 0, 0, 0.3), 
        -3px 3px 5px rgba(0, 0, 0, 0.3), 
        3px -3px 5px rgba(0, 0, 0, 0.3), 
        -3px -3px 5px rgba(0, 0, 0, 0.3);
`

const Target = styled.div`
    margin-bottom: 10px;
`

const Title = styled.h2`
    color: #333;
    text-align: center;
    margin-bottom: 10px;
`

const Label = styled.label`
    color: #555;
    margin-right: 5px;
`

const TranslatedText = styled.p`
    color: #333;
    border-radius: 5px;
    margin-top: 20px;
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

const LanguageTranslater = () => {

    const [text , setText] = useState('');
    const [translatedText , setTranslatedText] = useState('');
    const [sourceLang , setSourceLang] = useState('en');
    const [targetLang , setTargetLang] = useState('pt');

    const translateText = async () => {
        try {
            const response = await axios.get("https://api.mymemory.translated.net/get",
                {
                    params: {
                        q: text,
                        langpair: `${sourceLang}|${targetLang}`
                    }
                })
                setTranslatedText(response.data.responseData.translatedText);
        } catch (error) {
            console.log("Erro ao traduzir o texto ", error);
        }
    }

    return (
        <Container>
            <Title>Language Translator</Title>
            <Target>
                <Label htmlFor="">
                    Source Language:
                </Label>
                <select value={sourceLang} onChange={(event) => setSourceLang(event.target.value)}>
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">Franch</option>
                    <option value="de">German</option>
                    <option value="it">Italiano</option>
                    <option value="pt">Portuguese</option>
                </select>
            </Target>
            <Target>
                <Label htmlFor="">
                    Target Language:
                </Label>
                <select  value={targetLang} onChange={(event) => setTargetLang(event.target.value)}>
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">Franch</option>
                    <option value="de">German</option>
                    <option value="it">Italiano</option>
                    <option value="pt">Portuguese</option>
                </select>
            </Target>

            <input type="text" value={text} onChange={(event) => setText(event.target.value)}/>
            <Button onClick={translateText}>Translate</Button>

            {translatedText && <TranslatedText>{translatedText}</TranslatedText>}
        </Container>
    );
}

export default LanguageTranslater;