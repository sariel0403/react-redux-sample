import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import useStore from "./useStore";

function App() {
  const { theme, update } = useStore();

  React.useEffect(() => {
    update({ theme: "123231" });
  }, []);

  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
