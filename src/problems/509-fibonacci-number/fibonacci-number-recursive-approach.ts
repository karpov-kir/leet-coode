// https://leetcode.com/problems/fibonacci-number/
// Fibonacci number (recursive approach)

export function fib(n: number): number {
  if (n < 2) {
    return n;
  }

  return cacheDecorator(fib)(n - 1) + cacheDecorator(fib)(n - 2);
}

const cache = new Map<number, number>();

function cacheDecorator(fibFunction: typeof fib): typeof fib {
  return (n: number) => {
    const cachedResult = cache.get(n);

    if (cachedResult) {
      return cachedResult;
    }

    const result = fibFunction(n);

    cache.set(n, result);

    return result;
  };
}
