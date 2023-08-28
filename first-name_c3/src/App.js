import logo from "./logo.svg";
import "./App.css";

function App() {
  function Name() {
    return (
      <div>
        <h1>Gerald Ofori-Atta</h1>
        <p>A diagnostic medical sonographer from Knust</p>
      </div>
    );
  }

  const Skills = () => (
    <div>
      <h2>Skills</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JAVASCRIPT</li>
      </ul>
    </div>
  );

  return (
    <div className="App">
      <Name />
      <Skills/>
    </div>
  );
}

export default App;
