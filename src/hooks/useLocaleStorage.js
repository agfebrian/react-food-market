import { useState, useEffect } from "react";

const getSavedLocaleStorage = (key, initialValue) => {
  const saved = localStorage.getItem(key);
  if (saved) return saved;
  return initialValue;
};

export const useLocalStorage = (key, initialValue = "") => {
  const [value, setValue] = useState(() =>
    getSavedLocaleStorage(key, initialValue),
  );

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value]);

  return [value, setValue];
};
