var v1=0,v2=0,res, texto='';

function captura1(){
    v1=document.getElementById("v1").value
    v1=Number.parseFloat(v1)
    if(isNaN(v1))
         v1=0
    
   
}
function captura2(){
    v2=document.getElementById("v2").value
    v2=Number.parseFloat(v2)
    res=document.getElementById('resultado')
    if(isNaN(v2))
        v2=0
    
}

function suma(){
    texto="el resultado de la suma :"+(v1+v2)
    res.textContent=texto
}
function resta(){
    texto="el resultado de la resta es :"+(v1-v2)
    res.textContent=texto
}
function multiplicacion(){
    texto="el resultado de la multiplicacion es :"+(v1*v2)
    res.textContent=texto
}
function divicion(){
    if( v2==0){
        texto="no se puede dividir entre 0:"
    }
    else{
        texto="el resultado de la divicion es :"+(v1/v2)
    }
    
    res.textContent=texto
}