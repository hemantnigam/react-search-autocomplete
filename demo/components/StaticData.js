import React from "react";
import { ReactSearchAutocomplete } from "@hemantnigam/react-search-autocomplete";

function StaticData() {
  const constantDataOptions = {
    data: {
      schema: {
        key: "id",
        text: "searchText",
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
      searchCriteria: "startsWith",
    },
  };
  return (
    <div className="static-data">
      <h3>With Static Data</h3>
      <pre>
        {`
            options: {
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
            <ReactSearchAutocomplete options=options />
            `}
      </pre>
      <ReactSearchAutocomplete options={constantDataOptions} />
    </div>
  );
}

export default StaticData;
