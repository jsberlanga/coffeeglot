import { languages, locations } from "./data";

export const findFlag = courseLanguage => {
  const filtered = languages.find(lang => {
    return lang.language.toLowerCase() === courseLanguage.toLowerCase();
  });
  return filtered && filtered.flag;
};

export const findLocation = courseLocation => {
  const filtered = locations.find(loc => {
    return loc.name.toLowerCase() === courseLocation.toLowerCase();
  });
  return filtered && filtered.pictures[0];
};
