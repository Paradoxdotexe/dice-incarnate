export const arrayOf = (n: number) => {
  return [...new Array(n)].map((_, i) => i);
};
