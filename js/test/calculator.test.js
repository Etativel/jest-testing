import { calculator } from "../calculator.js";

const calc = calculator();

test("Test calculator", () => {
  expect(calc.add(2, 3)).toBe(5);
  expect(calc.subtract(0, -1)).toBe(1);
  expect(calc.subtract(4, 3)).toBe(1);
  expect(calc.divide(2, 2)).toBe(1);
  expect(calc.divide(2, 0)).toBe("Cannot divide by 0");
  expect(calc.multiply(2, 0)).toBe(0);
  expect(calc.multiply(2, 2)).toBe(4);
});
