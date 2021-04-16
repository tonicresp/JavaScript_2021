$(document).ready(function(){  
    $("#boton1").click(function() {  
        $("#caja").load("fichero1.html");  //(url[,data][,complete])
    });  
    $("#boton2").click(function() {  
        $("#caja").load("fichero2.html #par2", function(){
            alert ('te has traido el parrafo2')
        });  
        //le indicamos en data que queremos traer y ejecutamos complete, la funcion Callback
    });  
    $("#boton3").on("click", function() {  //events [,selector][,data]
        $.get("lorem.html", function(contenido) {  // url[,data][,success][,dataType]
            $("#caja1").append(contenido);  
        });  
    });  
});  