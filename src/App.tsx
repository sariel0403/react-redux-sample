import React from "react";
import "./App.scss";
// import useStore from "./useStore";

import List from "./pages/list";
import Content from "./pages/content";

function App() {
  // const { theme, update } = useStore();

  return (
    <div className="App">
      <List />
      <Content />
    </div>
  );
}

export default App;
