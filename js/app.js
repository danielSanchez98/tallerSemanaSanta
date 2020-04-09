const contenedor= document.querySelector('.contenedor-secundario');
const taller1=document.getElementById('taller1');
const taller2=document.getElementById('taller2');

document.getElementById('parte1').addEventListener('click',function(){
    contenedor.style.display="block";
    taller1.style.display="block";
    taller2.style.display="none";

})

document.getElementById('parte2').addEventListener('click',function(){
    contenedor.style.display="block";
    taller2.style.display="block";
    taller1.style.display="none";

})