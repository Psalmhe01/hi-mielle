import { Paper, Button, Stack, Transition } from "@mantine/core";
import { useEffect, useState } from 'react';
import "../Styles/Body.css";
import Words from "../Words";
import SheSaidYes from "./sheSaidYes";
import confetti from "canvas-confetti";

function Cards() {
    const [count, setCount] = useState(0);
    const [opened, setOpened] = useState(true);
    const [position, setPosition] = useState(null);
    const [sayYes, setYes] = useState(false);


    const moveButton = () => {
        const randomTop = Math.floor(Math.random()*100);
        const randomLeft = Math.floor(Math.random()*100);

        setPosition({top: randomTop, left: randomLeft});
    };

    const style = position
        ? { position: 'absolute', top: `${position.top}%`, left: `${position.left}%`, zIndex: 100 } 
        : { position: 'static' }; 

    const next = () => {
        // Start the exit animation
        setOpened(false);

        // Wait for the animation duration (e.g., 500ms) before changing text
        setTimeout(() => {
            setCount((c) => c + 1);
            setOpened(true); // Start the enter animation
        }, 500);
    };

    function launchConfetti(){
        confetti({
            particleCount:250,
            spread: 100,
            origin: {y: 1},
            colors: ["rgba(173, 5, 143, 0.86)","#023a54d8", "#04642fe2", "#ffeb09e3", "#a80000"],
            shapes:["hearts"]
        });
    }
    

    useEffect(() => {
        setYes(false);

    }, []);

    return (
        <>
        {(count < Words.length) ? (
        <div className="card">
                
                    <Transition 
                        mounted={opened} 
                        transition="fade-up"
                        duration={500} 
                        timingFunction="ease"
                    >
                        {(styles) => (
                            <div>
                            <h2 style={styles} id="word">
                                {Words[count]}
                            </h2>
                            <Button 
                        onClick={next} 
                        disabled={!opened} 
                        variant="light"
                    >
                        Click me 💕
                    </Button>
                            </div>
                        )}
                    </Transition>
                    
                    
        </div>
        ): 
            (
                <>{(!sayYes) ? (
                <div className="popQuestion">
                    <h2>Will you be my</h2>
                    <div className="heart-pump">❤️</div>
                    <h1> Valentine?</h1>
                    <p>(If you like no talk yes 😒)</p>
                        <div className="yes-no">
                            <button id="yes-btn" onClick={() => {setYes(true), launchConfetti()}}> Yes! </button>
                            <button 
                                className="no-btn" 
                                id="no-btn" 
                                onClick={moveButton}
                                onMouseEnter={moveButton}
                                style={{
                                ...style,
                                transition: 'all 0.2s ease',
                                }}
                            >
                                No 
                            </button> 
                        </div>
                </div>
            ):
            (<SheSaidYes />)
            }</>)
        }
        </>
    );
}

export default Cards;