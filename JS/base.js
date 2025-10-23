 // Shift + Alt + A para comentar linhas

var aluno = "carol";        //string

aluno ={                    //object
    nome: "carol",
    idade: 20 
}

var valorServico = 20.0;    //number 

valorServico = [12.9, 32.5, 15.7]; //array 

var usuario = new Usuario(); //classe 

var primeironumero = 3;      //calculo de numeros com programação estruturada 
var segundonumero = 2; 
console.log(primeironumero + segundonumero);

var numero1 = 3;            //calculo de numeros com funçoes 
var numero2 = 2;
var somarnumero = function(numero1, numero2) {
    return numero1 + numero2;
}
console.log (somarnumero(numero1, numero2)); 

var estados = ["Rio de Janeiro", "São Paulo", "Bahia"]; //declarar array 
console.log(estados[0]);                                //todo array começa com 0
estados[0] = "Goias";
console.log(estados[0]);  


var idade=0;        //forma correta de inicializar as variaveis sem saber o valor
var nome  = null; 
console.log(nome);


var idade = null;       //o null é = 0, entao quando +1 o resultado será 1
console.log( idade + 1 );

const nome="carol";             //declaração de constante precisa ser atribuido valor, e não pode mudar  
console.log( 15 % 2 ); 

let x = 5; //usa 'let' para declarar variavel, nao sendo necessario definir o tipo 

if (x % 2 == 0){ //verifica se o numero é par ou impar
    console.log(x + ", o numero é par");
} else {
    console.log(x + ", o numero é impar");
}
