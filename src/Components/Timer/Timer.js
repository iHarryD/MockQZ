import "./CSS/style.css";

export default function Timer(props) {
  return (
    <div className="timer-container --has-padding --bold-700">
      <p>
        {String(props.currentTimer).length < 2
          ? `00:0${props.currentTimer}`
          : `00:${props.currentTimer}`}
      </p>
    </div>
  );
}
