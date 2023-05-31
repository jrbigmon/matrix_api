export const getCapacity = (...values: number[]): number => {
  if (!values.length) return 0;

  const initialValue = 1;
  const multiplyWithInitialValue = values?.reduce(
    (accumulator, currentValue) => {
      currentValue = currentValue > 0 ? currentValue : 1;
      return accumulator * currentValue;
    },
    initialValue,
  );

  return multiplyWithInitialValue;
};
