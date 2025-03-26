export const notNull = <T>(value: T | undefined | null): value is T => {
  return value ? true : false;
};
