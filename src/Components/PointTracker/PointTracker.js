import "./CSS/style.css";

export default function PointTracker(props) {
  return (
    <li className="points-tracker --verticle-flex --centered-flex --bold-700">
      + {props.value}
    </li>
  );
}
