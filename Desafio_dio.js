let nomeHeroi = "Kratos"

let experienciaXP = 20000

if (experienciaXP < 1000){
    console.log(nomeHeroi + " é nivel Ferro");
    
} else if (experienciaXP >=1000 && experienciaXP < 2000){
    console.log(nomeHeroi + " é nivel Bronze")

}else if (experienciaXP >=2001 && experienciaXP < 5000){
    console.log(nomeHeroi + " é nivel Prata")

}else if (experienciaXP >=5001 && experienciaXP < 7000){
    console.log(nomeHeroi + " é nivel Ouro")
}else if (experienciaXP >=7001 && experienciaXP < 8000){
    console.log(nomeHeroi + " é nivel Platina")
}else if (experienciaXP >=8001 && experienciaXP < 9000){
    console.log(nomeHeroi + " é nivel Ascendente")
}else if (experienciaXP >=9001 && experienciaXP < 10000){
    console.log(nomeHeroi + " é nivel Imortal")
}else if (experienciaXP >=10001){
    console.log(nomeHeroi + " é nivel Radiante")
}