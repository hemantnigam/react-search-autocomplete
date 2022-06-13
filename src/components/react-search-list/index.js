import React from "react";
import { DEFAULT_CONFIG, TARGETS, TYPES } from "../../enums";

function ReactSearchList({
  className,
  itemClassName,
  options,
  style,
  searchText,
  searchData,
  showList,
  dispatch,
  onSelection,
}) {
  const searchCount = options?.searchCount || DEFAULT_CONFIG.searchCount;
  const { highlightSearch } = options;
  const handleListSelection = (e, value) => {
    if (onSelection) onSelection(e, { value });

    dispatch({
      type: TYPES.SHOW_LIST,
      payload: false,
    });
  };

  return (
    <>
      {searchText && searchData.length > 0 && showList && (
        <ul
          className={`react-autocomplete-default__list search-list ${
            className || ""
          }`}
          id={TARGETS.SEARCH_LIST}
        >
          {searchData.slice(0, searchCount).map(({ key, renderValue, value }) =>
            highlightSearch ? (
              <li
                className={`search-list-item ${itemClassName || ""}`}
                style={style}
                key={key}
                dangerouslySetInnerHTML={{ __html: renderValue }}
                onClick={(e) => handleListSelection(e, value)}
              />
            ) : (
              <li
                className={`search-list-item ${itemClassName || ""}`}
                style={style}
                key={key}
                onClick={(e) => handleListSelection(e, value)}
              >
                {value}
              </li>
            )
          )}
        </ul>
      )}
      {searchData.length === 0 && showList && (
        <ul
          className={`react-autocomplete-default__list search-list ${
            className || ""
          }`}
          id={TARGETS.NO_RESULT}
        >
          <li
            className={`search-list-item ${itemClassName || ""}`}
            style={style}
          >
            No result found
          </li>
        </ul>
      )}
    </>
  );
}

export default ReactSearchList;
