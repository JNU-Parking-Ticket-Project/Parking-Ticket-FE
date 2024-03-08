export const pipe =
  <T, R>(...func: Function[]) =>
  (value: T) => {
    return func.reduce(
      (curValue: any, curFunc) => curFunc(curValue),
      value,
    ) as R;
  };
