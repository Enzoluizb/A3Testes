function validarData(data) {
  const agora = new Date();
  const dataTeste = new Date(data);
  if (dataTeste <= agora) return false;
  return true;
}

module.exports = { validarData };
