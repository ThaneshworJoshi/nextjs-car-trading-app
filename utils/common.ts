export const isEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};

export const getAsString = (value: string | string[]): string => {
  if (Array.isArray(value)) {
    return value[0];
  }
  return value;
};

export const getStringValue = (value: string | string[]): string | null => {
  const str = getAsString(value);
  return !str || str.toLowerCase() === 'all' ? null : str;
};

export const getNumberValue = (value: string | string[]): number | null => {
  const str = getStringValue(value);
  const number = parseInt(str);
  return isNaN(number) ? null : number;
};
