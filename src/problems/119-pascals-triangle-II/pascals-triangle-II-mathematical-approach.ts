// https://leetcode.com/problems/pascals-triangle-ii/
// Pascal's triangle II (mathematical approach)

// Binomial theorem (n r) = n! / (r! * (n - r)!)
// Difference between two elements using the theorem above
// (n r) / (n r - 1) = (n - r + 1) / r

export function getRow(rowIndex: number): number[] {
  const row: number[] = [1];
  const lastElementIndex = rowIndex;

  // Each next element differs from the previous
  // by this factor (n - r + 1) / r;
  // We start from second element (index 1) as the first element is always 1.
  // Number of elements in the row is equal to the row index (positions start from 0 in the theorem)
  for (let itemIndex = 1; itemIndex <= lastElementIndex; itemIndex++) {
    const lastItem = row[itemIndex - 1];
    const factor = (lastElementIndex - itemIndex + 1) / itemIndex;

    row.push(lastItem * factor);
  }

  return row;
}
