const { soma } = require("../../src/functions/math");

test("Deve somar 2 números corretamente", () => {
  expect(soma(2, 3)).toBe(5);
});
