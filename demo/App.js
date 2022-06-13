import React from "react";
import "./style.scss";
import StaticData from "./components/StaticData";
import StaticDataWithDebounce from "./components/StaticDataWithDebounce";
import StaticDataWithCustomCSS from "./components/StaticDataWithCustomCSS";

function App() {
  return (
    <div className="app">
      <header>
        <h1>React Search Autocomplete</h1>
      </header>
      <main>
        <StaticData />
        <StaticDataWithDebounce />
        <StaticDataWithCustomCSS />
      </main>
    </div>
  );
}

export default App;
