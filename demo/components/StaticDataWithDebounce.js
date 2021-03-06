import React from "react";
import ReactSearchAutocomplete from "../../src/components/react-search-autocomplete";
import CommonLayout from "./CommonLayout";
import { content } from "../constant";

function StaticDataWithDebounce() {
  const constantDataOptions = {
    placeholder: "Select Value",
    searchCount: 3,
    debounceDelay: 1000,
    data: {
      schema: {
        key: "id",
        text: "searchText",
      },
      content,
      searchCriteria: "startsWith",
    },
  };

  const handleSelection = (...args) => {
    console.log(args);
  };

  const handleInput = (...args) => {
    console.log(args);
  };

  const heading = "Static Data with debounce"

  const code = `
  options: {
    placeholder: 'Select Value',
    searchCount: 3,
    debounceDelay: 1000,
    data: {
      schema: {
        key: 'id',
        text: 'searchText'
      },
      content: [
        {
          id: 1,
          searchText: "Duis ipsum id aliqua in amet eu aute",
        },
        {
          id: 2,
          searchText: "Incididunt eiusmod deserunt voluptate laborum",
        },
      ],
      searchCriteria: 'startsWith'
    }
  }

  
  <ReactSearchAutocomplete
    options={constantDataOptions}
    onSelection={onSelection}
    onInput={onInput}
  />
  `

  return (
    <div className="container">
      <CommonLayout heading={heading} code={code}/>
      <ReactSearchAutocomplete
        className="react-search"
        options={constantDataOptions}
        onSelection={(...args) => handleSelection(...args)}
        onInput={(...args) => handleInput(...args)}
      />
    </div>
  );
}

export default StaticDataWithDebounce;
