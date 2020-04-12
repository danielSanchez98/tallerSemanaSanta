let contenedor=document.querySelector('.triqui')
let startBtn=document.getElementById('start')
let titulo=document.getElementById('juego')
let juego;

contenedor.addEventListener('click',clickCelda);
startBtn.addEventListener('click', start);
class Triqui{
    constructor(){
        this.resultados=null;
        this.state='jugando';
        this.player='X';
        this.round=0;
        this.matriz= [
            [null, null, null],
            [null, null, null],
            [null, null, null]

        ];

    }
    input(fila, columna){
        if(this.getState()==='finalizado'){
            return this.getResultados();

        }
        if(this.setInput(fila,columna)){
            if(this.checkGame(fila,columna)){
                this.setState('finalizado')
                this.setResultados({
                    player: this.player,
                    juego:'victoria'
                });
                return this.getResultados();

            }else{
                this.cambiarJugador();

            }
                        
        }
        this.round++;
        if(this.round===9){
            console.log('maximo')
            this.setState('finalizado');
            this.setResultados({
                juego:'empate'

            });
            return this.getResultados()
        }

      return this.getResultados();
    }

    setResultados(resultados){
        this.resultados= resultados;
    }
    getResultados(){
        return this.resultados;
    }
    setState(state){
        this.state=state;
    }
    getState(){
        return this.state
    }

    setInput(fila,columna){
        let matriz=this.matriz;
        if(matriz[fila][columna]=== null){
            matriz[fila][columna]=this.player;
            return true;
        }
            return false;

    }
    checkGame(fila, columna){
        let matriz= this.matriz;
        let player=this.player;
        let checks = [
            checkfila(matriz,fila,player),
            checkColumna(matriz,columna,player),
            checkDiagonal(matriz,player),
            checkAntiDiagonal(matriz,player)

        ]

        return checks.reduce(function(acc,check){
            return acc+check;
        },false)


        function checkfila(matriz,fila,player){
            let row=matriz[fila];
            for(let i=0; i<row.length;i++ ){
                let celda=row[i];
               
                if(celda!== player){
                    return false;
                }

            }
            return true;
        }

        function checkColumna(matriz,columna,player){
            for (let i = 0; i < matriz.length; i++) {
                let celda=matriz[i][columna]
                if(celda!== player){
                    
                    return false;
                }
                
            }
            return true;
        }

        function checkDiagonal(matriz,player){
            for (let i = 0; i < matriz.length; i++) {
                let celda= matriz[i][i];
                if(celda!== player){
                    return false;
                }
                
            }
            return true;
        }
        function checkAntiDiagonal(matriz,player){
            for (let i = 0,j=matriz.length-1; i < matriz.length; i++) {
               let celda=matriz[i][j];
               if(celda!== player){
                return false;
            }

               j--;
                
            }
            return true;
        }
        

    }
    cambiarJugador(){
        this.player=this.player==='X' ? 'O':'X';
        titulo.innerHTML=`Jugando.. ${this.player}`
    }

    output(){
        return this.matriz;
    }
}

function clickCelda(e){
    let datos=e.target.dataset;
    if(datos && datos.fila){
        let resultados= juego.input(datos.fila, datos.columna);
        if(resultados){
            console.log('resultados',resultados)
            if(resultados.juego==='victoria'){
                titulo.innerHTML=`Player ${resultados.player} wins`
            }
            if(resultados.juego==='empate'){
                titulo.innerHTML=`Juego Empatado`;
            }
        }

        show(juego.output())
    }
}
function start(){
    juego=new Triqui();
    show(juego.output());
    titulo.innerHTML=`Jugando.. ${juego.player}`
}

function show(matriz){
    let posiciones= matriz.reduce(function(array,fila,filaIndex){
       
        return array.concat(fila.map(function (columna, columnaIndex) {
            return {
              value: columna,
              id: 'celda-' + filaIndex + '-' + columnaIndex
            };
          }));

    }, []);

    posiciones.forEach(function(celda){
        let elemento=document.getElementById(celda.id);
        elemento.innerHTML=celda.value !== null ? celda.value : '';
        
    });
    
   // console.log('final',posiciones)
}

start();
