
  

# React Search Autocomplete
A `<ReactSearchAutocomplete/>` is fully customizable and feature rich search component.

### [Demo](https://react-search-autocomplete.netlify.app/)
### Installing
`npm i @hemantnigam/react-search-autocomplete`

### How to use

###### Step 1: Install @hemantnigam/react-search-autocomplete using `npm i @hemantnigam/react-search-autocomplete`
###### Step 2: import dependency in the component using
```
    import ReactSearchAutocomplete from "@hemantnigam/react-search-autocomplete";
                                    or
    import { ReactSearchAutocomplete } from "@hemantnigam/react-search-autocomplete";
```

###### Step 3: Add it into the JSX using
```<ReactSearchAutocomplete options=options />```

### Available options
```
{
  "classNames": { //custom classnames for search component
    "search": "string",
    "input": "string",
    "list": "string",
    "listItem": "string",
  },
  "style": {  //custom style for search components
    "width": "number" | "string", //default is 300px
    "height": "number" | "string", //default is 35px
    "fontSize": "number" | "string",
    "fontWeight": "number" | "string",
    "fontFamily": "number" | "string",
    "margin": "number" | "string",
    "marginTop": "number" | "string",
    "marginBottom": "number" | "string",
    "marginLeft": "number" | "string",
    "marginRight": "number" | "string",
    "input": {
      "textIndent": "number" | "string",
      "padding": "number" | "string",
      "paddingTop": "number" | "string",
      "paddingBottom": "number" | "string",
      "paddingLeft": "number" | "string",
      "paddingRight": "number" | "string",
    },
    "listItem": {
      "height": "number" | "string",
      "padding": "number" | "string",
      "paddingTop": "number" | "string",
      "paddingBottom": "number" | "string",
      "paddingLeft": "number" | "string",
      "paddingRight": "number" | "string",
      "margin": "number" | "string",
      "marginTop": "number" | "string",
      "marginBottom": "number" | "string",
      "marginLeft": "number" | "string",
      "marginRight": "number" | "string",
    },
  },
  "placeholder": "string" //default is Select
  "searchCount": 'number' //default is 5
  "debounceDelay": "number" //delay after input
  "highlightSearch": "boolean" //if search result should highlight the searched text
  "data": {
    "schema": { //model of actual data
      "id": "string", //id label of data object
      "text": "string" //search text label of data object
    },
    "content": "array" //contains the data like [{}{}{}...]
    "task": "promise" // promise that will return data from server
    "serializer": "function" //function to modify response data
    "searchCriteria": "startsWith" | "includes" //default to startsWith
  }
}
```
### Support
React v18+

##### Note: Please feel free to contribute in the project. Thanks