const calculadora = require("../models/calculadora");

describe("Calculadora", () => {
  test("2 + 2 should return 4", () => {
    const result = calculadora.somar(2, 2);
    const expected = 4;
    expect(result).toBe(expected);
  });

  test("5 + 100 should return 105", () => {
    const result = calculadora.somar(5, 100);
    const expected = 105;
    expect(result).toBe(expected);
  });

  test("string 'banana' + 100 should return Error", () => {
    const result = calculadora.somar("banana", 100);
    const expected = "Erro";
    expect(result).toBe("Erro");
  });
});
