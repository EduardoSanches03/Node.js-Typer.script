"use strict";
exports.__esModule = true;
var opcao;
var funcoes_1 = require("./funcoes");
do {
    var teclado = require('prompt-sync')();
    console.log("1 - Fatorial");
    console.log("2 - Exponenciação");
    console.log("3 - Porcentagem");
    console.log("4 - Area do triângulo");
    console.log("5 - Sair");
    opcao = teclado();
    if (opcao < 1 || opcao > 5) {
        console.log("Valor incorreto");
    }
    if (opcao == 1) {
        console.log('Informe o numero: ');
        var numero = teclado();
        var resultado = (0, funcoes_1.calcularFatorial)(numero);
        console.log("o fatorial de ".concat(numero, " \u00E9 ").concat(resultado));
    }
    if (opcao == 2) {
        console.log('Informe o numero');
        var numero = teclado();
        console.log('Informe o expoente');
        var expoente = teclado();
        var resultado = (0, funcoes_1.calcularExponenciacao)(numero, expoente);
        console.log("O resultado da exponencia\u00E7\u00E3o \u00E9: ".concat(resultado));
    }
    if (opcao == 3) {
        console.log('Informe o numero: ');
        var numero = teclado();
        console.log('informe o percentual que deseja calcular: ');
        var porcentagem = teclado();
        var resultado = (0, funcoes_1.calcularPorcentagem)(numero, porcentagem);
        console.log("".concat(porcentagem, "% de ").concat(numero, " \u00E9: ").concat(resultado));
    }
    if (opcao == 4) {
        console.log('informe o valor da base: ');
        var base = teclado();
        console.log('Informe o valor da altura: ');
        var altura = teclado();
        var resultado = (0, funcoes_1.calcularAreaTriangulo)(base, altura);
        console.log("A \u00E1rea deste tri\u00E2ngulo \u00E9: ".concat(resultado));
    }
} while (opcao != 5);
