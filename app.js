var izquierda = document.getElementById("Izquierda");
var derecha=document.getElementById("Derecha");
var Si=document.getElementById("Si");
var contenedor=document.getElementById("Contenedor");

izquierda.addEventListener('click', mov);

function mov() {
   if (izquierda.classList.contains('Normal')) {
   
      izquierda.classList.replace("Normal", "mov1");
   }else if (izquierda.classList.contains('mov1')) {
   
      izquierda.classList.replace("mov1", "mov2");
   }else if (izquierda.classList.contains('mov2')) {
      izquierda.classList.replace("mov2", "Normal");
   }
}

derecha.addEventListener('click', function si() {
    contenedor.style.display='none';
    Si.style.display='block';
  
});