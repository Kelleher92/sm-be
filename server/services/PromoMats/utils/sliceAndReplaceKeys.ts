export function sliceAndReplaceKeys(object, keysMap: Record<string, string>) {
  return Object.entries(keysMap).reduce(
    (acc, [oldKey, newKey]) => {
      acc[newKey] = object[oldKey] || null;

      return acc;
    },
    {} as any, // tslint:disable-line
  );
}
