const { criarUsuario } = require("./userService");
const { validarData } = require("./systemValidator");

function agendarConsulta(nome, idade, data) {
  if (!validarData(data)) throw new Error("Data inválida");
  const usuario = criarUsuario(nome, idade);
  return {
    usuario,
    data,
    status: "agendado",
  };
}

module.exports = { agendarConsulta };
