import { DEFAULT_CONFIG } from "../enums";

export const initialState = {
  searchText: "",
  searchData: [],
  showList: false,
  searchStyle: {
    width: DEFAULT_CONFIG.style.width,
    height: DEFAULT_CONFIG.style.height,
  },
  inputStyle: {
    height: DEFAULT_CONFIG.style.height,
  },
  listItemStyle: {
    height: DEFAULT_CONFIG.style.height,
  },
  searchClass: null,
  inputClass: null,
  listClass: null,
  listItemClass: null,
};
