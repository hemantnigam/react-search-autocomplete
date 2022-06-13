import React, {useRef, useState} from "react";
import ReactSearchAutocomplete from "../../src/components/react-search-autocomplete";
import CommonLayout from "./CommonLayout";
import { content } from "../constant";

const map = {
  classNames: {
    search: null,
    input: null,
    list: null,
    listItem: null,
  },
  style: {
    width: null,
    height: null,
    fontSize: null,
    fontWeight: null,
    fontFamily: null,
    margin: null,
    marginTop: null,
    marginBottom: null,
    marginLeft: null,
    marginRight: null,
    input: {
      textIndent: null,
      padding: null,
      paddingTop: null,
      paddingBottom: null,
      paddingLeft: null,
      paddingRight: null,
    },
    listItem: {
      height: 0,
      padding: 0,
      paddingTop: null,
      paddingBottom: null,
      paddingLeft: null,
      paddingRight: null,
      margin: null,
      marginTop: null,
      marginBottom: null,
      marginLeft: null,
      marginRight: null,
    },
  },
  data: {
    schema: {
      key: "id",
      text: "searchText",
    },
    content,
    searchCriteria: "startsWith",
  },
};

function StaticDataWithCustomCSS() {
  const textAreaRef = useRef()
  const [options, setOptions] = useState(map)

  const code = `options: {
    classNames: {
      search: null, //string
      input: null, //string
      list: null, //string
      listItem: null, //string
    },
    style: {
      width: null, //number
      height: null, //number
      fontSize: null, //number
      fontWeight: null, //number
      fontFamily: null, //number
      margin: null, //number
      marginTop: null, //number
      marginBottom: null, //number
      marginLeft: null, //number
      marginRight: null, //number,
      input: {
        textIndent: null, //number
        padding: null, //number
        paddingTop: null, //number
        paddingBottom: null, //number
        paddingLeft: null, //number
        paddingRight: null, //number
      },
      listItem: {
        height: 0, //number
        padding: 0, //number
        paddingTop: null, //number
        paddingBottom: null, //number
        paddingLeft: null, //number
        paddingRight: null, //number
        margin: null, //number
        marginTop: null, //number
        marginBottom: null, //number
        marginLeft: null, //number
        marginRight: null, //number
      },
    }
  }


  <ReactSearchAutocomplete options={options} />
  `
  const saveCssBlock = () => {
    const tempOptions = structuredClone(options)
    setOptions({...tempOptions, ...JSON.parse(textAreaRef.current.value.replaceAll('\n', '').replaceAll(' ', ''))})
  }

  const placeholder = `
  {
    "classNames": {},
    "style": {},
    "data": {}
  }`
  return (
    <div className="container">
      <CommonLayout heading={"Custom CSS Options"} code={code} />
      <div className="css-block">
        <textarea ref={textAreaRef} placeholder={placeholder}/>
        <button onClick={saveCssBlock}>Save</button>
        <ReactSearchAutocomplete options={options} />
      </div>
    </div>
  );
}

export default StaticDataWithCustomCSS;
