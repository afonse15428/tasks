import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptLeft] = useState(3);
    const [requestedAttempts, setRequestedAttempts] = useState("");
    const isUseButtonDisabled = attemptsLeft === 0;
    const handleUseButtonClick = () => {
        if (!isUseButtonDisabled) {
            setAttemptLeft(attemptsLeft - 1);
        }
    };
    const handleGainButtonClick = () => {
        const parsedAttempts = parseInt(requestedAttempts);
        if (!isNaN(parsedAttempts)) {
            setAttemptLeft(attemptsLeft + parsedAttempts);
            setRequestedAttempts("");
        }
    };
    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts Left: {attemptsLeft}</p>
            <Button
                onClick={handleUseButtonClick}
                disabled={isUseButtonDisabled}
            >
                Use
            </Button>
            <input
                type="number"
                value={requestedAttempts}
                onChange={(e) => setRequestedAttempts(e.target.value)}
            />
            <Button onClick={handleGainButtonClick}>Gain</Button>
        </div>
    );
}
