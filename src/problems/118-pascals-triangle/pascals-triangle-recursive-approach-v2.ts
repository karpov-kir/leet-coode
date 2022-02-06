// https://leetcode.com/problems/pascals-triangle/
// Pascal's triangle (recursive approach v2)

export function generate(numRows: number): number[][] {
  return getRows([[1]], numRows);
}

function getRows(currentTriangle: number[][], maxLevel: number): number[][] {
  const currentLevel = currentTriangle.length;

  if (maxLevel === currentLevel) {
    return currentTriangle;
  }

  const lastRow = currentTriangle[currentLevel - 1];
  const newRow = [1];

  for (let columnIndex = 1; columnIndex < currentLevel; columnIndex++) {
    newRow.push(lastRow[columnIndex - 1] + lastRow[columnIndex]);
  }

  newRow.push(1);

  currentTriangle.push(newRow);
  return getRows(currentTriangle, maxLevel);
}
