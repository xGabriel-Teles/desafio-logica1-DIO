let nome = "Folha de Outono";
let exp = 0;
let monstrosDerrotados = 1300;
let rank = ""

for (let contador = 0; contador < monstrosDerrotados; contador ++){
    // console.log("EXP recebida por derrotar o monstro!")
    exp += 100;
}


if (exp <= 1000){
    rank = "Ferro"
} else if (exp > 1000 && exp <= 2000){
    rank = "Bronze"
} else if (exp > 2000 && exp <= 5000){
    rank = "Prata"
} else if (exp > 5000 && exp <= 7000){
    rank = "Ouro"
} else if (exp > 7000 && exp <= 8000){
    rank = "Platina"
} else if (exp > 8000 && exp <= 9000){
    rank = "Ascendente"
} else if (exp > 9000 && exp <= 10000){
    rank = "Imortal"
} else {
    rank = "Radiante"
}

console.log("O jogador " +nome + " derrotou "+ monstrosDerrotados + " monstros e obteve o total de "+ exp + " pontos de experiência, seu rank é: " + rank)