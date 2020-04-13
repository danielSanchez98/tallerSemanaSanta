const romanos= ['I',"V",'X',"L", "C","D", "M"];
let numeroUser = document.getElementById('number');
let salidaNumero=document.getElementById('num');
let salidaRomano=document.getElementById('rom');

document.querySelector('form').addEventListener('submit',function(e){
    e.preventDefault();
    let numeroU=numeroUser.value;
    let longitud= numeroU.length;
    let unidad,decena,centena;
    let romano='';
    let numero=Number(numeroU);
    
    centena = parseInt(numero/100);
    decena= parseInt((numero-(100*parseInt(numero/100)))/10);
    unidad = (numero-(100*parseInt(numero/100)))%10
    
    //console.log(`centenas ${centena} decenas ${parseInt(decena)} unidades ${unidad} long ${longitud}`);

    for (let i = longitud; i >= 0; i--) {
        /* 
            caso 0: Convertira el valor de la unidad a numero romano
            caso 1: Convertira el valor de la decena a numero romano
            caso 2: Convertira el valor de la centena a numero romano
        
        */

        switch (i) {
            case 0:
                numero=unidad;
                romano+=convertirARomano(numero,0);
                console.log( 'u',numero);
                break;
                
                
            case 1:
                numero=decena;
                romano+=convertirARomano(numero,1);
                console.log( 'decena',numero,);
                break;
                
            case 3:
                numero=centena;
                romano+=convertirARomano(numero,2);
                console.log( 'c',numero);

                break;
                
        
            default:
                break;
        }
        
    }

    console.log('romano es', romano)
    salidaNumero.innerHTML=`<strong>${numeroU}</strong>`;
    salidaRomano.innerHTML=`<strong>${romano}</strong>`;


    

    
})


function convertirARomano(numero, rango){
    let romano='';

    if(numero<10){
        
        
        if(numero===4){

            switch (rango) {
                case 0:
                    romano=romanos[0]+romanos[1];                    
                    break;
                case 1:
                    romano=romanos[2]+romanos[3];
                    break;
                case 2:
                    romano=romanos[4]+romanos[5];
                    break;
            
                default:
                    break;
            }
            

        }else if(numero===9){
            switch (rango) {
                case 0:
                    romano=romanos[0]+romanos[2]                    
                    break;
                case 1:
                    romano=romanos[2]+romanos[4];
                    break;
                case 2:
                    romano=romanos[4]+romanos[6];
                    break;
            
                default:
                    break;
            }
            
            

        }else{

            if(numero<4){
                for (let i = 0; i < numero; i++) {
                    switch (rango) {
                        case 0:
                            romano+=romanos[0]                   
                            break;
                        case 1:
                            romano+=romanos[2];
                            break;
                        case 2:
                            romano+=romanos[4];
                            break;
                    
                        default:
                            break;
                    }
                    
                    
                    
                }
                console.log(romano)

            }else if(numero>4){
                switch (rango) {
                    case 0:
                        romano=romanos[1];                 
                        break;
                    case 1:
                        romano=romanos[3];
                        break;
                    case 2:
                        romano=romanos[5];
                        break;
                
                    default:
                        break;
                }
                
                for (let i = 0; i < numero-5; i++) {                    
                    switch (rango) {
                        case 0:
                            romano+=romanos[0]                   
                            break;
                        case 1:
                            romano+=romanos[2];
                            break;
                        case 2:
                            romano+=romanos[4];
                            break;
                    
                        default:
                            break;
                    }
                    
                }
                console.log(romano)

            }

        }

    }else{
        romano=romanos[6];
    }

    return romano;

}
