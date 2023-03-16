"use strict";
exports.__esModule = true;
exports.calcularAreaTriangulo = exports.calcularPorcentagem = exports.calcularExponenciacao = exports.calcularFatorial = void 0;
function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    }
    else {
        return numero * calcularFatorial(numero - 1);
    }
}
exports.calcularFatorial = calcularFatorial;
function calcularExponenciacao(numero, expoente) {
    var resultado = numero;
    for (var i = expoente - 1; i > 0; i--) {
        resultado = resultado * numero;
    }
    return resultado;
}
exports.calcularExponenciacao = calcularExponenciacao;
function calcularPorcentagem(numero, porcentagem) {
    return (porcentagem / 100) * numero;
}
exports.calcularPorcentagem = calcularPorcentagem;
function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
}
exports.calcularAreaTriangulo = calcularAreaTriangulo;
