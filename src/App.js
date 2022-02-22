import "./App.css";
import "./CSS/variables.css";
import "./CSS/typography.css";
import "./CSS/utilities.css";
import "./CSS/generic.css";

import { SinglePlayerHomepage } from "./Components/SinglePlayerHomepage/SinglePlayerHomepage";

function App() {
  return (
    <div className="App">
      <SinglePlayerHomepage />
    </div>
  );
}

export default App;
