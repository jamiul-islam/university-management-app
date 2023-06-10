// ['page', 'limit', 'sortBy', 'sortOrder']

const pick = <T extends keyof Record<string, unknown>, k extends keyof T>(
  obj: T,
  keys: k[]
): Partial<T> => {
  const finalObject: Partial<T> = {};

  for (const key of keys) {
    if (obj && Object.hasOwnProperty.call(obj, key)) {
      finalObject[key] = obj[key];
    }
  }

  return finalObject;
};

export default pick;
