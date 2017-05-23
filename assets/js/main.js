var modal = document.getElementById("modal");
var btn1=document.getElementById("btn1").addEventListener("click",mostrar1);
var btn2=document.getElementById("btn2").addEventListener("click",mostrar2);
var btn3=document.getElementById("btn3").addEventListener("click",mostrar3);
var borrar = document.getElementsByClassName("cerrar");
     for (var i = 0; i < borrar.length; i++) {
       borrar[i].addEventListener("click",ocultar);
     }
    
      
    
 function mostrar1 () {
         modal.style.display="block";
         var form3=document.getElementById("form3").style.display="none";
         var form2=document.getElementById("form2").style.display="none";
         var form1=document.getElementById("form1").style.display="block";
  
      }
function mostrar2 () {
         modal.style.display="block";
         var form3=document.getElementById("form3").style.display="none";
         var form2=document.getElementById("form2").style.display="block";
         var form1=document.getElementById("form1").style.display="none";
       }
function mostrar3 () {
         modal.style.display="block";
         var form3=document.getElementById("form3").style.display="block";
         var form2=document.getElementById("form2").style.display="none";
         var form1=document.getElementById("form1").style.display="none";
}


function ocultar () {
    modal.style.display="none";  
}