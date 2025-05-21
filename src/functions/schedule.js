function scheduleAppointment(patientId, datetime, risk) {
  if (risk > 0.7) {
    return "AGENDAMENTO_NEGADO_RISCO";
  }
  return "AGENDAMENTO_CONFIRMADO";
}

module.exports = { scheduleAppointment };
