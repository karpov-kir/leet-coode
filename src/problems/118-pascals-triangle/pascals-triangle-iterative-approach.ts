// https://leetcode.com/problems/pascals-triangle/
// Pascal's triangle (iterative approach)

export function generate(numRows: number): number[][] {
  const triangle = [[1]];
  let previousRow = triangle[0];

  for (let rowIndex = 1; rowIndex < numRows; rowIndex++) {
    const row: number[] = [1];

    for (let columnIndex = 1; columnIndex < rowIndex; columnIndex++) {
      row.push(previousRow[columnIndex - 1] + previousRow[columnIndex]);
    }

    row.push(1);
    triangle.push(row);

    previousRow = row;
  }

  return triangle;
}
