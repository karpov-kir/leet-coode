import { prepareSolutionsAndTestCases } from '../../utils';
import { getRow as getRowIterativeApproach } from './pascals-triangle-II-iterative-approach';
import { getRow as getRowIterativeMemoryEfficientApproach } from './pascals-triangle-II-iterative-memory-efficient-approach';
import { getRow as getRowRecursiveApproach } from './pascals-triangle-II-recursive-approach';

const { solutions, testCasesAndExpectedResults } = prepareSolutionsAndTestCases(
  [
    {
      solution: getRowRecursiveApproach,
      name: "Pascal's triangle II (recursive approach)",
    },
    {
      solution: getRowIterativeApproach,
      name: "Pascal's triangle II (iterative approach)",
    },
    {
      solution: getRowIterativeMemoryEfficientApproach,
      name: "Pascal's triangle II (iterative memory efficient approach)",
    },
  ],
  [
    {
      testCase: 3,
      expectedResult: [1, 3, 3, 1],
    },
    {
      testCase: 0,
      expectedResult: [1],
    },
    {
      testCase: 1,
      expectedResult: [1, 1],
    },
  ],
);

describe.each(solutions)('$name', ({ solution }) => {
  it.each(testCasesAndExpectedResults)(
    `return the $humanReadableTestCase(th) (0-indexed) row of the Pascal's triangle`,
    ({ getTestCase, expectedResult }) => {
      expect(solution(getTestCase())).toEqual(expectedResult);
    },
  );
});
