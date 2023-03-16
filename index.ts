let opcao: number;
import { calcularAreaTriangulo, calcularExponenciacao, calcularFatorial, calcularPorcentagem } from "./funcoes";
do{

    let teclado = require('prompt-sync')();

    console.log("1 - Fatorial");
    console.log("2 - Exponenciação");
    console.log("3 - Porcentagem");
    console.log("4 - Area do triângulo");
    console.log("5 - Sair");
    opcao = teclado();
    
    if(opcao < 1 || opcao > 5){
        console.log("Valor incorreto");
    }

    if(opcao == 1){
        console.log('Informe o numero: ');
        let numero = teclado();
        let resultado = calcularFatorial(numero);

        console.log(`o fatorial de ${numero} é ${resultado}`);
    }
    if(opcao == 2){
        console.log('Informe o numero');
        let numero = teclado();
        console.log('Informe o expoente');
        let expoente = teclado();

        let resultado = calcularExponenciacao(numero, expoente);

        console.log(`O resultado da exponenciação é: ${resultado}`);
    }

    if(opcao == 3){
        console.log('Informe o numero: ');
        let numero = teclado();
        console.log('informe o percentual que deseja calcular: ')
        let porcentagem = teclado();

        let resultado = calcularPorcentagem(numero, porcentagem);

        console.log(`${porcentagem}% de ${numero} é: ${resultado}`);
    }

    if(opcao == 4){
        console.log('informe o valor da base: ');
        let base = teclado();
        console.log('Informe o valor da altura: ');
        let altura = teclado();

        let resultado = calcularAreaTriangulo(base, altura);

        console.log(`A área deste triângulo é: ${resultado}`);
    }
}while(opcao != 5);