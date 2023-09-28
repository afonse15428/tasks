import React, { useState } from "react";
import { Button } from "react-bootstrap";

const holidays = [
    { name: "St. Patrick's Day", emoji: "☘️", alphabetOrder: 1, timeOrder: 1 },
    { name: "Easter", emoji: "🐇", alphabetOrder: 2, timeOrder: 2 },
    { name: "Independence Day", emoji: "🇺🇸", alphabetOrder: 3, timeOrder: 3 },
    { name: "Thanksgiving", emoji: "🦃", alphabetOrder: 4, timeOrder: 4 },
    { name: "Christmas", emoji: "🎁", alphabetOrder: 5, timeOrder: 5 }
];

export function CycleHoliday(): JSX.Element {
    const [currentHoliday, setCurrentHoliday] = useState(holidays[0]);
    const cycleByAlphabet = () => {
        const currentIndex = holidays.findIndex(
            (holiday) => holiday === currentHoliday
        );
        const currentAlphabetOrder = holidays[currentIndex].alphabetOrder;
        const nextIndex = holidays.findIndex(
            (holiday) => holiday.alphabetOrder > currentAlphabetOrder
        );
        const nextHolidayIndex = nextIndex !== -1 ? nextIndex : 0;
        setCurrentHoliday(holidays[nextHolidayIndex]);
    };
    const cycleByYear = () => {
        const currentIndex = holidays.findIndex(
            (holiday) => holiday === currentHoliday
        );
        const nextYearIndex = holidays.findIndex(
            (holidays) => holidays.timeOrder > currentHoliday.timeOrder
        );
        const nextIndex =
            nextYearIndex !== -1
                ? nextYearIndex
                : (currentIndex + 1) % holidays.length;
        setCurrentHoliday(holidays[nextIndex]);
    };
    return (
        <div>
            <p>Holiday: {currentHoliday.emoji}</p>
            <Button onClick={cycleByAlphabet}>Advance by Alphabet</Button>
            <Button onClick={cycleByYear}>Advance by Year</Button>
        </div>
    );
}
