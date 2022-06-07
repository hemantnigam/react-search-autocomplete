import React, { useEffect, useState } from "react";
import { DEFAULT_CONFIG, TARGETS } from "../../enums";
import ReactSearchInput from "../react-search-input";
import ReactSearchList from "../react-search-list";
import "./index.scss";

function ReactSearchAutocomplete({ options, onSelection, onInput }) {
  const { data } = options;
  const [searchText, setSearchText] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    if (data) {
      const { schema, content, searchCriteria } = data;
      const { key, text } = schema;
      if (schema && content && key && text) {
        const filteredData = content.reduce((searchList, searchItem) => {
          const searchDescriptionText = searchItem[text].toLowerCase();
          if (
            searchDescriptionText &&
            searchDescriptionText[searchCriteria] &&
            searchDescriptionText[searchCriteria](searchText.toLowerCase())
          ) {
            const item = {
              key: searchItem[key],
              value: searchItem[text],
            };
            searchList.push(item);
          }
          return searchList;
        }, []);
        setSearchData(filteredData);
      }
      window.addEventListener("click", globalEventListener);
    }
    return () => {
      window.removeEventListener("click", globalEventListener);
    };
  }, [searchText]);

  const globalEventListener = (e) => {
    const targets = [
      TARGETS.REACT_SEARCH_AUTOCOMPLETE,
      TARGETS.SEARCH_INPUT_FIELD,
      TARGETS.SEARCH_LIST,
      TARGETS.NO_RESULT
    ];

    if (targets.indexOf(e.target.id) === -1) {
      setShowList(false);
    }
  };

  return (
    <div
      id={TARGETS.REACT_SEARCH_AUTOCOMPLETE}
      className="react-search-autocomplete react-autocomplete-default search-container"
      style={{ width: DEFAULT_CONFIG.style.width }}
    >
      <ReactSearchInput
        options={options}
        setShowList={setShowList}
        setSearchText={setSearchText}
        onInput={onInput}
      />
      <ReactSearchList
        options={options}
        searchText={searchText}
        searchData={searchData}
        showList={showList}
        setShowList={setShowList}
        onSelection={onSelection}
      />
    </div>
  );
}

export default ReactSearchAutocomplete;
