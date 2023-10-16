import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Quiz } from "../interfaces/quiz";
import { QuizCard } from "./QuizCard";
import "./QuizList.css";
import { QuizView } from "./QuizView";

export const QuizList = ({
    quizzes,
    editQuiz,
    deleteQuiz,
    showModal
}: {
    quizzes: Quiz[];
    editQuiz: (quizId: number, updatedQuiz: Quiz) => void;
    deleteQuiz: (quizId: number) => void;
    showModal: () => void;
}) => {
    const [displayId, setDisplayId] = useState<number | null>(null);

    const handleQuizView = (id: number) => {
        setDisplayId(id);
    };

    const resetQuizView = () => {
        setDisplayId(null);
    };

    return (
        <div className="quiz_list">
            {!displayId && (
                <>
                    {quizzes.map((quiz: Quiz) => (
                        <QuizCard
                            key={quiz.id}
                            quiz={quiz}
                            handleClick={handleQuizView}
                        ></QuizCard>
                    ))}
                    <Button className="add_btn" onClick={showModal}>
                        Add New Quiz
                    </Button>
                </>
            )}
            {displayId !== null && (
                <QuizView
                    key={displayId}
                    quiz={
                        quizzes.find((quiz) => quiz.id === displayId) ||
                        quizzes[0]
                    }
                    editQuiz={editQuiz}
                    deleteQuiz={deleteQuiz}
                    resetView={resetQuizView}
                ></QuizView>
            )}
        </div>
    );
};
