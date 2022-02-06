// https://leetcode.com/problems/pascals-triangle-ii/
// Pascal's triangle II (memory efficient approach)

export function getRow(rowIndex: number): number[] {
  const row = [1];

  for (let currentRowIndex = 1; currentRowIndex <= rowIndex; currentRowIndex++) {
    row.push(1);

    for (let columnIndex = currentRowIndex - 1; columnIndex > 0; columnIndex--) {
      row[columnIndex] = row[columnIndex] + row[columnIndex - 1];
    }

    if (currentRowIndex === rowIndex) {
      return row;
    }
  }

  return [1];
}
