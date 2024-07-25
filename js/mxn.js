var matriz = criarMatriz(
    promptInt("Digite a largura da matriz"),
    promptInt("Digite a altura da matriz")
);
imprimirMatriz(matriz);

document.write("A multiplicação de matriz por número é simples, basta multiplicar cada um dos termos da matriz pelo número.");

imprimirMatriz(multInt(matriz, promptInt("Digite o número para multiplicar a matriz")));