import React, {useRef, useState} from "react";
import ReactSearchAutocomplete from "../../src/components/react-search-autocomplete";
import CommonLayout from "./CommonLayout";

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
