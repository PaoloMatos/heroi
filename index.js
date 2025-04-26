

let nome  = "Paolo"
let xp = 1000
let nivelHeroi  

if (xp < 1000){
    nivelHeroi = "ferro"
}
else if (xp <= 1001 && xp <= 2000  ){
    nivelHeroi = "Broze"
}
else if (xp <= 2001 && xp <= 5000  ){
    nivelHeroi = "Prata"
}
else if (xp <= 5001 && xp <= 7000  ){
    nivelHeroi = "Ouro"
}
else if (xp <= 7001 && xp <= 8000  ){
    nivelHeroi = "Platina"
}
else if (xp <=8001 && xp <= 9000  ){
    nivelHeroi = "Acendente"
}
else if (xp <= 9001 && xp <= 10000  ){
    nivelHeroi = "Radiante"

}
else{
    nivelHeroi = "Imortal"

}

console.log("O herói de nome " + nome + " está no nível " + nivelHeroi )