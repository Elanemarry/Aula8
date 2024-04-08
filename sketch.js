window.alert('Meu primeiro alerta')
window.confirm('Está gostando do curso?')
window.prompt('Qual seu nome?')

//variaveis e concateção//
var nome = window.prompt('Qual seu nome?')
window.alert('Seja bem vindo')
//window.alert('Seja bem vindo' + nome + '!') //concateção)
aula 8/Att 2/sketch.js
//criando 2 números)
// var n1 = window.prompt)
// var n2 = window.prompt)
//var s = n1+ n2)
//var s = window.alert('A soma dos 2 números é ' + s)

//criando 2 numeros)
var n1 = window.prompt('Digite um número ')
var n2 = window.prompt('Digite outro número ')
var s = n1 + n2
var s = window.alert('A soma dos 2 números é ' + s)

// tratamento de dados)

//prompet por padrão  retorna  uma string)
// + pode ser concateção ou adição, o computador não diferencia)
// (string + string retorna uma string)
// (number + number retorna um numero)

var n1 = Number.parseInt(window.prompt('Digite um número '))
var n2 = Number.parseInt(window.prompt('Digite outro número '))
var s = n1 + n2
var s = window.alert('A soma dos 2 números é ' + s)

//existem 2 tipos de numeros: inteiro9number, parsInt)
//float são numero numero flutuantes, vem depois da virgula
//testar com fluantes 
//var n1 = number-´parseInt (window.prompt('digite um número')
//var n2 = number.parseInt(window.prompt('digite outro)
// var s = n1+n2
//var s = window.alert('A soma dos 2 números é ' + s ) 

//Numeros flutuantes
var n1 = Number.parseFloat(window.prompt('Digite um número '))
var n2 = Number.parseFloat(window.prompt('Digite outro número '))
var s = n1 + n2
var s = window.alert('A soma dos 2 números é '+ s)

//JavaScript decide se é inteiro ou flutuante
var n1 = Number(window.prompt('Digite um número '))
var n2 = Number(window.prompt('Digite outro número '))
var s = n1 + n2
var s = window.alert('A soma dos 2 números é '+ s)







