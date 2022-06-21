import React from "react";
import "./style.scss";
import StaticData from "./components/StaticData";
import StaticDataWithDebounce from "./components/StaticDataWithDebounce";
import StaticDataWithCustomCSS from "./components/StaticDataWithCustomCSS";
import StaticDataWithHighlightSearch from "./components/StaticDataWithHighlightSearch";
import PromiseData from "./components/PromiseData";

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
        <StaticDataWithHighlightSearch />
        <PromiseData />
      </main>
    </div>
  );
}

export default App;
