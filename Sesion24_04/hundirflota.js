var flota;
var matriz = new Array(10); 
for(var i=0; i<10; i++) {
    matriz[i] =new Array(10); 
} 
var portaviones=new Array(4);
var destructor= new Array(3); 
var lancha=new Array(2);
var x,y,d,c,p,l,des; 
var partida=0;
var conta = 40;
var puntuacion = 0; 
var vida_total=0;
var vacio;
var jugar=true; 
var vida_destructor = 0;
var vida_portaviones = 0; 
var vida_lancha = 0;
var arrayunitario =new Array(4);
var barcos =new Array(4,3,2);

function infobar(){
    var xhr= new XMLHttpRequest(); 
    xhr.onreadystatechange = function(){
        if(this.readyState==4 && this.status==200){ 
            flota=JSON.parse(xhr.responseText);
            crear_tabla();
    }
}
    xhr.open('GET','barcos.json', true); 
    xhr.send();
} 
function crear_tabla(){
    vida_lancha = flota.barcos[0].disparos_vida;
    vida_destructor = flota.barcos[1].disparos_vida;
    vida_portaviones = flota.barcos[2].disparos_vida; 
    jugar=true;
    conta =40; 
    puntuacion=0; 
    tabla = "<table>";
    for(var i=0;i<10;i++) { 
      tabla += "<tr>";
      for(var j=0;j < 10;j++){ 
      tabla += "<td style='background-color:blue;'onclick='pulsar(this)' id='"+i+j+"'></td>";     
      } 
      tabla +="</tr>";
} 
tabla+= "</table>";
document.getElementById("tablero").innerHTML=tabla; 
//document.getElementById("tablero").innerHTML=`<table><td>"hola"</td></table>`

barco= "<p>Puntuacion:<span id='puntuacion'>"+ puntuacion +"</span></p><p>Disparos disponibles:<span id='disparosdisp'>"+conta+"</span></p>"; 

    for(var q=0;q < 3;q++){
        barco +="<div id='info" + q+ "'class='info'><div id='campos'>Nombre:"+flota.barcos[q].nombre +
    "<br/>Tipo de barco:"+ flota.barcos[q].tipo_barco +
    "<br/>Disparos de vida:<span id='vida" + q +
    "'>" + flota.barcos[q].disparos_vida + "</span>/"+ flota.barcos[q].disparos_vida +"<br/>";
        barco+="Puntos+ "+ flota.barcos[q].puntos + "</div><div id='imagen'><img src='" +
        flota.barcos[q].imagen_inicial +"'id='" + flota.barcos[q].nombre +"'><br/></div></div>";
};

document.getElementById("barcos_cargados").innerHTML=barco;
agua_barcos(); 
}

function agua_barcos(){
    for(var i = 0; i < 10; i++) { 
        for (var j = 0; j < 10; j++) { 
            matriz[i][j]="lime";
        }
    }

    p = 0;
    des= 0; 
    I =0;
    vacio=true; 
    generar_barcos(); 
}

function generar_barcos(){ 
    c = 0; //lndica posiciones del array barcos
do{ 
        y= Math.floor(Math.random() * 10); //vertical 
        x= Math.floor(Math.random() * 10); //horizontal 
        d= Math.floor(Math.random() * 2); //Decide s1 sera vertical u horizontal 0 vertical I hoizontal 
//Genera los barcos aleatorios en la posicion y x, la variable d selecciona si es horizontal o vertical 
    if(d == 0){ 
        if((y+barcos[c])>= 10){
            for(i=0;i<barcos[c];i++){ 
                arrayunitario[i]=y + ""+x;
                y-=1;
            }
        }else{
            for(i=0;i<barcos[c];i++){ 
                arrayunitario[i]=y + ""+x;
                y+=1;  
            }
        }
        } else{
            if((x+barcos[c])>= 10){
                for(i=0;i<barcos[c];i++){ 
                    arrayunitario[i]=y + ""+x;
                    x-=1;
                }
            }else{
                for(i=0;i<barcos[c];i++){ 
                    arrayunitario[i]=y + ""+x;
                    x+=1;  
                }
            }
        }    
     
var repe = true; 
//Si hay alguna posicion ya ocupada no almacenara el nuevo barco y creara; otras posicicnes
for (var i = 0; i < barcos[c];i++) { 
    var sep = arrayunitario[i].split('');
    if(matriz[sep[0]][sep[1]]!="lime"){
        repe=false;
    }
}
console.log(barcos[c])
console.log(arrayunitario)
// Si todo es correcto generara los 3 barcos que tenemos
if (repe==true){
    for (var i=0; i<barcos[c];i++){
        var sepa=arrayunitario[i].split('');
        matriz[sepa[0]][sepa[1]]="red" ; 
        if(barcos[c]==4){
            portaviones[i]=sepa[0]+""+sepa[1]; 
            }else if(barcos[c] == 3){
            destructor[i]=sepa[0]+"" + sepa[1]; 
            }else if(barcos[c] == 2){
            lancha[i]=sepa[0] + "" + sepa[1]; 
            } 
        }
        arrayunitario =new Array("","","","");
        c++; 
    }
    }while(c < 3);
    console.log(c+""+repe+barcos[c])
} 

