function inteiroR(min, max) {
    return Math.floor(Math.floor(Math.random() * (max - min + 1)) + min)
}

function criarMatriz(largura, altura) {
    var matriz = [];
    for (var i = 0; i < altura; i++) {
        matriz[i] = [];
        for (var j = 0; j < largura; j++) {
            matriz[i][j] = inteiroR(-10, 10);
        }
    }
    return matriz;
}

function imprimirMatriz(matriz) {
    document.write("<table>");
    for (var i = 0; i < matriz.length; i++) {
        document.write("<tr>");
        for (var j = 0; j < matriz[i].length; j++) {
            document.write("<td>" + matriz[i][j] + "</td>");
        }
        document.write("</tr>");
    }
    document.write("</table>");
}

function promptInt(texto) {
    var val;
    do {
        val = parseInt(prompt(texto));
    } while (val == null || isNaN(val));
    return val;
}

function multInt(matriz, numero) {
    var m = [];
    for (var i = 0; i < matriz.length; i++) {
        m[i] = [];
        for (var j = 0; j < matriz[i].length; j++) {
            m[i][j] = matriz[i][j] * numero;
        }
    }

    return m;
}

function somar(matrizA, matrizB) {
    var m = [];
    for (var i = 0; i < matrizA.length; i++) {
        m[i] = [];
        for (var j = 0; j < matrizA[i].length; j++) {
            m[i][j] = matrizA[i][j] + matrizB[i][j];
        }
    }
    return m;
}

function subtrair(matrizA, matrizB) {
    return somar(matrizA, multInt(matrizB, -1));
}

function multiplicar(matrizA, matrizB) {
    var m = [];
    for (var i = 0; i < matrizA.length; i++) {
        m[i] = [];
        for (var j = 0; j < matrizB[0].length; j++) {
            m[i][j] = 0;
            for (var k = 0; k < matrizA[0].length; k++) {
                m[i][j] += matrizA[i][k] * matrizB[k][j];
            }
        }
    }
    return m;
}