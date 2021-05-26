/* Este programa nos ayuda a que el usuario pueda introducir a un arreglo palabras
las cuales estas van siendo contabilizadas, que a su misma vez van siendo moestradas
y concadenadas a las demás palabras, esto es posible mediante los arreglos*/ 
var palabra = [];
document.getElementById('listado').value = palabra;

function agregar(){
    var palabras = document.getElementById('palabras').value; 
    palabra.push(palabras);

    document.getElementById('contador').value = palabra.length;

    document.getElementById('listado').value = palabra;

    document.getElementById('palabras').value = "";
    document.getElementById('palabras').focus();

}
/* Este programa permite contar la cantidad de números que se almacenan en un arreglo
esto es posible mediante la función split que contabiliza cada carácter, colocamos
una sentencia if para hacer mención de la longitud del codigo que sería de 12 digitos*/
function leeTexto(){
    var mensaje = document.getElementById("mensaje").value;
    var arr = mensaje.split("");
    //alert("El número total de palabras es: "+ arr.length);
    if(arr.length<=12){
        alert("Código Aceptado, cantidad de números escritos: "+arr.length);
    }else{
        alert("El límite de números superado, cantidad de números escritos: "+arr.length);
    }
}

function displayDate(){
    document.getElementById("demo").innerHTML = Date();
}
/*En este programa mediante los eventos logramos hacer los eventos de presiónar
los botones que realizaran un cambio de estado en este caso representando una
pequeña calculadora con 4 botones disponibles para ofrecer el resultado de la 
operación  */
function calcula(operacion){ 
    var operando1 = document.calc.operando1.value 
    var operando2 = document.calc.operando2.value 
    var result = eval(operando1 + operacion + operando2) 
    document.calc.resultado.value = result 
} 

var btn = document.getElementById('btn'),
    caja = document.getElementById('caja'),
    contador=0;

/*En este programa se aprecia un evento muy facilmente, cada vez que movemos
el mouse cerca del boton designado nos envia un alert para mostrarnos un mensaje
del mismo modo una función alert para mostrar un pequeño mensaje de reservas */
function clic(){
    alert("Ganaste 30% de descuento en reservación");
}

function reservado(){
    alert("Reserva hecha exitosamente");
}

/*Para este programa se simula el pago de la reserva mediante la atracción
del costto en un array  y un objeto para devolver la salida */
var saldo = 0;

function depositarDinero() {
  var deposito = parseInt(document.getElementsByName("deposito")[0].value);
  saldo += deposito;
  alert("Has pagado: $"+ deposito + " pesos");
}

/*En este programa simulamos una animación ya vista en clase, pero ahora
se mueve para un lado diferente del contenedor haciendo una simulación de
carga de pagina */
var id = null;
function myMove(){
    var box = document.getElementById('box');
    var pos = 0;
    clearInterval(id);
    clearInterval(iddos);

    var id = setInterval(move, 10);
    var iddos = setInterval(move, 10);

    function move(){
        if(pos == 150){
            clearInterval(id);
        }else{
            pos ++;
            //box.style.top = pos + "px";
            box.style.top = pos + "px";
            box.style.right = pos + "px";
        }
    }

}
/* En este programa nos hacemos la idea de poder manipular las etiquetas
que mediante un evento de boton, se pueda llevar a cabo el cambio de color
del fondo asignando colores hex para el cambio */
function generarNuevoColor(){
	var simbolos, color;
	simbolos = "0123456789ABCDEF";
	color = "#";

	for(var i = 0; i < 6; i++){
		color = color + simbolos[Math.floor(Math.random() * 16)];
	}

	document.body.style.background = color;
	document.getElementById("hexadecimal").innerHTML = color;
	document.getElementById("text").innerHTML = "Copiar Color";
}

function copiarAlPortapapeles(hexadecimal) {
	var aux = document.createElement("input");
	aux.setAttribute("value", document.getElementById(hexadecimal).innerHTML);
	document.body.appendChild(aux);
	aux.select();
	document.execCommand("copy");
	document.body.removeChild(aux);
	document.getElementById("text").innerHTML = "Copiado!";
}

/*Una de las animaciones más usadas es la del reloj, que gracias al
javascript podemos obtener la hora exacta y real de nuestro equipo
para poder visualizar el usuario, además de un diseño en HTML Y CCS */
let html = document.getElementById("tiempo");

setInterval(function(){
	tiempo = new Date();

	horas = tiempo.getHours();
	minutos = tiempo.getMinutes();
	segundos = tiempo.getSeconds();

	//evitar los 0 o numeros individuales
	if(horas<10)
		horas = "0"+horas;
	if(minutos<10)
		minutos = "0"+minutos;
	if(segundos<10)
		segundos = "0"+segundos;

	html.innerHTML = horas+" : "+minutos+" : "+segundos;
},1000);

