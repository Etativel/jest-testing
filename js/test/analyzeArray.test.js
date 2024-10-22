import { analyzeArray } from "../analyzeArray.js";

test("Analyze array", () => {
  expect(analyzeArray([2, 2])).toEqual({
    average: 2,
    min: 2,
    max: 2,
    length: 2,
  });
  expect(analyzeArray([])).toBe("input must be an array");
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
