import React, { useState } from "react";

export function ChangeColor(): JSX.Element {
    const [chosenColor, setChosenColor] = useState("");
    const colors = [
        "red",
        "blue",
        "green",
        "yellow",
        "orange",
        "purple",
        "pink",
        "brown"
    ];
    const handleColorChange = (color: string) => {
        setChosenColor(color);
    };
    return (
        <div>
            <h3>Change Color</h3>
            <div>
                {colors.map((color: string, index: number) => (
                    <label
                        key={index}
                        style={{ display: "inline-block", marginRight: "10px" }}
                    >
                        <input
                            type="radio"
                            name="color"
                            value={color}
                            checked={chosenColor === color}
                            onChange={() => handleColorChange(color)}
                        />
                        {color}
                    </label>
                ))}
            </div>
            <div>
                <div
                    data-testid="colored-box"
                    style={{
                        backgroundColor: chosenColor,
                        color: "white",
                        padding: "10px",
                        marginTop: "10px"
                    }}
                >
                    {chosenColor}
                </div>
            </div>
        </div>
    );
}
