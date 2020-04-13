let letra= document.getElementById('letra');
let boton= document.getElementById('boton');
let start= document.getElementById('start');
let resultado= document.getElementById('resultado');
let intentos=document.getElementById('intentos');
let historial = document.getElementById('historial');
let juego;
class ahorcado{

   constructor(){
       this.listado=['computadora','javascript', 'perro', 'morado','avion','colombia'];
       this.numeroAleatorio=null;
       this.palabra=[];
       this.palabraDisplay=[];
       this.historialLetras=[];
       this.maxIntentos=5;
   }
   start(){
        this.numeroAleatorio =Math.round(Math.random()*(this.listado.length-1)) ;
        this.palabra=this.listado[this.numeroAleatorio];
        this.palabra=this.palabra.toUpperCase();
        this.palabra=this.palabra.split('')
        console.log(this.palabra)
        for (let letra of this.palabra) {
            this.palabraDisplay.push('_');
                    
        }
        
   }

   comprobarLetraUsuario(){
       let letraUsuario = letra.value.toUpperCase();
       letra.value='';
       letra.focus();
       for (const [index,letraAdivinar] of this.palabra.entries()) {
           if(letraUsuario==letraAdivinar){
            this.palabraDisplay[index]=letraAdivinar;
           }
           
       }
       if (!this.palabra.includes(letraUsuario) && letraUsuario!==''){
           let repetido = false;
           if(this.maxIntentos===5){
                this.historialLetras.push(letraUsuario);
                this.maxIntentos -=1;

           }else{
            for (let i = 0; i < this.historialLetras.length; i++) {
                if(this.historialLetras[i]===letraUsuario){
                    repetido=true;
                }
                
            }
            if(!repetido){
                this.historialLetras.push(letraUsuario); 
                this.maxIntentos -=1;
                repetido=false;             

            }

           }
           
           
       }
       this.endGame();
   }
   endGame(){
       if(!this.palabraDisplay.includes('_')){
            alert('Felicitaciones, Has Ganado')
       }
       if(this.maxIntentos===0){
           alert(`Has Perdido, La Palabra era ${this.palabra.join('')}`)

       }
   }
   output(){
        return {
            palabraDisplay:this.palabraDisplay,
            maxIntentos:this.maxIntentos,
            historialLetras:this.historialLetras
        }
   }
}
start.addEventListener('click',iniciarJuego);
boton.addEventListener('click',comprobarLetraUsuario)

function iniciarJuego(){
    juego=new ahorcado();
    juego.start()
    showGame(juego.output());
}
function comprobarLetraUsuario(e){
    e.preventDefault();
    //juego=new ahorcado();
    try {
        juego.comprobarLetraUsuario();
        
        showGame(juego.output());
    } catch (error) {
        console.log(error)
        alert('inicie el juego primero')
        
    }
    
}

function showGame(params){
    resultado.innerHTML=params.palabraDisplay.join(' ');
    intentos.innerHTML=params.maxIntentos;
    historial.innerHTML=params.historialLetras.join(' ');
}