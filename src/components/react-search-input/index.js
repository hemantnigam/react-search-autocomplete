import React, { useMemo, useRef } from "react";
import { DEFAULT_CONFIG, TARGETS, TYPES } from "../../enums";

const ReactSearchInput = ({ value, className, options, style, dispatch, onInput }, ref) => {
  const placeholder = options.hasOwnProperty("placeholder")
    ? options.placeholder
    : DEFAULT_CONFIG.placeholder;

  const debounce = (fn, delay) => {
    let timeout;
    return (...args) => {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  };

  const handleInput = (e) => {
    ref.current.value = e.target.value

    if (e.target.value) {
      dispatch({
        type: TYPES.SHOW_LIST,
        payload: true,
      });
      dispatch({
        type: TYPES.SEARCH_TEXT,
        payload: e.target.value,
      });
    } else {
      dispatch({
        type: TYPES.SHOW_LIST,
        payload: true,
      });
    }

    if (onInput) onInput(e, { value: e.target.value });
  };

  const debouncedEvent = useMemo(() => {
    const { debounceDelay } = options;
    if (debounceDelay && typeof debounceDelay === "number") {
      return debounce(handleInput, debounceDelay);
    }
    return handleInput;
  }, []);

  const clearText = () => {
    ref.current.value = ''
  }

  return (
    <>
      <input
        className={`react-autocomplete-default__input-field ${className || ""}`}
        id={TARGETS.SEARCH_INPUT_FIELD}
        ref={ref}
        type="text"
        placeholder={placeholder}
        style={style}
        onInput={debouncedEvent}
      />
      <div className="clear-btn" onClick={clearText}>
        <div className="line1"></div>
        <div className="line2"></div>
      </div>
    </>
  );
}

export default React.forwardRef(ReactSearchInput);
