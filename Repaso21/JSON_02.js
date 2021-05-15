document.querySelector('#boton1').addEventListener('click',datosCoches);
/* Función ajax
function datosCoches() {
    if (window.XMLHttpRequest) {
					// Código para IE7+, Firefox, Chrome, Opera, Safari
					httpRequest = new XMLHttpRequest();
				} else {
					// Código para IE6, IE5
					httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
				}
    const xhttp=new XMLHttpRequest();
    xhttp.open('GET','coches.json',true);
    xhttp.send();
    xhttp.onreadystatechange= function(){
        if(this.readyState==4 && this.status==200){
            console.log(this.responseText);
           document.querySelector('#respuesta').innerHTML=this.responseText;
            let datos = JSON.parse(this.responseText)
            let res=document.querySelector('#tabla');
            res.innerHTML='';
            for (let item of datos){
                console.log(item.nombre)
                res.innerHTML +=`
                <tr>
                    <td>${item.nombre}</td>
                    <td>${item.velocidad_maxi}</td>
                </tr>
                    `

            }
        }

    }
}*/
function datosCoches(){   // con fetch
    console.log('función');
    fetch('coches.json') // Solicitud acceso al archivo
        .then (datos=>datos.json()) //La respuesta se convierte a texto
        .then(datos=> { // la respuesta convertida se utiliza
        console.log(datos)
        let res=document.querySelector('#tabla');
        res.innerHTML=''
   
        for (let item of datos){
            console.log(item.nombre)
            res.innerHTML +=`
            <tr>
                <td>${item.nombre}</td>
                <td>${item.velocidad_maxi}</td>
            </tr>
                `
        }
    })
    .catch(error => alert(error.message)); //Si hay un error en el fichero
}

