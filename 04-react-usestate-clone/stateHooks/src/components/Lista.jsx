import { useState } from "react";
import "./Lista.css";



function Lista() {

    const [lista, addLista] = useState([]);

    const addTask = () => {
        let item = document.getElementById('textItem').value;
        addLista(listaPrev => [...listaPrev, item]);
        document.getElementById('textItem').value = '';
    }
    console.log(lista)
    return (
        <div className="area_text">
            <div className="area_text_input">
                <input id="textItem" type="text" />
                <button onClick={addTask}>Adicionar Tarefa</button>
            </div>
            <ul>
                {
                    lista.map(index => <li>
                        {index}
                    </li>)
                }
            </ul> 
        </div>
    );
}

export default Lista;