// CADASTRO

let dataAtual = new Date() 
let dataEvento = new Date (2022,9,10)
let listaParticipantes = ["Lucas","João","Maria"];
let idadeParticipante = 19

if (dataEvento>dataAtual) {
    console.log("Agendar Evento")

    } else 

{console.log("Data invalida")

}
console.log("------------------------------------")

if (idadeParticipante >= 18) {
    console.log("Entrada Permitida")
    
}
else {
    console.log("Idade inválida")

}
console.log("--------------------------------------")

console.log(listaParticipantes)

console.log("------------------------------------")

if (listaParticipantes.length <100) {
    console.log("Permitir cadastro")

}
else {
   console.log("Cadastro excedido")

}
