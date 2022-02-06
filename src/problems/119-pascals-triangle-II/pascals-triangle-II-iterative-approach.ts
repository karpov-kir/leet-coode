// https://leetcode.com/problems/pascals-triangle-ii/
// Pascal's triangle II (iterative approach)

export function getRow(rowIndex: number): number[] {
  let previousRow = [1];

  for (let currentRowIndex = 1; currentRowIndex <= rowIndex; currentRowIndex++) {
    const row: number[] = [1];

    for (let columnIndex = 1; columnIndex < currentRowIndex; columnIndex++) {
      row.push(previousRow[columnIndex - 1] + previousRow[columnIndex]);
    }

    row.push(1);

    if (currentRowIndex === rowIndex) {
      return row;
    }

    previousRow = row;
  }

  return [1];
}
