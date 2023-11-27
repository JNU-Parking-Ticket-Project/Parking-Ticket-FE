export const PAGINATION_BOUND = 5;
export const generatePaginationIndexs = (
  currentIdx: number,
  lastIdx: number,
) => {
  const currentIdxOrder = Math.floor((currentIdx - 1) / PAGINATION_BOUND);
  const lastIdxOrder = Math.floor((lastIdx - 1) / PAGINATION_BOUND);
  if (currentIdxOrder === lastIdxOrder) {
  }
  return Array.from(
    {
      length:
        currentIdxOrder === lastIdxOrder && lastIdx % PAGINATION_BOUND !== 0
          ? lastIdx % PAGINATION_BOUND
          : PAGINATION_BOUND,
    },
    (_, i) =>
      PAGINATION_BOUND * Math.floor((currentIdx - 1) / PAGINATION_BOUND) +
      i +
      1,
  );
};
