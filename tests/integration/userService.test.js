const { criarUsuario } = require("../../src/functions/userService");

describe("Teste de Integração - userService", () => {
  test("Deve criar usuário com id calculado", () => {
    const user = criarUsuario("Enzo", 25);
    expect(user).toEqual({ nome: "Enzo", idade: 25, id: 15 });
  });

  test("Deve lançar erro se nome não informado", () => {
    expect(() => criarUsuario("", 25)).toThrow("Nome obrigatório");
  });

  test("Deve lançar erro para idade negativa", () => {
    expect(() => criarUsuario("Enzo", -1)).toThrow("Idade inválida");
  });
});
