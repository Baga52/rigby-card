import { Link } from "react-router-dom";

export default function MainPage(){
    return(
        <>
        <h1>Игра Memory</h1>
        <p>Правила игры</p>
        <ol>
            <li>правило 1</li>
            <li>правило 2</li>
            <li>правило 3</li>
        </ol>
        <Link to="/game">Начать игру</Link>
        </>
    )
}