 function tocaSomPom () {
    document.querySelector('#som_recla_pom').play();
 }


 const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while(contador < 9) {
    listaDeTeclas[0].onclick = tocaSomPom;
   
}
