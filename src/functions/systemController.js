function schedule(pacienteId, horario, profissionalDisponivel = true) {
  if (!profissionalDisponivel) {
    return "AGENDAMENTO_NEGADO_INDISPONIVEL";
  }

  // Simula lógica de risco
  const risco = pacienteId === "pacienteFaltoso" ? 0.9 : 0.1;

  if (risco > 0.8) {
    return "AGENDAMENTO_NEGADO_RISCO";
  }

  return "AGENDAMENTO_CONFIRMADO";
}

module.exports = { schedule };
