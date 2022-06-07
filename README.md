
  

# React Search Autocomplete
A `<ReactSearchAutocomplete/>` is fully customizable and feature rich search component.

### [Demo](https://react-search-autocomplete.netlify.app/)
### Installing
`npm i @hemantnigam/react-search-autocomplete`

### How to use

###### Step 1: Install @hemantnigam/react-search-autocomplete using `npm i @hemantnigam/react-search-autocomplete`
###### Step 2: import dependency in the component using
```import { ReactSearchAutocomplete } from "@hemantnigam/react-search-autocomplete";```

###### Step 3: Add it into the JSX using
```<ReactSearchAutocomplete options=options />```

### Available options
```
{
  "data": {
  "placeholder": "string" //default is Select
  "debounceDelay": "number" //delay after input
  "searchCount": 'number' //default is 5
  "schema": { //model of actual data
    "id": "string", //id label of data object
    "text": "string" //search text label of data object
  },
  "content": "array" //contains the data like [{}{}{}...]
  "searchCriteria": "startsWith" | "includes"
  }
}
```

##### Note: Please feel free to contribute in the project. Thanks