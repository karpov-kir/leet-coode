// https://leetcode.com/problems/fibonacci-number/
// Search in a binary search tree (iterative approach)

const cache = new Map<number, number>();

export function fib(n: number): number {
  if (n < 2) {
    return n;
  }

  const cachedResult = cache.get(n);

  if (cachedResult !== undefined) {
    return cachedResult;
  }

  const result = fib(n - 1) + fib(n - 2);

  cache.set(n, result);

  return fib(n - 1) + fib(n - 2);
}
