import React from "react";
import { DEFAULT_CONFIG, TARGETS } from "../../enums";

function ReactSearchList({
  options,
  searchText,
  searchData,
  showList,
  setShowList,
  onSelection,
}) {
  const searchCount = options?.searchCount || DEFAULT_CONFIG.searchCount;

  const handleListSelection = (e, value) => {
    if (onSelection) onSelection(e, { value });
    setShowList(false);
  };

  return (
    <>
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
      {searchData.length === 0 && showList && (
        <ul
          className="react-autocomplete-default__list search-list"
          id={TARGETS.NO_RESULT}
        >
          <li
            className="search-list-item"
            style={{ height: DEFAULT_CONFIG.style.height }}
          >
            No result found
          </li>
        </ul>
      )}
    </>
  );
}

export default ReactSearchList;
