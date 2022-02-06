import { prepareSolutionsAndTestCases } from '../../utils';
import { reverseString as reverseStringIterativeApproach } from './reverse-string-iterative-approach';
import { reverseString as reverseStringNativeJsApproach } from './reverse-string-native-js-approach';
import { reverseString as reverseStringRecursiveApproach } from './reverse-string-recursive-approach';

const { solutions, testCasesAndExpectedResults } = prepareSolutionsAndTestCases(
  [
    {
      solution: reverseStringIterativeApproach,
      name: 'Reverse string (iterative approach)',
    },
    {
      solution: reverseStringNativeJsApproach,
      name: 'Reverse string (native JS approach)',
    },
    {
      solution: reverseStringRecursiveApproach,
      name: 'Reverse string (recursive approach)',
    },
  ],
  [
    {
      testCase: ['S', 'o', 'm', 'e', ' ', 's', 't', 'r', 'i', 'n', 'g'],
      expectedResult: ['g', 'n', 'i', 'r', 't', 's', ' ', 'e', 'm', 'o', 'S'],
    },
  ],
);

describe.each(solutions)('$name', ({ solution }) => {
  it.each(testCasesAndExpectedResults)(`should reverse $humanReadableTestCase`, ({ getTestCase, expectedResult }) => {
    const testCase = getTestCase();
    solution(testCase);
    expect(testCase).toEqual(expectedResult);
  });
});
