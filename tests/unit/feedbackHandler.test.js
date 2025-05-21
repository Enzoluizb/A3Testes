const { ajustarFrequencia } = require("../../src/functions/feedbackHandler");

describe("TDD - ajustarFrequencia", () => {
  test("Deve retornar 1 para feedback ruim", () => {
    expect(ajustarFrequencia("ruim")).toBe(1);
  });

  test("Deve retornar 2 para feedback regular", () => {
    expect(ajustarFrequencia("regular")).toBe(2);
  });

  test("Deve retornar 3 para feedback ótimo", () => {
    expect(ajustarFrequencia("ótimo")).toBe(3);
  });
});