function pulsar(color){
    if(jugar==true ){ 
        if(color.style.backgroundColor=="blue"){ //para que no cuente disparos en celdas ya clicadas
            conta-= 1;
        } 
        document.getElementById("disparosdisp").innerHTMl=conta;
        if(conta > 0){ 
            var res= color.id.split('');
            color.style.backgroundColor = matriz[res[0]][res[l]]; 
            var tocado=true;
            if(p !=1 ) { //Cada una pertenece a un npo de barco 
                for(var i=0; i<4; i++) {
                   if(portaviones[i]==res[0]+""+res[1]){
                    portaviones[i]="tocado";
                    vida_portaviones-=1;
                    document.getElementById("vida2").innerHTML=vida_portaviones; // cambia la vida total del barco
                   }
                   if(portaviones[i]!="tocado"){
                       tocado=false;
                   }  
                }   
                if(tocado==true){ 
                    document.getElementById("Rocinante").sr=flota.barcos[2].imagen_hundir; //cambia la imagen 
                    document.getElementById("info2").style.backgroundCoJor="red";
                    document.getElementById("info2").style.textDecoration="line-through"; 
                    puntuacion +=flota.barcos[2].puntos;//
                    document.getElementById("puntuacion").innerHTML=puntuacion; 
                    window.alert("Hundido");
                    p=1; 
                    partida = partida + 1 ;//suma l a la partida total, al llegar a 3 sera que has hundido todos
                }
            }
            tocado=true;
            if(des!=1){
                for(var i=0;i<3;i++){
                    if(destructor[i]==res[0] + "" + res[l]){
                        destructor[i]="tocado"; 
                        vida_destructor-= 1; 
                        document.getElementByld("vidal").innerHTML=vida_destructor; 
                    }
                    if(destructor[i]!="tocado"){ 
                        tocado=false;
                    }
                }     
                if(tocado==true){
                    document.getEJementByld("CrossFire").src=flota.barcos[l].imagen_hundir; 
                    document.getEJementByld("infol").style.backgroundColor="red";
                    document.getElementByld("infol").style.textDecoration="line-through"; 
                    puntuacion +=flota.barcos[l].puntos;
                    document.getElementByld("puntuacion").innerHTML=puntuacion; 
                    window.alert("Hundido");
                    des=1
                    partida=partida + 1
                }    
            }
            tocado=true;
            if(I!=1){ 
                for (var i = 0; i < 2; i++) {
                    if(lancha[i]==res[0]+""+res[1]){
                        lancha[i]="tocado";
                        vida_lancha -= 1;
                        document.getElementById("vida0").innerHTML=vida_lancha;
                    } 
                    if (lancha[i]!="tocado"){
                        tocado=false;
                    }
                }
                if(tocado==true){
                    document.getElementById("Lanzadera").src=flota.barcos[0].imagen_hundir;
                    document.getElementById("info0").style.backgroundColor="red"; 
                    document.getElememById("info0").style.textDecoration="line-through"; 
                    puntuacion +=flota.barcos[0].puntos;
                    document.getElementByid("puntuacion").innerHTML=puntuacion; 
                    window.alert("Hundida");
                    I=1;
                    partida = partida + l ;  
                }
            }
            if(partida==3){
                window.alert("Victoria");
                jugar=false;
            }
        }else{
            jugar=false; // Cuando pierdes enseñar barcos
            window.alert("No tienes mas disparos, has perdido");
            for (var i=0;i<10;i++){
                for(var j=0;j<10;j++){
                    document.getElementById(i+""+j).style.backgroundColor=matriz[i][j];
                }
            }
        }
    }
}
