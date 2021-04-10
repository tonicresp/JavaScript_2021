$(document).ready(function(){  
    $("#boton1").click(function() {  
        $("#caja").load("fichero1.html");  
    });  
    $("#boton2").click(function() {  
        $("#caja").load("fichero2.html");  
    });  
    $("#boton3").on("click", function() {  
        $.get("lorem.html", function(contenido) {  
            $("#caja1").append(contenido);  
        });  
    });  
});  