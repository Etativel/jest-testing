import { reverseString } from "../reverseString.js";

test("Reverse a string", () => {
  expect(reverseString("myname is")).toBe("si emanym");
  expect(reverseString("pig")).toBe("gip");
});
