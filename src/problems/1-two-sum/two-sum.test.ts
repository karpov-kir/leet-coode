import { prepareSolutionsAndTestCases } from '../../utils';
import { twoSum } from './two-sum';

const { solutions, testCasesAndExpectedResults } = prepareSolutionsAndTestCases(
  [
    {
      solution: twoSum,
      name: 'Two sum',
    },
  ],
  [
    {
      testCase: { array: [2, 7, 11, 15], target: 9 },
      expectedResult: [0, 1],
    },
    {
      testCase: { array: [3, 15, 48, 17], target: 63 },
      expectedResult: [1, 2],
    },
    {
      testCase: { array: [3, 4, 5, 6], target: 500 },
      expectedResult: [undefined, undefined],
    },
  ],
  {
    testCaseAsArguments: true,
  },
);

describe.each(solutions)('$name', ({ solution }) => {
  it.each(testCasesAndExpectedResults)(
    'should return indices of the two elements from $humanReadableTestCase.array such that they add up to $humanReadableTestCase.target',
    ({ getTestCase, expectedResult }) => {
      const { array, target } = getTestCase();
      expect(solution(array, target)).toEqual(expectedResult);
    },
  );
});
