// https://leetcode.com/problems/fibonacci-number/
// Search in a binary search tree (iterative approach)

export function fib(n: number): number {
  if (n < 2) {
    return n;
  }

  let previousStep = 1;
  let currentStep = 1;
  for (let i = 2; i < n; i++) {
    const newStep = currentStep + previousStep;
    previousStep = currentStep;
    currentStep = newStep;
  }

  return currentStep;
}
