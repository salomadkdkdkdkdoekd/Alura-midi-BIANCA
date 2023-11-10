function tocaSom (seletorAudio) {
    document.querySelector(seletorAudio).play();
    if (elemento != null&& elemento.localName === 'audio'){
        elemento.play();
    }
else{
     console.log('Elemento não encontrado ou seletor inválido');

}
}
listaDeTeclas = document.querySelectorAll('.tecla');
let contador = 0;


for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];  
    const idAudio = `#som_${instrumento}`; //TEMPLATE STRING
 
    tecla.onclick = function () {
        tocaSom(idAudio);

    }

    tecla.onkeydown = function(evento) {

    if(evento.code === 'Space'|| evento.code === 'Enter'){
        tecla.classList.add('ativa');

    }

   
        





    }

    }

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    
    }

