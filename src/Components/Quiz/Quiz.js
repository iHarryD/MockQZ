import { useState, useEffect, useRef, useContext } from "react";

import "./CSS/style.css";
import Timer from "../Timer/Timer";
import Question from "../Question/Question";
import PointTracker from "../PointTracker/PointTracker";
import { QuestionsContext } from "../../QuestionsContext";

export function Quiz(props) {
  const [totalScore, setTotalScore] = useState(0);
  const allQuestions = useContext(QuestionsContext);
  const questionsList = allQuestions["mcu"];
  const currentQuestionIndex = useRef(0);
  const [currentQuestion, setCurrentQuestion] = useState(
    currentQuestionIndex.current
  );
  const [timer, setTimer] = useState(30);
  const [hasUserSelected, setHasUserSelected] = useState(false);
  const [currentIntervalID, setCurrentIntervalID] = useState(null);
  const [allPointerTrackers, setAllPoitnerTrackers] = useState([]);

  // WHEN USER SELECTS AN OPTION
  const optionClickHandler = (e) => {
    clearInterval(currentIntervalID);
    setHasUserSelected(true);
    if (e.target.value === "true") {
      e.target.classList.add("correct");
      setAllPoitnerTrackers((prev) => [...prev, timer]);
      setTotalScore((prev) => prev + timer);
    } else {
      setAllPoitnerTrackers((prev) => [...prev, 0]);
      e.target.classList.add("wrong");
    }
    setTimeout(() => {
      updateQuestion();
    }, 1500);
  };

  // ENDS QUIZ WHEN ALL QUESTIONS HAVE BEEN PUT OUT
  function quizEnds() {}

  // UPDATES NEXT QUESTION STATE ONLY IF NEXT QUESTION EXISTS
  function updateQuestion() {
    currentQuestionIndex.current = currentQuestionIndex.current + 1;
    if (currentQuestionIndex.current > questionsList.length - 1) {
      quizEnds();
    } else {
      setCurrentQuestion(currentQuestionIndex.current);
    }
  }

  // RESETS EVERYTHING EVERYTIME QUESTION CHANGES
  useEffect(() => {
    setHasUserSelected(false);
    setTimer(30);
    clearInterval(currentIntervalID);
    const currentInterval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    setCurrentIntervalID(currentInterval);
  }, [currentQuestion]);

  // IF THE TIMER RUNS OUT
  useEffect(() => {
    if (timer !== 0) return;
    setAllPoitnerTrackers((prev) => [...prev, 0]);
    updateQuestion();
  }, [timer]);

  return (
    <main className="--verticle-flex --has-padding">
      <div className="quiz-header --has-padding">
        <h2 className="sub-heading --h2 quiz-heading">
          Marvel Cinematic Universe Quiz
        </h2>
      </div>
      <section className="quiz-section --horizontal-flex">
        <div className="question-and-footer-container">
          <div className="question-options-container">
            <Question
              currentQuestion={questionsList[currentQuestion]}
              optionClickHandler={optionClickHandler}
              hasUserSelected={hasUserSelected}
            />
          </div>
          <div className="quiz-section-footer --horizontal-flex --has-padding">
            <Timer currentTimer={timer} />
            <div className="helper-container"></div>
          </div>
        </div>

        <aside className="quiz-aside --has-padding">
          <p className="current-score-container">
            Current score:{" "}
            <span className="current-score --bold-700">{totalScore}</span>
          </p>
          <ul className="trackers-container --verticle-flex --has-gap">
            {allPointerTrackers.map((tracker, index) => (
              <PointTracker value={tracker} key={index} />
            ))}
          </ul>
        </aside>
      </section>
    </main>
  );
}
