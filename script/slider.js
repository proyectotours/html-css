// almacenar sliser en una variable
let slider = $('#slider');
// almacenar botones next prev en variables
let siguiente = $('#btn-next');
let anterior = $('#btn-prev');

//mover última imagen a primer lugar
$('#slider section:last').insertBefore('#slider section:first');
// moverlaprimera imagen con un margen de -100%
slider.css('margin-left', '-' + 100 + '%');

// funcion del boton derecho
function moverD() {
   slider.animate({
      marginLeft: '-' + 200 + '%'
   }, 1000, function() {
      $('#slider section:first').insertAfter('#slider section:last');
      slider.css('margin-left', '-' + 100 + '%');
   });
}

// funcion del botom izquierdo
function moverI() {
   slider.animate({
      marginLeft: 0
   }, 1000, function() {
      $('#slider section:last').insertBefore('#slider section:first');
      slider.css('margin-left', '-' + 100 + '%');
   });
};

siguiente.on('click', function() {
   moverD();
});

anterior.on('click', function() {
   moverI();
});

function autoplay() {
   interval = setInterval(function() {
      moverD();
   }, 5000);
}
// activar el automatico
//autoplay();