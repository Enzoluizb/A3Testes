function criarUsuario(nome, idade) {
  if (!nome) throw new Error("Nome obrigatório");
  if (idade < 0) throw new Error("Idade inválida");
  return { nome, idade, id: 15 };
}

module.exports = { criarUsuario };
