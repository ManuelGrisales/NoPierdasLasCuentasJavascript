
var Calculadora = {
  init: function () {

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

var MaxValue = 7;

 var teclas = document.getElementsByClassName('tecla');

 for (var i = 0; i < teclas.length; i++) {
   teclas[i].addEventListener('mousedown', function () {
     this.style = "-webkit-filter:blur(5px); filter: blur(5px);";
   }, false);
   teclas[i].addEventListener('mouseup', function () {
     this.style = "-webkit-filter:blur(0px); filter: blur(0px);";
   }, false);
 }
// Suma
 // sum.addEventListener('mousedown', function () {
 //   this.style = "width: 89%; height: 99%;";
 // }, false);
 // sum.addEventListener('mouseup', function () {
 //   this.style = "-width: 90%; height: 100%;";
 // }, false);

 var displayElements = document.getElementById('display');
 var displayValue = '0';
 var Memoria = '0';
 var operacion ='0';
 var resultado = '0';

 var ActualizaDisplay = function (teclas) {
   var BtnValue = teclas.target.value;


   if (displayValue === '0') {
     displayValue = '';
   }

   switch (BtnValue) {
     case '+':
       BtnValue = '';
       Memoria = displayValue;
       displayValue = '';

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
         if (displayValue.length == '') {
           displayValue = '0.'
         }

         if (displayValue.indexOf('.') === -1){
           BtnValue = '.';
         }else {
           BtnValue = '';
         }

         var lastChar = displayValue.slice(-1);
         if (lastChar === '.') {
           BtnValue = '';
         }
         break;

       case '-/+':
       BtnValue = '';

       if (displayValue === '') {
         displayValue = '0';
       }else {
         if ( displayValue.indexOf("-") == 0 ){
            displayValue = displayValue.substring(1);
         } else{
           displayValue = "-" + displayValue;
         };
       }
         break;

      case '=':
        BtnValue = '';
        switch (operacion) {
          case '0':
            displayValue = 'Operacion?';
            break;
          case '1':
              displayValue = eval(Memoria) + eval(displayValue)

            break;

          case '2':
              displayValue = eval(Memoria) - eval(displayValue)

            break;

          case '3':
              displayValue = eval(Memoria) * eval(displayValue)

            break;

          case '4':

            if (displayValue == 0) {
              displayValue = Memoria + ' / 0:  ¿Enserio?';
            }else {
              displayValue = eval(Memoria) / eval(displayValue)
            }

            break;

          default:

        }
        break;

     default:

   }

   if (displayValue.length > MaxValue) {
     BtnValue = '';
   }


    displayValue += BtnValue;
   displayElements.innerText = displayValue;
 }

 for(var i=0; i < teclas.length; i++) {
 	teclas[i].addEventListener('click', ActualizaDisplay, false);
 }




 Clear.onclick = function () {
   Memoria = '0';
   operacion = '0';
   resultado = '0';
   displayValue = '0';
   displayElements.innerHTML = displayValue;
 }



  }
}

Calculadora.init();
