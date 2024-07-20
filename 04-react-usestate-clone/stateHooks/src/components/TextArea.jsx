import { useState } from "react";
import './TextArea.css'

function TextArea(){
    let [text, setText] = useState('');

    // () => setText(document.getElementById('text').value)
    return (
        <div className="dinamic_text">
            <input id="text" onChange={e => setText(e.target.value)} type="text"/>
            <div className="dinamic_text_text">
                <p>↓ Texto em tempo real ↓</p>
                <p>{text}</p>
            </div>
        </div>
    );
}

export default TextArea;