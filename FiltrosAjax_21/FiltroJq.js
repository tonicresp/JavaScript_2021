$(document).ready(function(){
    $('#boton1').click(function(){
        $("tr:first").css("background", "#9cf");
    }); 
    $('#boton2').on('click',function(){
        $("td:last").css("background", "#9cf"); 
    });  
    $('#boton3').on('click',function(){
        $("tr:even").css("background", "#9cf");
    });  
    $('#boton4').on('click',function(){
        $("td:eq(2)").css("background", "#9cf");
    }); 
    $('#boton5').on('click',function(){
        $("td:gt(1)").css("background", "#9cf");
    });   
    });  