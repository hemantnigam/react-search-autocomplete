import { DEFAULT_CONFIG } from "../enums";

const getStyleMap = (style, expectedStyles) => {
  return Object.entries(style).reduce((searchStyle, [key, value]) => {
    if (
      key !== "input" &&
      key !== "list" &&
      expectedStyles.indexOf(key) !== -1 &&
      value
    ) {
      if (typeof key === "string") {
        return { ...searchStyle, [key]: value };
      }

      if (typeof key === "number") {
        return { ...searchStyle, [key]: `${value}px` };
      }
    }
    return searchStyle;
  }, {});
};

const commonFontStyle = (style) => {
  const { fontSize, fontWeight, fontFamily } = style;
  return Object.entries({ fontSize, fontWeight, fontFamily }).reduce(
    (inputStyle, [key, value]) => {
      if (value) {
        if (typeof value === "string") {
          return { ...inputStyle, [key]: value };
        }

        if (typeof value === "number") {
          if (key === "fontWeight") {
            return { ...inputStyle, [key]: value };
          }
          return { ...inputStyle, [key]: `${value}px` };
        }
      }
      return inputStyle;
    },
    {}
  );
};

export function getSearchStyle(style) {
  const { width, height } = style;
  const expectedStyles = [
    "margin",
    "marginTop",
    "marginBottom",
    "marginLeft",
    "marginRight",
  ];
  const styleMap = getStyleMap(style, expectedStyles);
  const fontStyle = commonFontStyle(style);
  styleMap.width = width || DEFAULT_CONFIG.style.width;
  styleMap.height = height || DEFAULT_CONFIG.style.height;

  return { ...styleMap, ...fontStyle };
}

export function getInputStyle(style, input) {
  const { height } = style;
  const fontStyle = commonFontStyle(style);
  const inputStyle = { ...fontStyle };
  if (input) {
    const expectedStyles = [
      "textIndent",
      "padding",
      "paddingTop",
      "paddingBottom",
      "paddingLeft",
      "paddingRight",
    ];

    const styleMap = getStyleMap(input, expectedStyles);

    styleMap.height = height || DEFAULT_CONFIG.style.height;

    return { ...inputStyle, ...styleMap };
  }

  return inputStyle;
}

export function getListItemStyle(style, listItem) {
  const {height } = style;
  const fontStyle = commonFontStyle(style);
  const listItemStyle = { ...fontStyle };
  if (listItem) {
    const expectedStyles = [
      "height",
      "padding",
      "paddingTop",
      "paddingBottom",
      "paddingLeft",
      "paddingRight",
      "margin",
      "marginTop",
      "marginBottom",
      "marginLeft",
      "marginRight",
    ];

    const styleMap = getStyleMap(listItem, expectedStyles);

    styleMap.height = styleMap.height || height || DEFAULT_CONFIG.style.height;

    return { ...listItemStyle, ...styleMap };
  }

  return listItemStyle;
}
