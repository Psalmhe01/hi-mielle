import { Paper, Button, Stack, Transition } from "@mantine/core";
import { useState } from 'react';
import "../Styles/Body.css";
import Words from "../Words";

function Cards() {
    const [count, setCount] = useState(0);
    const [opened, setOpened] = useState(true);
    const [position, setPosition] = useState(null);

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

    

    return (
        <>
        {(count < Words.length) ? (
        <div className="card">
            <Paper shadow="xl" p="xl">
                <Stack align="center" h={150} justify="center">
                    <Transition 
                        mounted={opened} 
                        transition="fade-up"
                        duration={500} 
                        timingFunction="ease"
                    >
                        {(styles) => (
                            <p style={styles} id="word">
                                {Words[count]}
                            </p>
                        )}
                    </Transition>
                    
                    <Button 
                        onClick={next} 
                        disabled={!opened} 
                        color="pink" 
                        variant="light"
                    >
                        Click me 💕
                    </Button>
                </Stack>
            </Paper>
        </div>
        ): 
        <div className="popQuestion">
            <div className="heart-pump">❤️</div>
            <h1>Will you be my Valentine?</h1>
            <p>(If you like no talk yes 😒)</p>
                <div className="yes-no">
                <button id="yes-btn"> YES! </button>
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
                    No </button> 
            </div>
        </div>
        }
        </>
    );
}

export default Cards;