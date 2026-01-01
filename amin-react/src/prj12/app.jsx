import Body from "./compo/body";
import { nanoid } from "nanoid";
import { useState, useRef, useEffect } from "react";
import Confetti from "react-confetti";

export default function App() {
    function generateNewDice() {
        const allDice = [];
        for (let i = 0; i < 10; i++) {
            allDice.push({
                id: nanoid(),
                value: Math.ceil(Math.random() * 6),
                isHeld: false
            });
        }
        return allDice;
    }

    const [dice, setDice] = useState(generateNewDice());
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [bestTime, setBestTime] = useState(
        () => Number(localStorage.getItem("bestTime")) || null
    );

    const refBtn = useRef(null);

    function holdHandler(id) {
        setDice(prevDice =>
            prevDice.map(die =>
                die.id === id
                    ? { ...die, isHeld: !die.isHeld }
                    : die
            )
        );
    }

    const gameWon =
        dice.every(die => die.isHeld) &&
        dice.every(die => die.value === dice[0].value);

    function rollDice() {
        if (!isRunning && !gameWon) {
            setIsRunning(true);
        }

        if (!gameWon) {
            setDice(prevDice =>
                prevDice.map(die =>
                    die.isHeld
                        ? die
                        : { ...die, value: Math.ceil(Math.random() * 6) }
                )
            );
        } else {
            setDice(generateNewDice());
            setTime(0);
            setIsRunning(false);
        }
    }

    // تایمر
    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                setTime(prev => prev + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isRunning]);

    // بررسی رکورد بعد از برد
    useEffect(() => {
        if (gameWon) {
            setIsRunning(false);
            refBtn.current.focus();

            if (bestTime === null || time < bestTime) {
                setBestTime(time);
                localStorage.setItem("bestTime", time);
            }
        }
    }, [gameWon]);

    const diceElements = dice.map(die => (
        <Body
            key={die.id}
            value={die.value}
            isHeld={die.isHeld}
            holdHandler={() => holdHandler(die.id)}
        />
    ));

    return (
        <>
            {gameWon && <Confetti />}
            <div className="container">
                <h2>⏱ Time: {time} sec</h2>
                <h3>🏆 Best Time: {bestTime ? `${bestTime} sec` : "-"}</h3>

                <div className="dice-container">
                    {diceElements}
                </div>

                <button ref={refBtn} onClick={rollDice}>
                    {gameWon ? "Play Again" : "Roll"}
                </button>
            </div>
        </>
    );
}
