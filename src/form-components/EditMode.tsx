import React, { useState } from "react";

export function EditMode(): JSX.Element {
    const [isEditMode, setIsEditMode] = useState(false);
    const [userName, setUserName] = useState("Your Name");
    const [isStudent, setIsStudent] = useState(true);
    const handleNameChange = (e: {
        target: { value: React.SetStateAction<string> };
    }) => {
        setUserName(e.target.value);
    };
    const handleStudentChange = () => {
        setIsStudent(!isStudent);
    };
    const toggleEditMode = () => {
        setIsEditMode(!isEditMode);
    };
    return (
        <div>
            <h3>Edit Mode</h3>
            <label className="form-switch">
                <input
                    type="checkbox"
                    checked={isEditMode}
                    onChange={toggleEditMode}
                />
                Edit Mode
            </label>
            {isEditMode ? (
                <div>
                    <label>
                        Users Name:
                        <input
                            type="text"
                            value={userName}
                            onChange={handleNameChange}
                        />
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={isStudent}
                            onChange={handleStudentChange}
                        />
                        Student
                    </label>
                </div>
            ) : (
                <div>
                    {userName} is {isStudent ? "a student" : "not a student"}
                </div>
            )}
        </div>
    );
}
