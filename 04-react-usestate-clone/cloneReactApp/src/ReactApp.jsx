import { useState } from 'react';
import './ReactApp.css'
import image from './logo.png'


let itens = [
    <ul>
        <li>React is extremely popular</li>
        <li>It makes building complex, interactive UIs a breeze</li>
        <li>It's powerful & flexible</li>
        <li>It has a very active and versatile ecosystem</li>
    </ul>,
    <ul>
        <li>Components, JSX & Props</li>
        <li>State</li>
        <li>Hooks (e.g., useEffect())</li>
        <li>Dynamic rendering</li>
    </ul>,
    <ul>
        <li>Official web page (react.dev)</li>
        <li>Next.js (Fullstack framework)</li>
        <li>React Native (build native mobile apps with React)</li>
    </ul>,
    <ul>
        <li>Vanilla JavaScript requires imperative programming</li>
        <li>Imperative Programming: You define all the steps needed to achieve a result</li>
        <li>React on the other hand embraces declarative programming</li>
        <li>With React, you define the goal and React figures out how to get there</li>
    </ul>
    ];

function ReactApp() {

    const [item, setItem] = useState(itens[0]);


    return (
        <div>
            <div className='content'>
                <div className='content_init'>
                    <img src={image} alt="" />
                    <div className='content_init_text'>
                        <h1>React.js</h1>
                        <p>i.e., using the React library for rendering the UI</p>
                    </div>
                </div>
                <div className='content_text'>
                    <menu>
                        <button onClick={() => setItem(itens[0])}>Why React?</button>
                        <button onClick={() => setItem(itens[1])}>Core Features</button>
                        <button onClick={() => setItem(itens[2])}>Related Resources</button>
                        <button onClick={() => setItem(itens[3])}>React vs JS</button>
                    </menu>
                    <div className='content_text_text'>
                            {item}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReactApp;