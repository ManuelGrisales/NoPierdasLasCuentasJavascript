
var Calculadora = {
  init: function () {

// Se le agrega un valor a los botones para ser usados luego
document.getElementById('0').value = 0;
document.getElementById('1').value = 1;
document.getElementById('2').value = 2;
document.getElementById('3').value = 3;
document.getElementById('4').value = 4;
document.getElementById('5').value = 5;
document.getElementById('6').value = 6;
document.getElementById('7').value = 7;
document.getElementById('8').value = 8;
document.getElementById('9').value = 9;
var Clear = document.getElementById('on');
document.getElementById('mas').value = '+';
document.getElementById('menos').value = '-';
document.getElementById('por').value = '*';
document.getElementById('dividido').value = '/';
document.getElementById('igual').value = '=';
document.getElementById('punto').value = '.';
document.getElementById('sign').value = '-/+';

// Valor maximo de ingreso que es 8, pero inicia desde 0,
// por lo cual es 7
var MaxValue = 7;

  // Se obtienen todas las teclas en una sola variable
 var teclas = document.getElementsByClassName('tecla');

// Ciclo que reduce el tamaño de las teclas al presionarlas
 for (var i = 0; i < teclas.length; i++) {
   teclas[i].addEventListener('mousedown', function () {
     this.setAttribute("style","transform:scale(0.95,0.95)");
   }, false);

   teclas[i].addEventListener('mouseup', function () {
     this.setAttribute("style","transform:scale(1,1)");
   }, false);
 }

//Variable que representa el elemento en el DOM
 var displayElements = document.getElementById('display');
 //Var que representa el display pero en terminos de javascript
 var displayValue = '0';
 //Variable para las operaciones
 var Memoria = '0';
 //Variable que representara que operacion se realizara y resultado
 var operacion ='0';
 var resultado = '0';

//Funcion que actualiza el display al presionar un boton y otras funciones
 var ActualizaDisplay = function (teclas) {
   // Variable que representa el boton presionado con su valor
   var BtnValue = teclas.target.value;

   // Si en la pantalla hay un 0, se quita para ser remplazado por el numero
   // del boton presionado
   if (displayValue === '0') {
     displayValue = '';
   }

   // Se evalua en caso de presionar un boton de operacion
   switch (BtnValue) {
     case '+':
     // Se vacia el Boton para que no aparezca en la pantalla el signo
       BtnValue = '';
       // Se guara el numero actual en la pantalla para futura operacion
       Memoria = displayValue;
       // Se vacia la pantalla para mostrar un nuevo numero ingresado
       // para operar
       displayValue = '';

       // Se asigna el valor de la operacion
       operacion = '1';
       break;

      case '-':
        BtnValue = '';
        Memoria = displayValue;
        displayValue = '';

        operacion = '2';
        break;

      case '*':
        BtnValue = '';
        Memoria = displayValue;
        displayValue = '';

        operacion = '3';
        break;

      case '/':
        BtnValue = '';
        Memoria = displayValue;
        displayValue = '';

        operacion = '4';
        break;

       case '.':
       // Si la pantalla esta vacia se agrega '0.'
         if (displayValue.length == '') {
           displayValue = '0.'
         }

         // Se busca si antes ya hay un punto, si no lo hay
         // No lo asigna
         if (displayValue.indexOf('.') === -1){
           BtnValue = '.';
         }else {
           BtnValue = '';
         }

        // Verifica si el ultimo valor introducido es un punto,
        // si lo es, no agrega otro punto para que no este doble
         var UltimoValor = displayValue.slice(-1);
         if (UltimoValor === '.') {
           BtnValue = '';
         }
         break;

       case '-/+':
       BtnValue = '';

       // Si la pantalla esta vacia, agrega un 0
       if (displayValue === '') {
         displayValue = '0';
       }else {
         // Busca si ya hay un signo '-', si lo hay lo quita
         if ( displayValue.indexOf("-") == 0 ){
            displayValue = displayValue.substring(1);
         } else{
           // Sino lo pone
           displayValue = "-" + displayValue;
         };
       }
         break;

      case '=':
        BtnValue = '';

        // Se evalua que operacion se presiono anteriormente
        switch (operacion) {
          // El valor por defecto de la operacion es 0,
          // Si no se selecciono ninguna y se presiono '=',
          // Lanza un mensaje señalandolo
          case '0':
            resultado = 'Operacion?';
            break;
          case '1':
              resultado = eval(displayValue) + eval(Memoria)

            break;

          case '2':
              resultado = eval(Memoria) - eval(displayValue)

            break;

          case '3':
              resultado = eval(Memoria) * eval(displayValue)

            break;

          case '4':

            // En este caso verifica si se esta dividiendo por 0,
            // Si es asi, lanza un mensaje refiriendoze a ello
            if (displayValue == 0) {
              resultado = 'Enserio?';
            }else {
              resultado = eval(Memoria) / eval(displayValue)
            }

            break;

          default:

        }

        // Evita que haya mas de 8 numeros mostrados en el resultado
          resultado = String(resultado).substr(0,8);

          displayValue = resultado;
        break;

     default:

   }

   // Aqui verifica si el numero actual de caracteres supera 8,
   // si es asi, no permite ingresar mas
   if (displayValue.length > MaxValue) {
     BtnValue = '';
   }

   // Aqui se le asigna el valor del boton al displayValue
   // y luego se senvia al objeto del DOM
    displayValue += BtnValue;
   displayElements.innerText = displayValue;
 }

// ciclo que actualiza el display
 for(var i=0; i < teclas.length; i++) {
 	teclas[i].addEventListener('click', ActualizaDisplay, false);
 }



// Funcion que limpia todo al presionar 'ON/C'
 Clear.onclick = function () {
   Memoria = '0';
   operacion = '0';
   resultado = '0';
   displayValue = '0';
   displayElements.innerHTML = displayValue;
 }

  }
}

// Inicializa todo el codigo
Calculadora.init();
