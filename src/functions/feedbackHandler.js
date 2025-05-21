function ajustarFrequencia(feedback) {
  if (feedback === "ruim") return 1;
  if (feedback === "regular") return 2;
  return 3;
}

module.exports = { ajustarFrequencia };
