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

export const findMaxSeats = courseLocation => {
  if (!courseLocation) return 1;
  const filtered = locations.find(loc => {
    return loc.name.toLowerCase() === courseLocation.toLowerCase();
  });
  return filtered.seats;
};
