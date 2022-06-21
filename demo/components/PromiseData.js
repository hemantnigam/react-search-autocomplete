import React from "react";
import ReactSearchAutocomplete from "../../src/components/react-search-autocomplete";
import CommonLayout from "./CommonLayout";

function PromiseData() {
  const constantDataOptions = {
    placeholder: "Select Value",
    highlightSearch: true,
    searchCount: 3,
    data: {
      schema: {
        key: "id",
        text: "title",
      },
      task: fetch("https://jsonplaceholder.typicode.com/posts"),
      searchCriteria: "startsWith",
    },
  };

  const heading = "Search with promise data";

  const code = `
  options: {
    placeholder: 'Select Value',
    searchCount: 3,
    highlightSearch: true,
    data: {
      schema: {
        key: 'id',
        text: 'title'
      },
      task: fetch('https://jsonplaceholder.typicode.com/posts'),
      searchCriteria: 'startsWith'
    }
  }

  
  <ReactSearchAutocomplete
    options={constantDataOptions}
  />
  `;

  return (
    <div className="container">
      <CommonLayout heading={heading} code={code} />
      <ReactSearchAutocomplete
        className="react-search"
        options={constantDataOptions}
      />
    </div>
  );
}

export default PromiseData;
