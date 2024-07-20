import { useState } from "react";
import './Counter.css'

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="counter">
            <p>
                Você clicou {count} vezes
            </p>
            <button onClick={() => setCount(count + 1)}>Clique aqui</button>
        </div>
    );
}

export default Counter;