var modal = document.getElementById("modal");
var btn1=document.getElementById("btn1").addEventListener("click",mostrar1);
var btn2=document.getElementById("btn2").addEventListener("click",mostrar2);
var btn3=document.getElementById("btn3").addEventListener("click",mostrar3);
  /*var btn4=document.getElementById("btn4").addEventListener("click",mostrar4);
  var btn5=document.getElementById("btn5").addEventListener("click",mostrar5);
  var btn6=document.getElementById("btn6").addEventListener("click",mostrar6);*/
  var borrar = document.getElementsByClassName("cerrar")[0];

      borrar.addEventListener("click",ocultar);
      
    
 function mostrar1 () {
         modal.style.display="block";
         var textoM=document.getElementById("textoM3").style.display="none";
         var textoM=document.getElementById("textoM2").style.display="none";
         var textoM=document.getElementById("textoM1").style.display="block";
         var text=document.getElementById("que-pasa").style.position="relative";
      }
function mostrar2 () {
         modal.style.display="block";
         var textoM=document.getElementById("textoM1").style.display="none";
         var textoM=document.getElementById("textoM2").style.display="block";
         var text=document.getElementById("masP").style.position="relative";
      }
function mostrar3 () {
         modal.style.display="block";
         var textoM=document.getElementById("textoM1").style.display="none";
         var textoM=document.getElementById("textoM2").style.display="none";
         var textoM=document.getElementById("textoM3").style.display="block";
         var text=document.getElementById("masBella").style.position="relative";
      }


function ocultar () {
    modal.style.display="none";
   
