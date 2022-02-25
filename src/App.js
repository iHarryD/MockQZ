import "./App.css";
import "./CSS/variables.css";
import "./CSS/typography.css";
import "./CSS/utilities.css";
import "./CSS/generic.css";

import { QuestionsState } from "./QuestionsContext";

import { Quiz } from "./Components/Quiz/Quiz";

function App() {
  return (
    <QuestionsState>
      <div className="App">
        <Quiz />
      </div>
    </QuestionsState>
  );
}

export default App;
