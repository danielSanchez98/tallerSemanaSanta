const DIAS_LABORABLES = 4;

class Sistema {   
    
    agregarVenta(cajero,venta){     
        cajero.diaLabor++;   
        cajero.ventas.push(venta)
            

    }

    calcularVentaTotal(cajero){
        let total=0;
        cajero.ventas.forEach(function(venta){
            total+=venta.precio;
        })
        console.log(total)
        return total;
    }

    mostarTotalCajeros(cj1,cj2,cj3,cj4,cj5){
        let elemento='';
        elemento=`
            El cajero ${cj1.nombre} ${cj1.apellido} tuvo un total de ventas de ${cj1.ventasTotal} <br>
            El cajero ${cj2.nombre} ${cj2.apellido} tuvo un total de ventas de ${cj2.ventasTotal} <br>
            El cajero ${cj3.nombre} ${cj3.apellido} tuvo un total de ventas de ${cj3.ventasTotal} <br>
            El cajero ${cj4.nombre} ${cj4.apellido} tuvo un total de ventas de ${cj4.ventasTotal} <br>
            El cajero ${cj5.nombre} ${cj5.apellido} tuvo un total de ventas de ${cj5.ventasTotal} <br>
        `
        return elemento;

    }
    mostrarCajeroMayorVentas(cj1,cj2,cj3,cj4,cj5){
        let datos=[
            {nombre:cj1.nombre, apellido:cj1.apellido, total:cj1.ventasTotal},
            {nombre:cj2.nombre, apellido:cj2.apellido, total:cj2.ventasTotal},
            {nombre:cj3.nombre, apellido:cj3.apellido, total:cj3.ventasTotal},
            {nombre:cj4.nombre, apellido:cj4.apellido, total:cj4.ventasTotal},
            {nombre:cj5.nombre, apellido:cj5.apellido, total:cj5.ventasTotal}

        ];
        console.log('no ordenado',datos);

        datos.sort(function(a,b){
            let x=a['total'],
                y=b['total'];
                return ((x > y) ? -1 : ((x < y) ? 1 : 0));
                


        })
        console.log('ordenado',datos);
            

        return datos;


    }

    ordenarVentaCajero(cajero){
        let datos=[];
        cajero.ventas.forEach(function(venta){
            datos.push({desc:venta.desc,precio:venta.precio,dia:venta.dia})

        })
        console.log('no ordenado',datos);
        datos.sort(function(a,b){
            let x=a['precio'],
                y=b['precio'];
                return ((x > y) ? -1 : ((x < y) ? 1 : 0));
        });
        console.log(' ordenado',datos);
       return datos;

    }
    ordenarMayorVentaEnDia(cj1,cj2,cj3,cj4,cj5){
        let datos=[
            {nombre:cj1.nombre, apellido:cj1.apellido, total:cj1.ventasOrdenadas[0].precio , dia:cj1.ventasOrdenadas[0].dia },
            {nombre:cj2.nombre, apellido:cj2.apellido, total:cj2.ventasOrdenadas[0].precio , dia:cj2.ventasOrdenadas[0].dia},
            {nombre:cj3.nombre, apellido:cj3.apellido, total:cj3.ventasOrdenadas[0].precio , dia:cj3.ventasOrdenadas[0].dia},
            {nombre:cj4.nombre, apellido:cj4.apellido, total:cj4.ventasOrdenadas[0].precio , dia:cj4.ventasOrdenadas[0].dia},
            {nombre:cj5.nombre, apellido:cj5.apellido, total:cj5.ventasOrdenadas[0].precio , dia:cj5.ventasOrdenadas[0].dia}

        ];
        console.log('no ordenado',datos);
        datos.sort(function(a,b){
            let x=a['total'],
                y=b['total'];
                return ((x > y) ? -1 : ((x < y) ? 1 : 0));
        });

        console.log('ordenado',datos);
       return datos;

    }


    ordenarVentasEnUnDia(cj1,cj2,cj3,cj4,cj5, dia){
        let datos=[
            {nombre:cj1.nombre, apellido:cj1.apellido, total:cj1.ventas[dia-1].precio,dia:dia},
            {nombre:cj2.nombre, apellido:cj2.apellido, total:cj2.ventas[dia-1].precio,dia:dia},
            {nombre:cj3.nombre, apellido:cj3.apellido, total:cj3.ventas[dia-1].precio,dia:dia},
            {nombre:cj4.nombre, apellido:cj4.apellido, total:cj4.ventas[dia-1].precio,dia:dia},
            {nombre:cj5.nombre, apellido:cj5.apellido, total:cj5.ventas[dia-1].precio,dia:dia}

        ];
        console.log('no ordenado',datos);
        datos.sort(function(a,b){
            let x=a['total'],
                y=b['total'];
                return ((x > y) ? -1 : ((x < y) ? 1 : 0));
        });
        console.log(' ordenado',datos);
       return datos;

    }

