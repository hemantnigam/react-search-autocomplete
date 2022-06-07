import React from "react";
import ReactSearchAutocomplete from "../../src/components/react-search-autocomplete";

function StaticData() {
  const constantDataOptions = {
    placeholder: "Select Value",
    searchCount: 3,
    debounceDelay: 500,
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
          searchText: "Duis eiusmod deserunt voluptate laborum",
        },
        {
          id: 3,
          searchText: "Duis fugiat cillum dolor",
        },
        {
          id: 4,
          searchText: "Duis adipisicing dolor pariatur",
        },
        {
          id: 5,
          searchText: "Duis et tempor cupidatat eu incididunt",
        },
        {
          id: 6,
          searchText: "Lorem ex in laboris cupidatat culpa",
        },
        {
          id: 7,
          searchText: "irure qui duis pariatur exercitation reprehenderit",
        },
        {
          id: 8,
          searchText: "irure qui duis pariatur exercitation reprehenderit",
        },
        {
          id: 9,
          searchText: "Duis commodo amet aute fugiat",
        },
        {
          id: 10,
          searchText: "Laborum do sunt commodo dolor",
        },
        {
          id: 11,
          searchText:
            "Duis magna velit ipsum minim cillum elit enim reprehenderit",
        },
        {
          id: 12,
          searchText: "Lorem consectetur laboris eiusmod culpa qui ex ut",
        },
        {
          id: 13,
          searchText: "Pariatur sint labore cillum",
        },
        {
          id: 14,
          searchText: "non est Lorem exercitation",
        },
        {
          id: 15,
          searchText: "Consequat nulla culpa sit sit dolor",
        },
        {
          id: 16,
          searchText: "exercitation adipisicing occaecat",
        },
        {
          id: 17,
          searchText: "laborum labore minim nostrud ullamco eiusmod",
        },
        {
          id: 18,
          searchText: "Mollit est nostrud incididunt",
        },
        {
          id: 19,
          searchText: "laboris duis est",
        },
        {
          id: 20,
          searchText: "Id esse elit velit mollit",
        },
        {
          id: 21,
          searchText: "labore laboris",
        },
        {
          id: 22,
          searchText: "Reprehenderit exercitation ut exercitation",
        },
        {
          id: 23,
          searchText: "sint qui quis deserunt sint sint",
        },
        {
          id: 24,
          searchText: "Ut aute enim ea dolor cillum",
        },
        {
          id: 25,
          searchText: "eiusmod ipsum irure nostrud",
        },
      ],
      searchCriteria: "startsWith",
    },
  };

  const handleSelection = (...args) => {
    console.log(args);
  };

  const handleInput = (...args) => {
    console.log(args);
  };

  return (
    <div className="static-data">
      <h3>With Static Data</h3>
      <pre>
        {`
            options: {
              placeholder: 'Select Value',
              searchCount: 3,
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
            `}
      </pre>
      <ReactSearchAutocomplete
        options={constantDataOptions}
        onSelection={(...args) => handleSelection(...args)}
        onInput={(...args) => handleInput(...args)}
      />
    </div>
  );
}

export default StaticData;
