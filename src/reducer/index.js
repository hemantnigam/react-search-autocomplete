import { TYPES } from "../enums";

export const reducer = (state, action) => {
  switch (action.type) {
    case TYPES.SEARCH_TEXT:
      return { ...state, searchText: action.payload };
    case TYPES.SEARCH_DATA:
      return { ...state, searchData: action.payload };
    case TYPES.SHOW_LIST:
      return { ...state, showList: action.payload };
    case TYPES.SEARCH_CLASS:
      return { ...state, searchClass: action.payload };
    case TYPES.INPUT_CLASS:
      return { ...state, inputClass: action.payload };
    case TYPES.LIST_CLASS:
      return { ...state, listClass: action.payload };
    case TYPES.LIST_ITEM_CLASS:
      return { ...state, listItemClass: action.payload };
    case TYPES.SEARCH_STYLE:
      return { ...state, searchStyle: action.payload };
    case TYPES.INPUT_STYLE:
      return { ...state, inputStyle: action.payload };
    case TYPES.LIST_ITEM_STYLE:
      return { ...state, listItemStyle: action.payload };
    case TYPES.TASK_DATA:
      return { ...state, taskData: action.payload };
    default:
      return state;
  }
};
