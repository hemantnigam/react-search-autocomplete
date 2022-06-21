import React from "react";
import ReactSearchAutocomplete from "../../src/components/react-search-autocomplete";
import CommonLayout from "./CommonLayout";

function PromiseData() {
  
  async function getTask() {
    const resposne = await fetch('https://jsonplaceholder.typicode.com/posts')
    return resposne.json()
  }

  const constantDataOptions = {
    placeholder: "Select Value",
    highlightSearch: true,
    searchCount: 3,
    data: {
      schema: {
        key: "id",
        text: "title",
      },
      task: getTask(),
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
      task: responseTask, //promise which return data when resolved
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
