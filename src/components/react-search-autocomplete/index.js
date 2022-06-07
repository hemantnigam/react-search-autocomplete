import React, { useEffect, useState } from "react";
import { DEFAULT_CONFIG, TARGETS } from "../../enums";
import "./index.scss";

function ReactSearchAutocomplete({ options, onSelection, onInput }) {
  const { data } = options;
  const [searchText, setSearchText] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [showList, setShowList] = useState(false);
  const searchCount = options?.searchCount || DEFAULT_CONFIG.searchCount;
  const placeholder = options.hasOwnProperty("placeholder")
    ? options.placeholder
    : DEFAULT_CONFIG.placeholder;

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

  const handleListSelection = (e, value) => {
    if (onSelection) onSelection(e, { value });
    setShowList(false);
  };

  const handleInput = (e) => {
    if (e.target.value) {
      setShowList(true);
      setSearchText(e.target.value);
    } else {
      setShowList(false);
    }

    if (onInput) onInput(e, { value: e.target.value });
  };

  const globalEventListener = (e) => {
    const targets = [
      TARGETS.REACT_SEARCH_AUTOCOMPLETE,
      TARGETS.SEARCH_INPUT_FIELD,
      TARGETS.SEARCH_LIST,
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
      <input
        className="react-autocomplete-default__input-field"
        id={TARGETS.SEARCH_INPUT_FIELD}
        type="text"
        placeholder={placeholder}
        style={{ height: DEFAULT_CONFIG.style.height }}
        onInput={(e) => handleInput(e)}
      />

      {searchText && searchData.length > 0 && showList && (
        <ul
          className="react-autocomplete-default__list search-list"
          id={TARGETS.SEARCH_LIST}
        >
          {searchData.slice(0, searchCount).map(({ key, value }) => (
            <li
              className="search-list-item"
              style={{ height: DEFAULT_CONFIG.style.height }}
              onClick={(e) => handleListSelection(e, value)}
              key={key}
            >
              {value}
            </li>
          ))}
        </ul>
      )}
      {searchData.length === 0 && (
        <ul className="react-autocomplete-default__list search-list">
          <li
            className="search-list-item"
            style={{ height: DEFAULT_CONFIG.style.height }}
          >
            No result found
          </li>
        </ul>
      )}
    </div>
  );
}

export default ReactSearchAutocomplete;
