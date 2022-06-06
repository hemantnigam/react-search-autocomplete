import React, { useEffect, useState } from "react";

function SearchAutocomplete({ options }) {
  const { data } = options;
  const [searchText, setSearchText] = useState("");
  const [searchData, setSearchData] = useState([]);

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
    }
  }, [searchText]);

  return (
    <div className="react-autocomplete search-container">
      <input type="text" onInput={(e) => setSearchText(e.target.value)} />
      <div className="search-content">
        <ul className="search-list">
          {searchData.map(({ key, value }) => (
            <li className="search-list-item" key={key}>
              {value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SearchAutocomplete;
