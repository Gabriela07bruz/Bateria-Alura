 function tocaSomPom () {
    document.querySelector('#som_recla_pom').play();
 }


 const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas[0].onclick = tocaSomPom;
