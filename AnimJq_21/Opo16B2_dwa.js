$(document).ready(function () {
    $("header img").css({width: '0px', height: '0px', opacity: '0,0'});
    /* estas tres propiedades CSS iniciales para la imagen de la cabecera también se 
    pueden encontrar en código CSS (obligatoriamente en alguno de los dos sitios)*/
    $("header img").animate({width: '212px', height: '150px', opacity:'1.0'}, 3000);
});