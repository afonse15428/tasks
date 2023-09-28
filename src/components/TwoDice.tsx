import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [leftDieValue, setLeftDieValue] = useState(1);
    const [rightDieValue, setRightDieValue] = useState(2);
    const [gameResult, setGameResult] = useState("");
    const rollLeftDie = () => {
        const newValue = d6();
        setLeftDieValue(newValue);
        checkResult(newValue, rightDieValue);
    };
    const rollRightDie = () => {
        const newValue = d6();
        setRightDieValue(newValue);
        checkResult(leftDieValue, newValue);
    };
    const checkResult = (leftValue: number, rightValue: number) => {
        if (leftValue === rightValue && leftValue === 1) {
            setGameResult("You Lose");
        } else if (leftValue === rightValue) {
            setGameResult("You Win");
        } else {
            setGameResult("");
        }
    };
    return (
        <div>
            <span data-testid="left-die">{leftDieValue}</span>
            <span data-testid="right-die">{rightDieValue}</span>
            <Button onClick={rollLeftDie}>Roll Left</Button>
            <Button onClick={rollRightDie}>Roll Right</Button>
            {gameResult && <p>{gameResult}</p>}
        </div>
    );
}
