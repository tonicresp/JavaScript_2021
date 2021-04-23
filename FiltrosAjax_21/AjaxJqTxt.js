$(document).ready(function(){  
    $("#boton1").click(function() {  
        $("#caja").load("fichero1.html");  //(url[,data][,complete])
    });  
    $("#boton2").click(function() {  
        $.ajax({
            url: "fichero2.html", //obligatoria
            success: function(datos){ //data datos devueltos por el servidor
                $("#caja").html (datos); //devuelve codigo HTML formato texto
                console.log(datos)
                alert("hecho con AJAX");
                           
            }
        })
        //$("#caja").load("fichero2.html #par2", function(){
          //  alert ('te has traido el parrafo2')
        //});  
        //le indicamos en data que queremos traer y ejecutamos complete, la funcion Callback
    });  
    $("#boton3").on("click", function() {  //events [,selector][,data]
        $.get("lorem.html", function(contenido) {  // url[,data][,success][,dataType]
            $("#caja1").append(contenido);  
        });  
    });  
});  