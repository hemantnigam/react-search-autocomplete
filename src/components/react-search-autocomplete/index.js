import React, { useEffect, useReducer, useRef } from "react";
import { TARGETS, TYPES } from "../../enums";
import { reducer } from "../../reducer";
import { initialState } from "../../state";
import { getInputStyle, getListItemStyle, getSearchStyle } from "../../utils";
import ReactSearchInput from "../react-search-input";
import ReactSearchList from "../react-search-list";
import "./index.scss";

function ReactSearchAutocomplete({ className, options, onSelection, onInput }) {
  const inputRef = useRef()
  const { data, style, classNames } = options;
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const { value } = options;

    if (value) {
      inputRef.current.value = value
    }
  }, []);

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
            searchDescriptionText[searchCriteria](
              state.searchText.toLowerCase()
            )
          ) {
            const index = searchDescriptionText
              .toLowerCase()
              .indexOf(state.searchText.toLowerCase());
            const left = `<span>${searchItem[text].substring(
              0,
              index
            )}</span>`;
            const middle = `<b>${searchItem[text].substring(
              index,
              index + state.searchText.length
            )}</b>`;
            const right = `<span>${searchItem[text].substring(
              index + state.searchText.length
            )}</span>`;

            const item = {
              key: searchItem[key],
              renderValue: left + middle + right,
              value: searchItem[text],
            };
            searchList.push(item);
          }
          return searchList;
        }, []);

        dispatch({
          type: TYPES.SEARCH_DATA,
          payload: filteredData,
        });
      }

      window.addEventListener("click", globalEventListener);
    }

    if (style) {
      let { input, height, listItem } = style;
      if (height) {
        input = { ...input, height };
        listItem = { ...listItem, height };
      }
      dispatch({
        type: TYPES.SEARCH_STYLE,
        payload: getSearchStyle(style),
      });

      if (input) {
        dispatch({
          type: TYPES.INPUT_STYLE,
          payload: getInputStyle(style, input),
        });
      }

      if (listItem) {
        dispatch({
          type: TYPES.LIST_ITEM_STYLE,
          payload: getListItemStyle(style, listItem),
        });
      }
    }

    if (classNames) {
      const { search, input, list, listItem } = classNames;
      dispatch({
        type: TYPES.SEARCH_CLASS,
        payload: search,
      });
      dispatch({
        type: TYPES.INPUT_CLASS,
        payload: input,
      });
      dispatch({
        type: TYPES.LIST_CLASS,
        payload: list,
      });
      dispatch({
        type: TYPES.LIST_ITEM_CLASS,
        payload: listItem,
      });
    }

    return () => {
      window.removeEventListener("click", globalEventListener);
    };
  }, [state.searchText, options]);

  const globalEventListener = (e) => {
    const targets = [
      TARGETS.REACT_SEARCH_AUTOCOMPLETE,
      TARGETS.SEARCH_INPUT_FIELD,
      TARGETS.SEARCH_LIST,
      TARGETS.NO_RESULT,
    ];

    if (targets.indexOf(e.target.id) === -1) {
      dispatch({
        type: TYPES.SHOW_LIST,
        payload: false,
      });
    }
  };

  const onFieldSelection = (...args) => {
    inputRef.current.value = args[1].value
    if(onSelection)
      onSelection(...args)
  }

  return (
    <div
      id={TARGETS.REACT_SEARCH_AUTOCOMPLETE}
      className={`react-search-autocomplete react-autocomplete-default search-container ${
        className || state.searchClass || ""
      }`}
      style={state.searchStyle}
    >
      <ReactSearchInput
        options={options}
        ref={inputRef}
        dispatch={dispatch}
        style={state.inputStyle}
        onInput={onInput}
        className={state.inputClass}
        value={state.textValue}
      />
      <ReactSearchList
        options={options}
        dispatch={dispatch}
        style={state.listItemStyle}
        searchText={state.searchText}
        searchData={state.searchData}
        showList={state.showList}
        onSelection={onFieldSelection}
        className={state.listClass}
        itemClassName={state.listItemClass}
      />
    </div>
  );
}

export default ReactSearchAutocomplete;
