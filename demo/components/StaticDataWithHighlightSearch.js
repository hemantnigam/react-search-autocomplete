import React from "react";
import ReactSearchAutocomplete from "../../src/components/react-search-autocomplete";
import { content } from "../constant";
import CommonLayout from "./CommonLayout";

function StaticDataWithHighlightSearch() {
  const constantDataOptions = {
    placeholder: "Select Value",
    highlightSearch: true,
    searchCount: 3,
    data: {
      schema: {
        key: "id",
        text: "searchText",
      },
      content,
      searchCriteria: "startsWith",
    },
  };

  const heading = "Search with highlight text";

  const code = `
  options: {
    placeholder: 'Select Value',
    searchCount: 3,
    highlightSearch: true,
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

export default StaticDataWithHighlightSearch;
