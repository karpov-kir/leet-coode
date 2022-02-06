import { prepareSolutionsAndTestCases } from '../../utils';
import { generate as generateIterativeApproach } from './pascals-triangle-iterative-approach';
import { generate as generateRecursiveApproachV1 } from './pascals-triangle-recursive-approach-v1';
import { generate as generateRecursiveApproachV2 } from './pascals-triangle-recursive-approach-v2';

const { solutions, testCasesAndExpectedResults } = prepareSolutionsAndTestCases(
  [
    {
      solution: generateRecursiveApproachV1,
      name: "Pascal's triangle (recursive approach v1)",
    },
    {
      solution: generateRecursiveApproachV2,
      name: "Pascal's triangle (recursive approach v2)",
    },
    {
      solution: generateIterativeApproach,
      name: "Pascal's triangle (iterative approach)",
    },
  ],
  [
    {
      testCase: 5,
      expectedResult: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]],
    },
    {
      testCase: 1,
      expectedResult: [[1]],
    },
    {
      testCase: 2,
      expectedResult: [[1], [1, 1]],
    },
  ],
);

describe.each(solutions)('$name', ({ solution }) => {
  it.each(testCasesAndExpectedResults)(
    `return the first $humanReadableTestCase rows of Pascal's triangle`,
    ({ getTestCase, expectedResult }) => {
      expect(solution(getTestCase())).toEqual(expectedResult);
    },
  );
});
