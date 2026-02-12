import { PinInput, Transition } from '@mantine/core';
import { useState, useEffect } from 'react';
import '@mantine/core/styles/PinInput.css';
import Cards from './Cards';

function Pin() {
    const pin = "0124";
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [showWelcome, setShowWelcome] = useState(true);
    const [showCards, setShowCards] = useState(false);

    const handlePin = (value) => {
        if (value === pin) {
            setIsAuthenticated(true);
        } else {
            alert("Intruder!!! It's not for you!");
        }
    };

    useEffect(() => {
        if (isAuthenticated) {
            // 1. Hide Welcome after 1.5s
            const exitTimer = setTimeout(() => {
                setShowWelcome(false);
            }, 2500);

            // 2. Start Card animation after Welcome has had time to fade (approx 2s total)
            const enterTimer = setTimeout(() => {
                setShowCards(true);
            }, 3000);

            return () => {
                clearTimeout(exitTimer);
                clearTimeout(enterTimer);
            };
        }
    }, [isAuthenticated]);

    return (
        <div>
            {!isAuthenticated ? (
                <div className='pin'>
                    <h1>Hello, Welcome!</h1>
                    <h2>First of all, verify your identity 🧐</h2>
                    <h3>When is our anniversary date?</h3>
                    <div><PinInput length={4} onComplete={handlePin} /></div>
                </div>
            ) : (
                <div style={{ position: 'relative'}}>
                    {/* Welcome Message Transition */}
                    <Transition 
                        mounted={showWelcome} 
                        transition="fade" 
                        duration={500}
                        // This ensures the H1 is removed from DOM after fading out
                        keepMounted={false} 
                    >
                        {(styles) => (
                            <div style={{ ...styles, textAlign: 'center' }}>
                                <h1 className='welcome'>Welcome, Mielle!!</h1>
                            </div>
                            
                        )}
                    </Transition>

                    {/* Cards Transition */}
                    <Transition 
                        mounted={showCards} 
                        transition="fade" 
                        duration={800}
                    >
                        {(styles) => (
                            <div style={{...styles}}>
                                <Cards />
                            </div>
                        )}
                    </Transition>
                </div>
            )}
        </div>
    );
}

export default Pin;