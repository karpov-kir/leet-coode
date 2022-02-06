// https://leetcode.com/problems/pascals-triangle/
// Pascal's triangle (recursive approach v1)

export function generate(numRows: number): number[][] {
  const triangle: number[][] = [];

  for (let rowIndex = 0; rowIndex < numRows; rowIndex++) {
    const row: number[] = [];

    for (let columnIndex = 0; columnIndex <= rowIndex; columnIndex++) {
      row.push(getNumberAtPosition(rowIndex, columnIndex));
    }

    triangle.push(row);
  }

  return triangle;
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
