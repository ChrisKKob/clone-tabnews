const calculadora = require("../models/calculadora.js");

test("2 + 2 = 4", () => {
  const resultado = calculadora.soma(2, 2);
  expect(resultado).toBe(4);
});
