const { scheduleAppointment } = require("../../src/functions/schedule");

test("Deve confirmar agendamento quando risco for baixo", () => {
  const result = scheduleAppointment("paciente1", "2025-05-25 15:00", 0.5);
  expect(result).toBe("AGENDAMENTO_CONFIRMADO");
});

test("Deve negar agendamento quando risco for alto", () => {
  const result = scheduleAppointment("paciente2", "2025-05-25 15:00", 0.9);
  expect(result).toBe("AGENDAMENTO_NEGADO_RISCO");
});
