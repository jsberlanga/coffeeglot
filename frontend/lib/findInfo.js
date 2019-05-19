import { languages, locations } from "./data";

export const findFlag = courseLanguage => {
  const filtered = languages.find(lang => {
    return lang.language.toLowerCase() === courseLanguage.toLowerCase();
  });
  return filtered && filtered.flag;
};

export const findLocation = courseLocation => {
  return courseLocation;
};
