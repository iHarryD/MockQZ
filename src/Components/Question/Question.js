import "./CSS/style.css";

export default function Question(props) {
  return (
    <div
      key={props.index}
      className="quiz-question-container --bold-600 --has-padding"
      id={props.currentQuestion.questionCode}
    >
      <p className="question" key={props.currentQuestion.questionCode}>
        {props.currentQuestion.question}
      </p>
      {Object.keys(props.currentQuestion.options).map((option, index) => (
        <button
          className="option --verticle-flex --centered-flex"
          value={props.currentQuestion.options[option]}
          key={`${props.currentQuestion.questionCode}-${index}`}
          onClick={(e) => props.optionClickHandler(e)}
          disabled={props.hasUserSelected ? true : false}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
