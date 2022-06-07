import React, {useMemo} from "react";
import { DEFAULT_CONFIG, TARGETS } from "../../enums";

function ReactSearchInput({options, setShowList, setSearchText, onInput}) {
  const placeholder = options.hasOwnProperty("placeholder")
  ? options.placeholder
  : DEFAULT_CONFIG.placeholder;

  const debounce = (fn, delay) => {
    let timeout;
    return (...args) => {
      if(timeout) clearTimeout(timeout)
      timeout = setTimeout(()=>{
        fn(...args)
      }, delay)
    }
  }

  const handleInput = (e) => {
    if (e.target.value) {
      setShowList(true);
      setSearchText(e.target.value);
    } else {
      setShowList(false);
    }

    if (onInput) onInput(e, { value: e.target.value });
  };
  
  const debouncedEvent = useMemo(() => {
    const {debounceDelay} = options
    if(debounceDelay && typeof debounceDelay === 'number') {
      return debounce(handleInput, debounceDelay)
    }
    return fn
  },[])

  return (
    <>
      <input
        className="react-autocomplete-default__input-field"
        id={TARGETS.SEARCH_INPUT_FIELD}
        type="text"
        placeholder={placeholder}
        style={{ height: DEFAULT_CONFIG.style.height }}
        onInput={debouncedEvent}
      />
    </>
  );
}

export default ReactSearchInput;
