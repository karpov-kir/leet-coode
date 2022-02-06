// https://leetcode.com/problems/pascals-triangle-ii/
// Pascal's triangle II (recursive approach)

export function getRow(rowIndex: number): number[] {
  const row: number[] = [];
  let columnsToCreate = rowIndex + 1;

  while (columnsToCreate >= 1) {
    row.unshift(getNumberAtPosition(rowIndex, columnsToCreate - 1));
    columnsToCreate--;
  }

  return row;
}

const cache = new Map<string, number>();

function getNumberAtPosition(rowIndex: number, columnIndex: number): number {
  if (columnIndex === 0 || columnIndex === rowIndex) {
    return 1;
  }

  const cacheToken = `${rowIndex}-${columnIndex}`;
  const cachedResult = cache.get(cacheToken);

  if (cachedResult) {
    return cachedResult;
  }

  const result = getNumberAtPosition(rowIndex - 1, columnIndex) + getNumberAtPosition(rowIndex - 1, columnIndex - 1);

  cache.set(cacheToken, result);

  return result;
}
