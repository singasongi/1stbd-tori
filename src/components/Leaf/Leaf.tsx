import React from 'react';
import './Leaf.css';
import { useState } from 'react';

export function Leaf() {

    const [width] = useState<number>(window.innerWidth);
    const leaves = [];
    const size = width <= 768 ? 11 : 20;
    let arr = [];

    for (let i = 0; i < size; i++) {
        let x = Math.floor(Math.random() * 21);
        arr.push(x);
    }

    for (let x of arr) {
        // console.log(x);
        const styleData = {
            fallDelay: Math.random() * arr.length,
            shakeDegree: 16,
            leftPosition: Math.random() * 100,
            fallDuration: Math.random() * (18 - 10) + 10,
            shakeDuration: Math.random() * (5 - 2) + 2
        }

        const leafStyle = {
            "--fall-delay": styleData.fallDelay + "s",
            "--shake-degree": styleData.shakeDegree + "deg",
            "--left-position": styleData.leftPosition + "%",
            "--fall-duration": styleData.fallDuration + "s",
            "--shake-duration": styleData.shakeDuration + "s"
        } as React.CSSProperties;

        leaves.push(
            <div key={x} className="leaves">
                <img className="leaf-down"
                    src={process.env.PUBLIC_URL+"/assets/leaves/" + x + ".svg"}
                    // src={"%PUBLIC_URL%/assets/leaves/"+x+".svg"} 
                    style={leafStyle}
                ></img>
            </div>
        );
    }

    return (
        <div className="leaf-container">{leaves}</div>
    )
}



