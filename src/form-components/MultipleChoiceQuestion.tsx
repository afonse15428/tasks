import React, { useState } from "react";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [selectedChoice, setSelectedChoice] = useState(options[0]);
    const handleSelectedChange = (e: {
        target: { value: React.SetStateAction<string> };
    }) => {
        setSelectedChoice(e.target.value);
    };
    const isCorrect = selectedChoice === expectedAnswer;
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <select value={selectedChoice} onChange={handleSelectedChange}>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            {isCorrect ? "✔️" : "❌"}
        </div>
    );
}
