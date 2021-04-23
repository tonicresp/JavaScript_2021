document.querySelector('#botonjson').addEventListener('click',datosjson);

/*function datosjson(){
    console.log('función');
    const xhttp=new XMLHttpRequest();
    xhttp.open('GET','Catalogo.json',true);
    xhttp.send();
    xhttp.onreadystatechange= function(){
        if(this.readyState==4 && this.status==200){
            //console.log(this.responseText);
           // document.querySelector('#respuesta').innerHTML=this.responseText;
            let datos = JSON.parse(this.responseText)
            //console.log(datos.Titulo);
            let res=document.querySelector('#tabla');
            res.innerHTML='';

            for (let item of datos){
                console.log(item.artista)
                res.innerHTML +=`
                <tr>
                    <td>${item.titulo}</td>
                    <td>${item.artista}</td>
                </tr>
                    `

            }
        }

    }
}*/

function datosjson(){   // con fetch
    console.log('función');
    fetch('Catalogo.json') // Solicitud acceso al archivo
        .then (datos=>datos.json()) //La respuesta se convierte a texto
        .then(datos=> { // la respuesta convertida se utiliza
        console.log(datos)
        let res=document.querySelector('#tabla');
        res.innerHTML=''
   
        for (let item of datos){
            console.log(item.artista)
            res.innerHTML +=`
            <tr>
                <td>${item.titulo}</td>
                <td>${item.artista}</td>
            </tr>
                `
        }
    })
    .catch(error => alert(error.message)); //Si hay un error en el fichero
}


           