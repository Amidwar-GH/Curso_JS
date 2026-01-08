//Redondear a siguiente entero en decimal .5
var precio = Math.round(399.53);
document.writeln('Precio redondeado: ', precio);

document.writeln('<br>');

//Redondear sin importar decimales //redondedo hacia arriba
var precio = Math.ceil(299.9);
document.writeln('Precio redondeado: ', precio);

document.writeln('<br>');

//Redondear sin importar decimales // redondeo hacia abajo
var precio = Math.floor(540.9);
document.writeln('Precio redondeado: ', precio);

document.writeln('<br>');

//Calcular el seno del un angulo
var seno = Math.sin(45);
document.writeln('Seno de 45: ', seno);
//para cos, tg etc solo cambiar el "sin" por lo deseado

document.writeln('<br>');

//Calcularel exponencial de un numero
var expo = Math.exp(2);
document.writeln('Exponencial de 2: ', expo);

document.writeln('<br>');

//Calcular logaritmo 
var logaritmo = Math.log(10);
document.writeln('Logaritmo de 10: ', logaritmo);

document.writeln('<br>');

//Calcular el valor absoluto de un numero
var absoluto = Math.abs(-10);
document.writeln('v absoluto de -10: ', absoluto);

document.writeln('<br>');

//Calcular el valor maximo de secuencia
var maximo = Math.max(10,50,600,1,8);
document.writeln('El mayor valor es: ', maximo);

document.writeln('<br>');

var minimo = Math.min(10,50,600,1,8);
document.writeln('El valor minimo es: ', minimo);

document.writeln('<br>');

//Traer en pantalla valor aleatorio
var aleatorio = Math.round(Math.random()*5);
document.writeln('Valor aleatorio: ', aleatorio);

document.writeln('<br>');

//Raiz cuadrada de un numero
var valor = Math.sqrt(81);
document.writeln('La raiz de 81: ', valor);

document.writeln('<br>');

//Calcular exponenete de un numero
var exponente = Math.pow(4,2);
document.writeln('Vlor de 4 a la 2: ', exponente);