import { PinInput, Transition } from '@mantine/core';
import { useState } from 'react';
import '@mantine/core/styles/PinInput.css'
import Cards from './Cards';


function Pin() {
const pin = "0124";
const [status, setStatus] = useState(false);
const handlePin = (value) => {
    if (value === pin){setStatus(true); setChange(true)}
    else {setStatus(false); alert("Intruder!!! It's not for you!")}
};
const [change, setChange] = useState(false);
const [isVisible, setVisibility] = useState(true);

    return (
    <div>
    {change ? 
    (
        <div >
            <h1 className='fadeIn' >Welcome, Mielle!!</h1>
        </div>
    ) 
    
    :
    (
        <div className='pin'>
            <h1>Hello, Welcome!</h1>
            <h2>First of all, verify your identity 🧐</h2>
            <h3>When is our anniversary date?</h3>
            <PinInput length={4} onComplete={handlePin} className='pin-input'/>
        </div>
    )
    }
    </div>
    )
}

export default Pin