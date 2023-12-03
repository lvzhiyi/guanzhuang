export const urlToList = (url: string): string[] => {
  const urlList = url.split('/').filter((i) => i);
  return urlList.map((_, index) => `/${urlList.slice(0, index + 1).join('/')}`);
};

type ResTypes = Record<string, string>;

export const addPrefixToEumValue = <U extends ResTypes>(
  types: U,
  namespace: string,
): U => {
  const resultActionTypes: ResTypes = {};

  Object.keys(types).forEach((key: string) => {
    resultActionTypes[key] = `${namespace}/${types[key]}`;
  });

  return resultActionTypes as U;
};
