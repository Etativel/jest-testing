import { capitalize } from "../capitalize.js";

test("Capitalize string", () => {
  expect(capitalize("HELLO")).toBe("Hello");
  expect(capitalize("hello")).toBe("Hello");
  expect(capitalize("heLlO")).toBe("Hello");
});
