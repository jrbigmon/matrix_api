export const getCapacity = (...values: number[]): number => {
  if (!values.length) return 0;

  const valuesZero: number[] = [];

  values?.forEach((value) => {
    (!value || value === 0) ?? valuesZero.push(value);
  });

  if (valuesZero.length === values.length) return 0;

  let capacity = 1;

  for (const value of values) {
    value > 0 ? (capacity *= value) : (capacity *= 1);
  }

  return capacity;
};