    mostrarCajeroMayorVentasEnDia(datos, resultado){
        let elemento='';

        if(resultado===1){
            elemento=`
                El cajero que obtuvo mas ventas en el transcurso de los 80 dias es: ${datos[0].nombre} ${datos[0].apellido} con un total de: $${datos[0].total} 
            
            `
        }else if(resultado===2){
            elemento=`
                El cajero que obtuvo mas ventas en un dia es: ${datos[0].nombre} ${datos[0].apellido} con un total de: $${datos[0].total} en el dia ${datos[0].dia+1}
            
            `

        }else if(resultado===3){
            elemento=`
                El cajero que obtuvo menos ventas el dia 60 es: ${datos[4].nombre} ${datos[4].apellido} con un total de: $${datos[4].total} en el dia ${datos[4].dia}
            
            `

        }else if(resultado===4){
            elemento=`
                El cajero que obtuvo mas ventas el dia 30 es: ${datos[0].nombre} ${datos[0].apellido} con un total de: $${datos[0].total} en el dia ${datos[0].dia} <br>
                El cajero que obtuvo menos ventas el dia 30 es: ${datos[4].nombre} ${datos[4].apellido} con un total de: $${datos[4].total} en el dia ${datos[4].dia} 

            
            `

        }

        return elemento;


    }

    

}

class Cajero extends Sistema{
    constructor(nombre,apellido,diaLabor,diasTotal,ventasTotal){
        super();
        this.nombre=nombre;
        this.apellido=apellido;
        this.ventas=[];
        this.diaLabor=diaLabor;
        this.diasTotal=diasTotal;
        this.ventasTotal=ventasTotal;
        this.ventasOrdenadas=[];

    }
   

    venta(cajero,venta){
        super.agregarVenta(cajero,venta);
    }
   
    
   
    
    setFinLabor(finalizado){
        if(finalizado){
            this.diasTotal=true 
        }else{
            this.diasTotal=false 
        }
    }


}


const cajero1= new Cajero('pepe', 'pepito',0,false,0);
const cajero2= new Cajero('Ana', 'Anita',0,false,0);
const cajero3= new Cajero('rene', 'renito',0,false,0);
const cajero4= new Cajero('leo', 'leonel',0,false,0);
const cajero5= new Cajero('js', 'javascript',0,false,0);

document.getElementById('cajero1').addEventListener('submit', function(e){
    
    e.preventDefault();
   
    let producto={};
    
    let venta = Number(document.getElementById('precio1').value)
    let descripcion= document.getElementById('desc1').value

    
    producto.desc=descripcion;
    producto.precio=venta;
    producto.dia=cajero1.diaLabor;
    
    if(cajero1.diaLabor<(DIAS_LABORABLES)){  
        if(cajero1.diaLabor===(DIAS_LABORABLES-1)){
            alert('ultimo')
        }     
        cajero1.agregarVenta(cajero1,producto) 
        console.log(cajero1)
    }else{
        cajero1.setFinLabor(true)
        console.log('dias maximos',cajero1.diasTotal);
        
        
        
    }

    
 
    

});



document.getElementById('cajero2').addEventListener('submit', function(e){
    e.preventDefault();
    let producto={};
    
    let venta = Number(document.getElementById('precio2').value)
    let descripcion= document.getElementById('desc2').value

    producto.desc=descripcion;
    producto.precio=venta;
    producto.dia=cajero2.diaLabor;
    

    if(cajero2.diaLabor<(DIAS_LABORABLES)){  
        if(cajero2.diaLabor===(DIAS_LABORABLES-1)){
            alert('ultimo')
        }        
        cajero2.agregarVenta(cajero2,producto) 
        console.log(cajero2)
    }else{
        cajero2.setFinLabor(true)
        console.log('dias maximos',cajero2.diasTotal);
    }

});

document.getElementById('cajero3').addEventListener('submit', function(e){
    e.preventDefault();
    let producto={};
    
    let venta = Number(document.getElementById('precio3').value)
    let descripcion= document.getElementById('desc3').value

    producto.desc=descripcion;
    producto.precio=venta;
    producto.dia=cajero3.diaLabor;
    

    if(cajero3.diaLabor<(DIAS_LABORABLES)){  
        if(cajero3.diaLabor===(DIAS_LABORABLES-1)){
            alert('ultimo')
        }        
        cajero3.agregarVenta(cajero3,producto) 
        console.log(cajero3)
    }else{
        cajero3.setFinLabor(true)
        console.log('dias maximos',cajero3.diasTotal);
    }

});

document.getElementById('cajero4').addEventListener('submit', function(e){
    e.preventDefault();
    let producto={};
    
    let venta = Number(document.getElementById('precio4').value)
    let descripcion= document.getElementById('desc4').value

    producto.desc=descripcion;
    producto.precio=venta;
    producto.dia=cajero4.diaLabor;
    

    if(cajero4.diaLabor<(DIAS_LABORABLES)){  
        if(cajero4.diaLabor===(DIAS_LABORABLES-1)){
            alert('ultimo')
        }        
        cajero4.agregarVenta(cajero4,producto) 
        console.log(cajero4)
    }else{
        cajero4.setFinLabor(true)
        console.log('dias maximos',cajero4.diasTotal);
    }

});

