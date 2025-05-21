const { validarData } = require("../../src/functions/systemValidator");

describe("Teste de Validação - validarData", () => {
  test("Deve retornar false para data passada", () => {
    expect(validarData("2000-01-01")).toBe(false);
  });

  test("Deve retornar true para data futura", () => {
    const futuro = new Date(Date.now() + 1000 * 60 * 60 * 24).toISOString();
    expect(validarData(futuro)).toBe(true);
  });
});
