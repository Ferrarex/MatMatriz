var matrizA = criarMatriz(
    promptInt("Digite a largura da primeira matriz"),
    promptInt("Digite a altura da primeira matriz")
);
imprimirMatriz(matrizA);

var matrizB = criarMatriz(
    promptInt("Digite a largura da segunda matriz"),
    promptInt("Digite a altura da segunda matriz")
);
imprimirMatriz(matrizB);

alert("Agora, digite a operação que deseja fazer");
var repetir;
do {
    repetir = false;
    switch (promptInt("1: Soma, 2: Subtração, 3: Multiplicação")) {
        case 1:
            document.write("A soma de matriz é bem simples, para acontecer, a primeira matriz tem que ter o mesmo tamanho que a segunda, após isso, é somado termo com termo.");
            if (matrizA.length == matrizB.length && matrizA[0].length == matrizB[0].length) {
                var resultado = somar(matrizA, matrizB);
                imprimirMatriz(resultado);
            } else document.write("As matrizes não podem ser somadas (tamanhos diferentes)");
            break;
        case 2:
            document.write("A subtração de matriz é bem simples, para acontecer, a primeira matriz tem que ter o mesmo tamanho que a segunda, após isso, é subtraído termo com termo.");
            if (matrizA.length == matrizB.length && matrizA[0].length == matrizB[0].length) {
                var resultado = subtrair(matrizA, matrizB);
                imprimirMatriz(resultado);
            } else document.write("As matrizes não podem ser somadas (tamanhos diferentes)");
            break;
        case 3:
            document.write("Para multiplicar duas matrizes, as matrizes precisam ter dimensões compatíveis.<br>Se temos uma matriz A<sub>mxn</sub> (m linhas e n colunas) e uma matriz B<sub>nxp</sub>, então a matriz resultante AxB terá dimensões <sub>mxp</sub>.<br><br>O calculo é feito a partir da multiplicação entre as linhas de A as colunas de B, onde os resultados são somados.");
            if (matrizA.length == matrizB[0].length) {
            var resultado = multiplicar(matrizA, matrizB);
            imprimirMatriz(resultado);
            } else document.write("As matrizes não podem ser multiplicadas (largura de A é diferente da altura de B)");
        break;
        default: repetir = true;
    }
} while (repetir);