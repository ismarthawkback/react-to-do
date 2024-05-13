export const getLocalStorageValue = (key, emptyReturn) => {
  const savedValue = JSON.parse(localStorage.getItem(key));
  if (savedValue) return savedValue;
  return emptyReturn;
};

export const saveLocalStorageValue = (key, value) => {
  localStorage.setItem(key, value);
};
