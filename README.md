# Sistema Inteligente de Autoagendamento

Este repositório contém o protótipo de um sistema inteligente de autoagendamento para clínicas de saúde, com foco em qualidade de software, testes automatizados com Jest e integração contínua utilizando GitHub Actions.

## 📌 Descrição do Projeto

Desenvolvido como parte da A3 da disciplina de Gestão e Qualidade de Software, este sistema visa reduzir faltas em agendamentos, melhorar a alocação de recursos clínicos e otimizar a comunicação com pacientes. A solução se concentra na camada de lógica e testes, utilizando práticas modernas de desenvolvimento e engenharia de software.

## 🧪 Tecnologias Utilizadas

- **Node.js** (v18)
- **Jest** – framework de testes
- **GitHub Actions** – integração contínua
- **Git** – controle de versão

## 🛠 Estrutura do Projeto

```
A3TESTES/
├── .github/
│   └── workflows/
│       └── nodejs-ci.yml
├── node_modules/
├── src/
│   └── functions/
└── tests/
    ├── integration/
    ├── system/
    ├── unit/
    └── validation/
```

## 🚀 Execução dos Testes

Para rodar os testes localmente:

```bash
npm install
npm test
```

Os testes são executados automaticamente via GitHub Actions a cada push ou pull request na branch `main`.

## ✅ Pipeline de CI/CD

```yaml
name: Node.js CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build-and-test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3
      - name: Use Node.js
        uses: actions/setup-node@v3
        with:
          node-version: "18"
      - name: Instala dependências
        run: npm ci
      - name: Roda testes com Jest
        run: npx jest
```

## 📈 Métricas Definidas

- Precisão da IA: ≥ 85%
- Tempo médio de resposta: ≤ 2s
- Cobertura de testes: ≥ 80%
- Retrabalho por sprint: ≤ 10%
- Lead time para entrega: ≤ 7 dias úteis

## 📂 Requisitos

- Respeito à LGPD
- Interface acessível
- API RESTful
- Algoritmo de predição de ausências
- Testes com TDD

## 📄 Documentação

O relatório técnico completo com fundamentação teórica, metodologia, estudo de caso, testes, métricas e análise de resultados está disponível neste repositório na pasta `/docs`.

## 🧩 Exemplos de Testes

```javascript
test("não permite agendamento se profissional estiver indisponível", () => {
  const resultado = verificarDisponibilidade(profissional, horario);
  expect(resultado).toBe(false);
});
```