document.getElementById('cajero5').addEventListener('submit', function(e){
    e.preventDefault();
    let producto={};
    
    let venta = Number(document.getElementById('precio5').value)
    let descripcion= document.getElementById('desc5').value

    producto.desc=descripcion;
    producto.precio=venta;
    producto.dia=cajero5.diaLabor;
    

    if(cajero5.diaLabor<(DIAS_LABORABLES)){  
        if(cajero5.diaLabor===(DIAS_LABORABLES-1)){
            alert('ultimo')
        }      
        cajero5.agregarVenta(cajero5,producto) 
        console.log(cajero5)
    }else{
        cajero5.setFinLabor(true)
        console.log('dias maximos',cajero5.diasTotal);
    }

});

// Resultados

document.getElementById('res1').addEventListener('click',function(){
    if(cajero1.diasTotal && cajero2.diasTotal && cajero3.diasTotal && cajero4.diasTotal && cajero5.diasTotal){
        const contenedorResultados= document.querySelector('#resultado');
        console.log(' se ha cumplido');
        let sistema = new Sistema();
        cajero1.ventasTotal=sistema.calcularVentaTotal(cajero1);
        cajero2.ventasTotal=sistema.calcularVentaTotal(cajero2);
        cajero3.ventasTotal=sistema.calcularVentaTotal(cajero3);
        cajero4.ventasTotal=sistema.calcularVentaTotal(cajero4);
        cajero5.ventasTotal=sistema.calcularVentaTotal(cajero5);

        contenedorResultados.innerHTML=sistema.mostarTotalCajeros(cajero1,cajero2,cajero3,cajero4,cajero5)
        console.log(cajero1);
        

    }else{
        console.log('aun no se ha cumplido');
    }
    

});

document.getElementById('res2').addEventListener('click',function(){
    if(cajero1.diasTotal && cajero2.diasTotal && cajero3.diasTotal && cajero4.diasTotal && cajero5.diasTotal){
        let datos=[];
        const contenedorResultados= document.querySelector('#resultado');
        console.log(' se ha cumplido');
        let sistema = new Sistema();
        datos=sistema.mostrarCajeroMayorVentas(cajero1,cajero2,cajero3,cajero4,cajero5)
        contenedorResultados.innerHTML=sistema.mostrarCajeroMayorVentasEnDia(datos,1)
        console.log(cajero1);
    }else{
        console.log('aun no se ha cumplido');
    }
    
})
document.getElementById('res3').addEventListener('click',function(){
    if(cajero1.diasTotal && cajero2.diasTotal && cajero3.diasTotal && cajero4.diasTotal && cajero5.diasTotal){
        let datos=[];
        const contenedorResultados= document.querySelector('#resultado');
        let sistema = new Sistema();
        cajero1.ventasOrdenadas=sistema.ordenarVentaCajero(cajero1);
        cajero2.ventasOrdenadas=sistema.ordenarVentaCajero(cajero2);
        cajero3.ventasOrdenadas=sistema.ordenarVentaCajero(cajero3);
        cajero4.ventasOrdenadas=sistema.ordenarVentaCajero(cajero4);
        cajero5.ventasOrdenadas=sistema.ordenarVentaCajero(cajero5);
        //sistema.mostrarMayorVentaEnDia(cajero1,cajero2,cajero3,cajero4,cajero5)
        datos=sistema.ordenarMayorVentaEnDia(cajero1,cajero2,cajero3,cajero4,cajero5);
        contenedorResultados.innerHTML=sistema.mostrarCajeroMayorVentasEnDia(datos,2)
        console.log(cajero1);

    }else{
        console.log('aun no se ha cumplido');
    }
    
})
document.getElementById('res4').addEventListener('click',function(){
    if(cajero1.diasTotal && cajero2.diasTotal && cajero3.diasTotal && cajero4.diasTotal && cajero5.diasTotal){
        let datos=[];
        const contenedorResultados= document.querySelector('#resultado');
        let sistema = new Sistema();
        datos=sistema.ordenarVentasEnUnDia(cajero1,cajero2,cajero3,cajero4,cajero5,3);
        console.log(datos)
        contenedorResultados.innerHTML=sistema.mostrarCajeroMayorVentasEnDia(datos,3)
        console.log(cajero1);
    }else{
        console.log('aun no se ha cumplido');
    }
    
})
document.getElementById('res5').addEventListener('click',function(){
    if(cajero1.diasTotal && cajero2.diasTotal && cajero3.diasTotal && cajero4.diasTotal && cajero5.diasTotal){
        let datos=[];
        const contenedorResultados= document.querySelector('#resultado');
        let sistema = new Sistema();
        datos=sistema.ordenarVentasEnUnDia(cajero1,cajero2,cajero3,cajero4,cajero5,1);
        console.log(datos)
        contenedorResultados.innerHTML=sistema.mostrarCajeroMayorVentasEnDia(datos,4)
        console.log(cajero1);
    }else{
        console.log('aun no se ha cumplido');
    }
    
})

