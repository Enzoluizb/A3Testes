const { schedule } = require("../../src/functions/systemController");

test("Deve confirmar agendamento quando risco for baixo", () => {
  const result = schedule("pacienteSeguro", "2025-05-25 15:00");
  expect(result).toBe("AGENDAMENTO_CONFIRMADO");
});

test("Deve negar agendamento quando risco for alto", () => {
  const result = schedule("pacienteFaltoso", "2025-05-25 15:00");
  expect(result).toBe("AGENDAMENTO_NEGADO_RISCO");
});

test("Deve negar agendamento quando profissional está indisponível", () => {
  const result = schedule("pacienteSeguro", "2025-05-25 15:00", false);
  expect(result).toBe("AGENDAMENTO_NEGADO_INDISPONIVEL");
});
