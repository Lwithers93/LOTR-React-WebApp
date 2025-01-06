import { useState } from "react";
import reactLogo from "./assets/react.svg";
import lotrLogo from "/icons8-one-ring-32.png";
import "./App.css";
import Dashboard from "./components/Dashboard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <main>
        <Dashboard />
        <img
          src="https://static.independent.co.uk/2021/08/13/11/13093800-bef0fae1-0044-4fb7-8c11-eb84de14286c.jpg"
          alt="lotr-background-image"
          className="bg-img"
        ></img>
      </main>
    </div>
  );
}

export default App;
