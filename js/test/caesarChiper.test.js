import { caesarChiper } from "../caesarChiper.js";

test("Test caesarChiper", () => {
  expect(caesarChiper("xyz", 3)).toBe("abc");
  expect(caesarChiper("HeLLo", 3)).toBe("KhOOr");
  expect(caesarChiper("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
