document.querySelector('#botontxt').addEventListener('click',datostxt);

/*function datostxt(){ // Con XMLHttpRequest()
    console.log('función'); // Con get se envia de forma visible
    const rhttp=new XMLHttpRequest();//instanciar uno obejot XMLHttpRequest
    rhttp.open('GET','Archivo.txt',true); //metodo,url,async[,user][,psw]
    rhttp.send();//envia solicitud al servidor con Get
    rhttp.onreadystatechange= function(){   //respuesta de estado
        if(this.readyState==4 && this.status==200){ // 4 que ha finalizado y 200 correcto
            console.log(this.responseText); //propiedad responseText con la respuesta
            document.querySelector('#respuesta').innerHTML=this.responseText;

        }
    }
}*/
function datostxt(){   // con fetch
    console.log('función');
    fetch('Archivo.txt') // Solicitud acceso al archivo
    .then (datos=>datos.text()) //La respuesta se convierte a texto
    .then(datos=> { // la respuesta convertida se utiliza
        console.log(datos)
        respuesta.innerHTML=`${datos}`
    })
    
}