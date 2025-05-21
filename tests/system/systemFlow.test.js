const { agendarConsulta } = require("../../src/functions/systemFlow");

describe("Teste de Sistema - agendarConsulta", () => {
  test("Deve agendar consulta corretamente", () => {
    const dataFutura = new Date(Date.now() + 86400000).toISOString();
    const resultado = agendarConsulta("Enzo", 30, dataFutura);

    expect(resultado.status).toBe("agendado");
    expect(resultado.usuario.nome).toBe("Enzo");
    expect(resultado.data).toBe(dataFutura);
  });

  test("Deve lançar erro para data inválida", () => {
    expect(() => agendarConsulta("Enzo", 30, "2000-01-01")).toThrow(
      "Data inválida"
    );
  });
});
