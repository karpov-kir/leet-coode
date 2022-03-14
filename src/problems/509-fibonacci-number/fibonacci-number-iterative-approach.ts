// https://leetcode.com/problems/fibonacci-number/
// Fibonacci number (iterative approach)

export function fib(n: number): number {
  if (n < 2) {
    return n;
  }

  let previous = 0;
  let current = 1;
  for (let i = 1; i < n; i++) {
    const newCurrent = previous + current;

    previous = current;
    current = newCurrent;
  }

  return current;
}
