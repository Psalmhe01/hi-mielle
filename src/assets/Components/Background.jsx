    import { useEffect } from 'react';
    import '../Styles/Body.css';

    const Background = () => {
    useEffect(() => {
        const createBitmoji = () => {
        const container = document.getElementById('bit-container');
        if (!container) return;

        const bit = document.createElement("div");
        bit.classList.add("floating-bit");
        
        // Use the actual image
        bit.innerHTML = `<img src="../Image/bitmoji.jpg" style="width: 50px; height: auto;" />`;

        // RANDOM POSITIONING
        const randomTop = Math.floor(Math.random() * 90); // 0 to 90vh
        const randomLeft = Math.floor(Math.random() * 90); // 0 to 90vw
        
        bit.style.position = "absolute";
        bit.style.top = `${randomTop}vh`;
        bit.style.left = `${randomLeft}vw`;
        
        // RANDOM SCALING & ROTATION
        const scale = Math.random() * 0.5 + 0.5; // Scale between 0.5 and 1
        const rotation = Math.random() * 40 - 20; // Slight tilt
        bit.style.transform = `scale(${scale}) rotate(${rotation}deg)`;
        bit.style.left = Math.random() * 100 + "vw";

        container.appendChild(bit);

        // Remove after the animation ends
        setTimeout(() => {
            bit.remove();
        }, 20000);
        };

        const interval = setInterval(createBitmoji, 250); // New one every 1/4 second
        return () => clearInterval(interval);
    }, []);

    return (
        <div 
        id="bit-container" 
        style={{ 
            position: 'fixed', 
            inset: 0, 
            zIndex: -1, 
            pointerEvents: 'none',
            overflow: 'hidden' 
        }} 
        />
    );
    };

    export default Background;