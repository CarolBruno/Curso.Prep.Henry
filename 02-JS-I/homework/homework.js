// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = 'Bruno';

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 32;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  var devolverString = ('hola' + str)
  return str
  
}
devolverString ('henry') // 'hola henry'

function suma(x, y) {
 var suma = x + y;
 return suma;
  
}
suma (1, 2) // 3

function resta(x, y) {
var resta = x - y;
return resta;
  
}
resta ( 2, 1) // 1


function multiplica(x, y) {
  var multiplica = x * y;
  return multiplica;
  
}
multiplica (5, 5)  // 25

function divide(x, y) {
  var divide = x / y
  return divide
}
divide (80, 2) // 40


function sonIguales(x, y) {
  if (x == y) {
     return true;
  }
  return false;
}
sonIguales; (5, 5) // true

function tienenMismaLongitud(str1, str2) {
  if (str1.length == str2.length) {
     return true;
  }
  return false;
  
}
tienenMismaLongitud ('hola', 'hola') // true

function menosQueNoventa(num) {
  if (num < 90) {
     return true;
  }
  return false;
  
}
menosQueNoventa (100, 90) // false

function mayorQueCincuenta(num) {
  if (num > 50) {
     return true;
  }
  return false;
  
}
mayorQueCincuenta (103 > 50) // true

function obtenerResto(x, y) {
  var resto = x % y
  return resto
  
}
obtenerResto (55, 2) //1

function esPar(num) {
  if (num %2 == 0){
    return true
  }
  return false;
  
}
esPar (3) // false

function esImpar(num) {
  if (num % 2 == 1){
    return true
  }
  return false
  
}
esImpar (3) // true

function elevarAlCuadrado(num) {
  num = Math.pow (num,2)
   return num
  
}
elevarAlCuadrado (4) // 16

function elevarAlCubo(num) {
  num = Math.pow (num,3)
  return num
  
}
elevarAlCubo (3) // 27

function elevar(num, exponent) {
  var elevar = Math.pow (num, exponent)
  
  return elevar

}
elevar (2,2) // 4

function redondearNumero(num) {
  num = Math.round (num) 
  return num
}
redondearNumero (3.8) // 4

function redondearHaciaArriba(num) {
  num = Math.ceil (num)
  return num
  
}
redondearHaciaArriba (4.00004) // 5

function numeroRandom() {
var Random = ( Math.random())
return Random
  
}
numeroRandom () // 1

function esPositivo(numero) {
  if (numero > 0) {
    return 'Es positivo';
  } else if (numero < 0){
    return 'Es negativo';
  } 
   else {
    return false;
   }
   
}
esPositivo (4) // Es positivo

function agregarSimboloExclamacion(str) {
  var str = (str + "!")
  return str
 
}
agregarSimboloExclamacion ('hola') // hola!
 

function combinarNombres(nombre, apellido) {
var nombre = nombre
var apellido = apellido
var combinar = (nombre + " " + apellido)
 return combinar

}
combinarNombres ('soy', 'Bruno') // soy Bruno

function obtenerSaludo(nombre) {
  let saludo = ('Hola' + " " +  nombre + "!")
  return saludo 
  
}
obtenerSaludo ('Martín') // hola Martín!

function obtenerAreaRectangulo(alto, ancho) {
  var area = (alto * ancho)
  return area 
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  
}
obtenerAreaRectangulo (6,5) // 30


function retornarPerimetro(lado){
  var percuadrado = (lado * 4)
return percuadrado
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  
}
retornarPerimetro (2) // 4

function areaDelTriangulo(base, altura){
  var area = (base * altura / 2)
  return area
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí

}
areaDelTriangulo (4,5) // 10

function deEuroAdolar(euro){
  var calcularcambio = ( euro * 1.20 )
  return calcularcambio
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  
}
deEuroAdolar (500) // 600

function esVocal(letra){
  if (letra ==  "a" || letra == "e" || letra == "i" || letra == "o" ||letra == "u") {
    return "Es vocal";
  } 
  else if (letra.length > 1 ){
    return "Dato incorrecto";
  } 
  else ( letra !== "a" || letra !== "e" || letra !== "i" || letra !== "o" || letra !== "u")
    return "Dato incorrecto";
   }

  // (letra.length > 1)
 esVocal ("a") // Es vocal 
  

  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
  




// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
