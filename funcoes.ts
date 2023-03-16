export function calcularFatorial(numero: number): number {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        return numero * calcularFatorial(numero - 1);
    }
}

export function calcularExponenciacao(numero: number, expoente: number): number{
    let resultado = numero;
    for(let i = expoente - 1; i > 0; i--){
        resultado = resultado * numero; 
    } 
    return resultado;
}

export function calcularPorcentagem(numero: number, porcentagem: number): number{
    return (porcentagem/100) * numero;
}

export function calcularAreaTriangulo(base: number, altura: number): number{
    return (base * altura)/2;
}