var peticion, url, json;
function realizaPeticionAjax(){ 
    /*peticion =new XMLHttpRequest();
    url = 'viajes.php?'; 
    parametros='username='+usuario.value+'&password='+clave.value;
    peticion.open('POST', url); // primero la URL 
    peticion.onreadystatechange = procesaRespuesta;
    peticion.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    peticion.setRequestHeader("Content-length", parametros.length); 
    peticion.send(parametros); // ahora se envian los parametros
    return false;*/

    const peticion=new XMLHttpRequest();
   //parametros='username='+usuario.value+'&password='+clave.value;
    peticion.open('GET','viajes.json',true);
    peticion.onreadystatechange=procesaRespuesta;
    //peticion.setRequestHeader('Content-type', 'application/json');
    peticion.send();
    function procesaRespuesta() {
        if(this.readyState==4 && this.status==200){
            let json = JSON.parse(this.responseText)
            formLogin.style.display ="none"; 
            contenedorViajes.style.display ="block"; 
            if (json.usuario !== null){
                console.log(json.usuario)
              usuario=document.createElement("p")
              usuario.appendChild(document.createTextNode(json.usuario.nombre +" "+
              json.usuario.apellidos));
              nombreUsr.appendChild(usuario); 
            bienvenida.style.display = "block"; //para el nombre de usuario
                if (json.viajes !==null){ 
                    texto.style.display ="block"; // ... he visitado
                    for (var i=0; i < json.viajes.length; i++){ // para mostrar CADA VIAJE 
                        viaje=document.createElement("section");
                        foto=document.createElement("img");
                        foto.src=json.viajes[i].foto;
                        foto.alt=json.viajes[i].destino;
                        viaje.appendChild(foto);
                        datos=document.createElement("article");
                        destino=document.createElement("h2")
                        destino.appendChild(document.createTextNode(json.viajes[i].destino))
                        datos.appendChild(destino);
                        descripcion=document.createElement("p")
                    descripcion.appendChild(document.createTextNode(json.viajes[i].descripcion))
                    datos.appendChild(descripcion)
                    puntuacion=document.createElement("div");
                    for (var j=0; j<5; j++){ 
                        estrellas=document.createElement("img");
                        if (j < json.viajes[i].puntuacion){
                            estrellas.src='estrellas.png'
                            estrellas.alt='OK'
                        }else{
                            estrellas.src='estrellasVacias.png';
                            estrellas.alt='KO'
                           }
                        puntuacion.appendChild(estrellas)
                    }
                        datos.appendChild(puntuacion);
                        viaje.appendChild(datos);
                        contenedorViajes.appendChild(viaje);
                    }
                }
                else {
                    bienvenida.style.display ="block";
                    mensaje=document.createElement("h2");
                    mensaje.appendChild(document.createTextNode("No hay viajes"));
                    contenedorViajes.className +="casoAyB";
                    contenedorViajes.appendChild(mensaje);
                }
            }else{
                mensaje=document.createElement("h2");
                contenedorViajes.className +="casosAyB";
                mensaje.appendChild(document.createTextNode("Usuario no registrado"))
                contenedorViajes.appendChild(mensaje);
            }  
        }
        console.log(peticion.readyState)
    } return false;     
}


function iniciar(){
    bienvenida=document.getElementById('bienvenida');
    texto=document.getElementById('texto');

    nombreUsr = document.getElementById('nombreUsr');
    formLogin = document.getElementById('login');
    contenedorViajes = document.getElementById('contenedorViajes');
    formLogin.onsubmit =realizaPeticionAjax;
}
window.addEventListener('load',iniciar, false);      