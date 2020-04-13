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
        datos=sistema.ordenarVentasEnUnDia(cajero1,cajero2,cajero3,cajero4,cajero5,60);
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
        datos=sistema.ordenarVentasEnUnDia(cajero1,cajero2,cajero3,cajero4,cajero5,30);
        console.log(datos)
        contenedorResultados.innerHTML=sistema.mostrarCajeroMayorVentasEnDia(datos,4)
        console.log(cajero1);
    }else{
        console.log('aun no se ha cumplido');
    }
    
})

document.getElementById('aleatorio').addEventListener('click',function(){
    cajero1.ventas=[
        {"desc":"5e93eabcc8a04a1e5c96af6c","precio":242,"dia":0},{"desc":"5e93eabc476c6eee22e0a110","precio":887,"dia":1},{"desc":"5e93eabc15f26d21a93fc433","precio":534,"dia":2},{"desc":"5e93eabc6ce068d433d69d33","precio":191,"dia":3},{"desc":"5e93eabc623dc57da903cfa0","precio":998,"dia":4},{"desc":"5e93eabca098ef306d6b309a","precio":635,"dia":5},{"desc":"5e93eabcc5fb501100792aba","precio":425,"dia":6},{"desc":"5e93eabca1dd52d7f4c50686","precio":603,"dia":7},{"desc":"5e93eabca617cd96e8cd76c6","precio":578,"dia":8},{"desc":"5e93eabc444c904fcd5c664d","precio":271,"dia":9},{"desc":"5e93eabc2bce7d75a517472e","precio":998,"dia":10},{"desc":"5e93eabc838a9aaceb2ecbf3","precio":655,"dia":11},{"desc":"5e93eabc86b8b35fee738648","precio":202,"dia":12},{"desc":"5e93eabc5c394e77aac86871","precio":783,"dia":13},{"desc":"5e93eabc4c14d41c6b7be847","precio":600,"dia":14},{"desc":"5e93eabc2a12afd140a4e101","precio":986,"dia":15},{"desc":"5e93eabca9097fc5e3ddc44a","precio":921,"dia":16},{"desc":"5e93eabca0dec9411a8e23e9","precio":183,"dia":17},{"desc":"5e93eabc30fa222ac1552edd","precio":661,"dia":18},{"desc":"5e93eabcfc0cddd4fade13f0","precio":968,"dia":19},{"desc":"5e93eabcce9432745ec5e08a","precio":678,"dia":20},{"desc":"5e93eabc9cbbef7cd17ffa8c","precio":145,"dia":21},{"desc":"5e93eabcedfcb6738aa8c6d6","precio":348,"dia":22},{"desc":"5e93eabcd4aee9286dc73480","precio":719,"dia":23},{"desc":"5e93eabcc483a8bf7543fa7d","precio":333,"dia":24},{"desc":"5e93eabc127fd7e645c8eeac","precio":710,"dia":25},{"desc":"5e93eabce2fec07f9201d363","precio":642,"dia":26},{"desc":"5e93eabca3ed5975dd00f434","precio":438,"dia":27},{"desc":"5e93eabc9b96a846e8f4c273","precio":867,"dia":28},{"desc":"5e93eabc7d8ede6765fe3955","precio":356,"dia":29},{"desc":"5e93eabc8afa25526280b0ac","precio":437,"dia":30},{"desc":"5e93eabc44ce47ce1e79b54d","precio":312,"dia":31},{"desc":"5e93eabc72e68aa977dba7aa","precio":625,"dia":32},{"desc":"5e93eabc27260297555c8565","precio":306,"dia":33},{"desc":"5e93eabc816038159719a9ec","precio":331,"dia":34},{"desc":"5e93eabcb75aca1a4c9ed3ed","precio":373,"dia":35},{"desc":"5e93eabc804e7927851b7253","precio":762,"dia":36},{"desc":"5e93eabcc06f280936b07c1f","precio":179,"dia":37},{"desc":"5e93eabc1a38fa35a757c6e9","precio":578,"dia":38},{"desc":"5e93eabcf024d1381659fbc8","precio":526,"dia":39},{"desc":"5e93eabcb483a167fe103ea8","precio":724,"dia":40},{"desc":"5e93eabc410151885b40e1a7","precio":166,"dia":41},{"desc":"5e93eabc029f07184375c9f0","precio":371,"dia":42},{"desc":"5e93eabca4209d4912cae907","precio":119,"dia":43},{"desc":"5e93eabc1105d01ad61a4e1b","precio":241,"dia":44},{"desc":"5e93eabc91f83d806ae41896","precio":512,"dia":45},{"desc":"5e93eabcb59a9cc1c2b27402","precio":633,"dia":46},{"desc":"5e93eabcf6441735aa9656e0","precio":610,"dia":47},{"desc":"5e93eabccab92e99f924b075","precio":999,"dia":48},{"desc":"5e93eabc67fb73ecc2e8e627","precio":860,"dia":49},{"desc":"5e93eabce5d688a6cd038b72","precio":618,"dia":50},{"desc":"5e93eabcb23ada230df10fde","precio":271,"dia":51},{"desc":"5e93eabc9c0ed23533829126","precio":636,"dia":52},{"desc":"5e93eabcbb5152d1178cdddc","precio":797,"dia":53},{"desc":"5e93eabc70b3be05b2a900de","precio":273,"dia":54},{"desc":"5e93eabcb0972b70de9f8617","precio":283,"dia":55},{"desc":"5e93eabc159a0ca1d8cf8176","precio":503,"dia":56},{"desc":"5e93eabcb23271a8eccbef50","precio":846,"dia":57},{"desc":"5e93eabc86eab037bab421fb","precio":433,"dia":58},{"desc":"5e93eabc849ef082fc2c324b","precio":553,"dia":59},{"desc":"5e93eabc87f6035c4d51c8c8","precio":687,"dia":60},{"desc":"5e93eabca3560acb4b27249e","precio":492,"dia":61},{"desc":"5e93eabc4d4a113ec2a3f61e","precio":896,"dia":62},{"desc":"5e93eabc0029ecf4e7742e5b","precio":404,"dia":63},{"desc":"5e93eabc80a44c0c7e9e6537","precio":350,"dia":64},{"desc":"5e93eabcfeda913791ad121e","precio":226,"dia":65},{"desc":"5e93eabcf9ff0f511ef32cc7","precio":241,"dia":66},{"desc":"5e93eabc5f35e833fbae02a3","precio":679,"dia":67},{"desc":"5e93eabcd143ddf237e2288d","precio":986,"dia":68},{"desc":"5e93eabc837421b7672e0215","precio":587,"dia":69},{"desc":"5e93eabc26569cc2c236fa16","precio":598,"dia":70},{"desc":"5e93eabc7f6de4a01d3d279c","precio":227,"dia":71},{"desc":"5e93eabcefa95cb9ed4e055d","precio":366,"dia":72},{"desc":"5e93eabca1b3c0e48705582f","precio":955,"dia":73},{"desc":"5e93eabc79973ed7a15ff4ef","precio":836,"dia":74},{"desc":"5e93eabc01eed99fa254b28c","precio":199,"dia":75},{"desc":"5e93eabc189f6d4461bae763","precio":362,"dia":76},{"desc":"5e93eabc7ed117dd4f61326e","precio":944,"dia":77},{"desc":"5e93eabc72ac31b2491c7f3c","precio":859,"dia":78},{"desc":"5e93eabcdb1697ff69baae68","precio":360,"dia":79}
    ];
    cajero2.ventas=[
        {"desc":"5e93eb11fa9e6f4bd4cccd3a","precio":304,"dia":0},{"desc":"5e93eb116d0f6164d82d02c8","precio":107,"dia":1},{"desc":"5e93eb1171d6f5548b178fb7","precio":200,"dia":2},{"desc":"5e93eb11e96c738bd8b39739","precio":749,"dia":3},{"desc":"5e93eb1154279b118f0e51d2","precio":488,"dia":4},{"desc":"5e93eb11edc6cc9140a3aca4","precio":506,"dia":5},{"desc":"5e93eb1158e4da598ca6ac72","precio":480,"dia":6},{"desc":"5e93eb1108f4cac16e0d8955","precio":113,"dia":7},{"desc":"5e93eb114332aec5d64375af","precio":352,"dia":8},{"desc":"5e93eb11d848caca8ca41c83","precio":939,"dia":9},{"desc":"5e93eb11a98e6dc3c5097313","precio":516,"dia":10},{"desc":"5e93eb110c7a217e582f1731","precio":537,"dia":11},{"desc":"5e93eb11d8f920a3737b3a95","precio":578,"dia":12},{"desc":"5e93eb11b3114e1892beb9d1","precio":931,"dia":13},{"desc":"5e93eb11c029289e28512427","precio":524,"dia":14},{"desc":"5e93eb119ee0319983e22918","precio":231,"dia":15},{"desc":"5e93eb11a0b7de55a15ad0d3","precio":600,"dia":16},{"desc":"5e93eb112a425c5f10324dba","precio":889,"dia":17},{"desc":"5e93eb11d1b75cfda2c5204f","precio":573,"dia":18},{"desc":"5e93eb1170d7af18350cc713","precio":722,"dia":19},{"desc":"5e93eb114f629940fd3f7d7c","precio":231,"dia":20},{"desc":"5e93eb11506f3108e55ef1aa","precio":240,"dia":21},{"desc":"5e93eb116073b2ff69d68a29","precio":285,"dia":22},{"desc":"5e93eb113df3960570e2d1d7","precio":225,"dia":23},{"desc":"5e93eb111127ef2a31c0319e","precio":220,"dia":24},{"desc":"5e93eb11abd24cd2891fb54d","precio":932,"dia":25},{"desc":"5e93eb11b7e0599d315aa5f1","precio":692,"dia":26},{"desc":"5e93eb117a23137156b5e466","precio":188,"dia":27},{"desc":"5e93eb11153c201e4900cf84","precio":796,"dia":28},{"desc":"5e93eb118d1c7ec8fb383d8f","precio":562,"dia":29},{"desc":"5e93eb11c7cf633bf3e5348a","precio":965,"dia":30},{"desc":"5e93eb11d6f6700741648c3e","precio":543,"dia":31},{"desc":"5e93eb11cd7b20e00a266dc2","precio":233,"dia":32},{"desc":"5e93eb11e0d0b5503df76479","precio":664,"dia":33},{"desc":"5e93eb116af4b16705b513c4","precio":171,"dia":34},{"desc":"5e93eb1155150e329865232e","precio":680,"dia":35},{"desc":"5e93eb11e4c8fa863c4b1f99","precio":849,"dia":36},{"desc":"5e93eb11181418bcb0405520","precio":187,"dia":37},{"desc":"5e93eb1115225a9721dbc190","precio":282,"dia":38},{"desc":"5e93eb112fd0a6a456ae075b","precio":160,"dia":39},{"desc":"5e93eb11a056e12be4d3c3af","precio":627,"dia":40},{"desc":"5e93eb118fa66756a50dc94d","precio":530,"dia":41},{"desc":"5e93eb112e322e4ecfc77215","precio":180,"dia":42},{"desc":"5e93eb1155d46b0db85d4dea","precio":652,"dia":43},{"desc":"5e93eb11b9aeb7b13669cf1a","precio":311,"dia":44},{"desc":"5e93eb11221c0b7aec5a4ae1","precio":257,"dia":45},{"desc":"5e93eb11d2f6678104d938f1","precio":909,"dia":46},{"desc":"5e93eb115f8286d1e36973ca","precio":887,"dia":47},{"desc":"5e93eb11f7f3c3b062ea5ff6","precio":911,"dia":48},{"desc":"5e93eb11fb651173515f1c9b","precio":252,"dia":49},{"desc":"5e93eb111e44f3ac33c96e6d","precio":734,"dia":50},{"desc":"5e93eb11ce33e519b45b4371","precio":194,"dia":51},{"desc":"5e93eb114be4814483e99653","precio":533,"dia":52},{"desc":"5e93eb11523d1b2259eace30","precio":903,"dia":53},{"desc":"5e93eb11343676953dc2b4ab","precio":684,"dia":54},{"desc":"5e93eb118abf43d1a7a15099","precio":190,"dia":55},{"desc":"5e93eb11d4edd07f9bebd5a8","precio":688,"dia":56},{"desc":"5e93eb11657bcf4f471aab5e","precio":376,"dia":57},{"desc":"5e93eb111d48871394c9cb62","precio":571,"dia":58},{"desc":"5e93eb1105229ee285073f5a","precio":661,"dia":59},{"desc":"5e93eb11fea4d69dcd655413","precio":617,"dia":60},{"desc":"5e93eb11f7069495d66e4432","precio":717,"dia":61},{"desc":"5e93eb1107bae8a6149a9764","precio":619,"dia":62},{"desc":"5e93eb11a2964da4270a0f17","precio":574,"dia":63},{"desc":"5e93eb11b1f692299ac6366d","precio":189,"dia":64},{"desc":"5e93eb11f2668e8aeebb224d","precio":356,"dia":65},{"desc":"5e93eb11f09ddf64c5431afd","precio":358,"dia":66},{"desc":"5e93eb116b5b9a3c84e4c69d","precio":977,"dia":67},{"desc":"5e93eb1187f5bf937be7cbdd","precio":703,"dia":68},{"desc":"5e93eb11a2f75904effb2e1f","precio":882,"dia":69},{"desc":"5e93eb11fa527e11b393db9f","precio":263,"dia":70},{"desc":"5e93eb1134baa13e9cd49644","precio":544,"dia":71},{"desc":"5e93eb11288324b586e567d9","precio":582,"dia":72},{"desc":"5e93eb1112004f232d13c7e2","precio":728,"dia":73},{"desc":"5e93eb11acc83b54e8fffdd0","precio":964,"dia":74},{"desc":"5e93eb119ed99daf86187edc","precio":181,"dia":75},{"desc":"5e93eb11627c7668fd656ee6","precio":204,"dia":76},{"desc":"5e93eb1118aaf34aa043fc8c","precio":794,"dia":77},{"desc":"5e93eb11befa3a8b220adecb","precio":432,"dia":78},{"desc":"5e93eb11d8c54f25614c519c","precio":583,"dia":79}
    ];

    cajero3.ventas=[
        {"desc":"5e93eb5046fcc3efb7b0b862","precio":460,"dia":0},{"desc":"5e93eb5036b2d1f2e338b004","precio":529,"dia":1},{"desc":"5e93eb5037d441069f847937","precio":118,"dia":2},{"desc":"5e93eb50f67987b1c20e110c","precio":573,"dia":3},{"desc":"5e93eb502baca28237c64075","precio":218,"dia":4},{"desc":"5e93eb50d4931f14685a29a5","precio":260,"dia":5},{"desc":"5e93eb5072a543e0c1da4dab","precio":803,"dia":6},{"desc":"5e93eb5075081ed8246b64fd","precio":833,"dia":7},{"desc":"5e93eb50497327e05596e203","precio":859,"dia":8},{"desc":"5e93eb507083e32c03a8b3fd","precio":196,"dia":9},{"desc":"5e93eb50164f42d9714b5a51","precio":182,"dia":10},{"desc":"5e93eb507dcccdac08b8dbe7","precio":478,"dia":11},{"desc":"5e93eb5013254f9c592d6d54","precio":370,"dia":12},{"desc":"5e93eb50bbfcb263a78e0cfc","precio":270,"dia":13},{"desc":"5e93eb5045bfdaa1c72e0933","precio":797,"dia":14},{"desc":"5e93eb50fe18b7c14a4a7118","precio":951,"dia":15},{"desc":"5e93eb5077cbf9b32502f105","precio":255,"dia":16},{"desc":"5e93eb5073bf878ed3397003","precio":364,"dia":17},{"desc":"5e93eb50c15bbf30c573c2ff","precio":598,"dia":18},{"desc":"5e93eb50cb9de5df47b960ff","precio":814,"dia":19},{"desc":"5e93eb505457a973bcb58451","precio":935,"dia":20},{"desc":"5e93eb5029a4e97ce9491942","precio":874,"dia":21},{"desc":"5e93eb50c2f1bfa22a35e255","precio":479,"dia":22},{"desc":"5e93eb507066b529f999e745","precio":235,"dia":23},{"desc":"5e93eb509e1ff6cc17f2a465","precio":881,"dia":24},{"desc":"5e93eb509e6b1dfb9a9fe543","precio":337,"dia":25},{"desc":"5e93eb50c0ca0835b11fb610","precio":446,"dia":26},{"desc":"5e93eb50304f11daf134b37e","precio":676,"dia":27},{"desc":"5e93eb50cd82be618a67e2ec","precio":478,"dia":28},{"desc":"5e93eb50632da5c7243276a1","precio":808,"dia":29},{"desc":"5e93eb50ef92cd59ab351148","precio":630,"dia":30},{"desc":"5e93eb50c7c8bd08b127f455","precio":120,"dia":31},{"desc":"5e93eb507bc1907ebd18f401","precio":907,"dia":32},{"desc":"5e93eb50028690786cb3b90a","precio":634,"dia":33},{"desc":"5e93eb505dc38ca39087733a","precio":161,"dia":34},{"desc":"5e93eb50bc7cd013951c00c4","precio":194,"dia":35},{"desc":"5e93eb500014549f0798daab","precio":218,"dia":36},{"desc":"5e93eb5042a5d8495ad4c380","precio":654,"dia":37},{"desc":"5e93eb5069206a4a2a2c1898","precio":234,"dia":38},{"desc":"5e93eb506a7225517b2fd7d7","precio":951,"dia":39},{"desc":"5e93eb50e20c7b7f382cdc7e","precio":849,"dia":40},{"desc":"5e93eb509682dcddf5af9c43","precio":360,"dia":41},{"desc":"5e93eb50a38331f493512c41","precio":142,"dia":42},{"desc":"5e93eb50184baec6f4850154","precio":798,"dia":43},{"desc":"5e93eb50d9c30761afdf3e3b","precio":514,"dia":44},{"desc":"5e93eb50c79a63517cb662ee","precio":512,"dia":45},{"desc":"5e93eb503d755cf94a531751","precio":186,"dia":46},{"desc":"5e93eb50df1bb3bdaa514744","precio":321,"dia":47},{"desc":"5e93eb50957d9fd499726b7b","precio":439,"dia":48},{"desc":"5e93eb50b5b54afda5b99c3f","precio":566,"dia":49},{"desc":"5e93eb50735efbec02c81445","precio":696,"dia":50},{"desc":"5e93eb50300b087c905bbaca","precio":330,"dia":51},{"desc":"5e93eb504fc8793f07cc13aa","precio":742,"dia":52},{"desc":"5e93eb50b8d6d50a59641d56","precio":632,"dia":53},{"desc":"5e93eb50398aa206acc97ea7","precio":838,"dia":54},{"desc":"5e93eb500f3ab51ac9ed0b87","precio":601,"dia":55},{"desc":"5e93eb50c5087fd937f9ef1d","precio":120,"dia":56},{"desc":"5e93eb503cdafcc808fe2f6d","precio":117,"dia":57},{"desc":"5e93eb503fcb2b32fb7d6982","precio":407,"dia":58},{"desc":"5e93eb505b1756ac540eed67","precio":889,"dia":59},{"desc":"5e93eb50e4bf8ae8c52739c2","precio":769,"dia":60},{"desc":"5e93eb502a5060483e53f38b","precio":117,"dia":61},{"desc":"5e93eb5050eb7fc760a2f9f5","precio":250,"dia":62},{"desc":"5e93eb50ca700820e2e48b78","precio":322,"dia":63},{"desc":"5e93eb50e7e7d29410dec83e","precio":628,"dia":64},{"desc":"5e93eb50a13ce8c09a9c9b0c","precio":285,"dia":65},{"desc":"5e93eb503052ec51ade36c69","precio":734,"dia":66},{"desc":"5e93eb5022cf380d3606c3ac","precio":319,"dia":67},{"desc":"5e93eb50391baeb94abd1a3d","precio":613,"dia":68},{"desc":"5e93eb504ed2c49e41d4f675","precio":284,"dia":69},{"desc":"5e93eb50c9109a24030369e6","precio":168,"dia":70},{"desc":"5e93eb50d4f71a6f110d8e02","precio":444,"dia":71},{"desc":"5e93eb5010dcd7460b0fe744","precio":462,"dia":72},{"desc":"5e93eb50d7021ee9a2343a49","precio":496,"dia":73},{"desc":"5e93eb50067102d08a988123","precio":324,"dia":74},{"desc":"5e93eb501bf55a7427b2c1d9","precio":825,"dia":75},{"desc":"5e93eb502b3e8a6aac2626ae","precio":161,"dia":76},{"desc":"5e93eb50c22b7fd746d07b1c","precio":301,"dia":77},{"desc":"5e93eb501c014c1b3f0d738e","precio":723,"dia":78},{"desc":"5e93eb502be17adf0c474a97","precio":418,"dia":79}
    ];
    cajero4.ventas=[
        {"desc":"5e93eb79fb1f1f6d9466cc98","precio":258,"dia":0},{"desc":"5e93eb7944213b8820e665a7","precio":805,"dia":1},{"desc":"5e93eb79b3c2ec51a70e196e","precio":309,"dia":2},{"desc":"5e93eb792b0fb8c8ba8526e7","precio":427,"dia":3},{"desc":"5e93eb795450e2e94a019052","precio":551,"dia":4},{"desc":"5e93eb79d86e9901261c2ced","precio":905,"dia":5},{"desc":"5e93eb795f9df92852a8e04f","precio":341,"dia":6},{"desc":"5e93eb796e3d0b9330ee11ca","precio":575,"dia":7},{"desc":"5e93eb793e584e5f84e6246c","precio":366,"dia":8},{"desc":"5e93eb79bdf18b8b60f8f4eb","precio":866,"dia":9},{"desc":"5e93eb79e8e5d2fcb2081c6c","precio":256,"dia":10},{"desc":"5e93eb798fc0daca8561b964","precio":143,"dia":11},{"desc":"5e93eb796a56519e178ed21b","precio":867,"dia":12},{"desc":"5e93eb79babf2dfa1d7ac201","precio":181,"dia":13},{"desc":"5e93eb796361effd06207c78","precio":591,"dia":14},{"desc":"5e93eb79574b467bbfe705dc","precio":508,"dia":15},{"desc":"5e93eb79b16a7d8b107119bb","precio":128,"dia":16},{"desc":"5e93eb79712c9138fc50a205","precio":624,"dia":17},{"desc":"5e93eb799fab51cfc7b1d07c","precio":486,"dia":18},{"desc":"5e93eb79e184dc8b760b5dec","precio":785,"dia":19},{"desc":"5e93eb79f2b780826355e678","precio":749,"dia":20},{"desc":"5e93eb79c99ee7840fdea4c9","precio":476,"dia":21},{"desc":"5e93eb79743aa192a2600364","precio":304,"dia":22},{"desc":"5e93eb793220ca6c33a8a84b","precio":550,"dia":23},{"desc":"5e93eb79a4a83aff3ef4d6ea","precio":912,"dia":24},{"desc":"5e93eb7979efda5e0226378d","precio":645,"dia":25},{"desc":"5e93eb7975042c4a5e6d7cd0","precio":663,"dia":26},{"desc":"5e93eb795261fbddf37c2407","precio":168,"dia":27},{"desc":"5e93eb79571d21791b46adb3","precio":819,"dia":28},{"desc":"5e93eb79b6df300f1979e7c9","precio":701,"dia":29},{"desc":"5e93eb797f7d770b2695f237","precio":987,"dia":30},{"desc":"5e93eb79c4849eb7c0430bce","precio":298,"dia":31},{"desc":"5e93eb79cb833a4e8b269126","precio":557,"dia":32},{"desc":"5e93eb7953e83873c76b7ab2","precio":912,"dia":33},{"desc":"5e93eb79b57d55952b13cafa","precio":427,"dia":34},{"desc":"5e93eb79c93e0e5f5e98091f","precio":282,"dia":35},{"desc":"5e93eb79f64ad20620f5db9c","precio":367,"dia":36},{"desc":"5e93eb79bf7a54cc49b495b8","precio":392,"dia":37},{"desc":"5e93eb79c8e8b15e4e1c9919","precio":723,"dia":38},{"desc":"5e93eb79252d92deaebc03c2","precio":800,"dia":39},{"desc":"5e93eb79e00bc4179db18763","precio":462,"dia":40},{"desc":"5e93eb7950c7676948e23e1f","precio":138,"dia":41},{"desc":"5e93eb79982f60bd0cff2b1b","precio":826,"dia":42},{"desc":"5e93eb79969f13793f623f5c","precio":979,"dia":43},{"desc":"5e93eb790bbc8e698183f303","precio":881,"dia":44},{"desc":"5e93eb79b8549adbee26ccbd","precio":839,"dia":45},{"desc":"5e93eb79a4e7c0aa6704008c","precio":811,"dia":46},{"desc":"5e93eb793bf0baa6af8e77ec","precio":359,"dia":47},{"desc":"5e93eb7963b8ae8c610003eb","precio":696,"dia":48},{"desc":"5e93eb79919bcd68598fe255","precio":428,"dia":49},{"desc":"5e93eb79cd7e15568c430f70","precio":645,"dia":50},{"desc":"5e93eb792560654b0ead5750","precio":710,"dia":51},{"desc":"5e93eb79810d0ff5aae90e3e","precio":253,"dia":52},{"desc":"5e93eb79e10aef9264f7808b","precio":305,"dia":53},{"desc":"5e93eb7940f36f3bc23878fe","precio":769,"dia":54},{"desc":"5e93eb796dd8497ee93559ca","precio":902,"dia":55},{"desc":"5e93eb79bd56fbaa2b315804","precio":623,"dia":56},{"desc":"5e93eb79adb5a2ecc3426786","precio":387,"dia":57},{"desc":"5e93eb79e158b3bdaff0acd9","precio":555,"dia":58},{"desc":"5e93eb79d779ac56861f51a4","precio":444,"dia":59},{"desc":"5e93eb7911a6e84d50934f04","precio":213,"dia":60},{"desc":"5e93eb792667909ad0908c64","precio":759,"dia":61},{"desc":"5e93eb795646cf8a54e028d5","precio":966,"dia":62},{"desc":"5e93eb79d0d5304ef375b997","precio":392,"dia":63},{"desc":"5e93eb794c625f99436a67a5","precio":684,"dia":64},{"desc":"5e93eb7904f41bf1f0b3171d","precio":709,"dia":65},{"desc":"5e93eb7983e83ddff1d4c774","precio":153,"dia":66},{"desc":"5e93eb7930b228e5e619e8c2","precio":526,"dia":67},{"desc":"5e93eb7941dd1ab6cf1442c5","precio":249,"dia":68},{"desc":"5e93eb7906da014712a52f26","precio":231,"dia":69},{"desc":"5e93eb792fe985a975c126d9","precio":342,"dia":70},{"desc":"5e93eb790016d62a83b8ae6d","precio":381,"dia":71},{"desc":"5e93eb79056f97be04f1fa07","precio":445,"dia":72},{"desc":"5e93eb79cc9cb42fe2c5286b","precio":227,"dia":73},{"desc":"5e93eb79012b072bf6a892c5","precio":833,"dia":74},{"desc":"5e93eb79b9ba02768ccb1432","precio":968,"dia":75},{"desc":"5e93eb79f97844701740a97b","precio":854,"dia":76},{"desc":"5e93eb798180c13a0c60e01d","precio":869,"dia":77},{"desc":"5e93eb79855f6e89785e3506","precio":338,"dia":78},{"desc":"5e93eb79fcd7a90e7e265349","precio":348,"dia":79}

    ];
    cajero5.ventas=[
        {"desc":"5e93eb906c79b9b7b49b2dac","precio":343,"dia":0},{"desc":"5e93eb90e8fb45bc5a702143","precio":970,"dia":1},{"desc":"5e93eb908c7ead84f903b614","precio":189,"dia":2},{"desc":"5e93eb900668980c430bbb76","precio":838,"dia":3},{"desc":"5e93eb903bb0a3dbadbb1fb8","precio":167,"dia":4},{"desc":"5e93eb90bbee6502c1f197c7","precio":441,"dia":5},{"desc":"5e93eb90437f57b0699bd91f","precio":502,"dia":6},{"desc":"5e93eb9031cd79ad436d29a6","precio":169,"dia":7},{"desc":"5e93eb90e819331ad78d1d3a","precio":246,"dia":8},{"desc":"5e93eb901966909e7939f396","precio":281,"dia":9},{"desc":"5e93eb90aa11e86647b175e4","precio":538,"dia":10},{"desc":"5e93eb90f15d01384350330d","precio":793,"dia":11},{"desc":"5e93eb907818293ce2e2e7c9","precio":814,"dia":12},{"desc":"5e93eb90dec96016fb7afeaa","precio":561,"dia":13},{"desc":"5e93eb901667a05472df2187","precio":790,"dia":14},{"desc":"5e93eb9004594f72909b6ab3","precio":422,"dia":15},{"desc":"5e93eb907e98d51f2c9d0962","precio":876,"dia":16},{"desc":"5e93eb90b5da33b3c1f2a960","precio":447,"dia":17},{"desc":"5e93eb90270c5ac8a6ff325f","precio":894,"dia":18},{"desc":"5e93eb90be5d7c538ec9014b","precio":769,"dia":19},{"desc":"5e93eb90227699b42f723ec4","precio":478,"dia":20},{"desc":"5e93eb90cd52ddd6cae7c96e","precio":844,"dia":21},{"desc":"5e93eb90dda65c38100ef3f2","precio":699,"dia":22},{"desc":"5e93eb9088f6b0ef9af12390","precio":977,"dia":23},{"desc":"5e93eb906250c1c500bbb194","precio":739,"dia":24},{"desc":"5e93eb90e813cd286760d028","precio":682,"dia":25},{"desc":"5e93eb90fe3aeb994c9384c3","precio":425,"dia":26},{"desc":"5e93eb90007a5d91d7c637d1","precio":433,"dia":27},{"desc":"5e93eb90fdf2b57016074428","precio":812,"dia":28},{"desc":"5e93eb90ad839a7779803171","precio":905,"dia":29},{"desc":"5e93eb90692337fd88604f34","precio":335,"dia":30},{"desc":"5e93eb90ae620edbcdcd15d6","precio":550,"dia":31},{"desc":"5e93eb901db39ac80f9fb1f2","precio":112,"dia":32},{"desc":"5e93eb90068782908c1a31e3","precio":974,"dia":33},{"desc":"5e93eb90ea2de9d196f4e085","precio":942,"dia":34},{"desc":"5e93eb90f1d9b38eab388ad8","precio":535,"dia":35},{"desc":"5e93eb904fe7500ec4eaa56f","precio":660,"dia":36},{"desc":"5e93eb901e29d01de0697f5b","precio":792,"dia":37},{"desc":"5e93eb90d9068696068fc01e","precio":1000,"dia":38},{"desc":"5e93eb90a56e4eb6493576a7","precio":775,"dia":39},{"desc":"5e93eb90eec27a47c88f3964","precio":798,"dia":40},{"desc":"5e93eb9046a89521c0051f20","precio":516,"dia":41},{"desc":"5e93eb90237cf4c9c12bf47b","precio":611,"dia":42},{"desc":"5e93eb90f2ee6b5467f7e446","precio":578,"dia":43},{"desc":"5e93eb9024400dd60a8052ad","precio":772,"dia":44},{"desc":"5e93eb90c5c58bd53611b0b0","precio":113,"dia":45},{"desc":"5e93eb90d9873b02e3e9d7f6","precio":212,"dia":46},{"desc":"5e93eb90bb5b3cd46c954dae","precio":312,"dia":47},{"desc":"5e93eb904b9bcf3b0f744974","precio":260,"dia":48},{"desc":"5e93eb9045e432b5b729d287","precio":262,"dia":49},{"desc":"5e93eb90c3007762ac34916f","precio":922,"dia":50},{"desc":"5e93eb90cb2be65b2b1b61b7","precio":744,"dia":51},{"desc":"5e93eb9079845fb28ad45bc9","precio":396,"dia":52},{"desc":"5e93eb903ef540ac4f1032e5","precio":596,"dia":53},{"desc":"5e93eb9084b8e11267137dce","precio":617,"dia":54},{"desc":"5e93eb9038a4030d8c10e1e2","precio":247,"dia":55},{"desc":"5e93eb90f7a9d41d56549d57","precio":423,"dia":56},{"desc":"5e93eb9025439415dfe2581a","precio":857,"dia":57},{"desc":"5e93eb90d9b105114d3803f2","precio":643,"dia":58},{"desc":"5e93eb902265691cec407138","precio":718,"dia":59},{"desc":"5e93eb905996aa69e06bc848","precio":562,"dia":60},{"desc":"5e93eb909c7a066a0cf7c99c","precio":535,"dia":61},{"desc":"5e93eb9094cf0f945140d5cd","precio":369,"dia":62},{"desc":"5e93eb90ade501e232d61eb5","precio":797,"dia":63},{"desc":"5e93eb90027f2ddbcd550216","precio":104,"dia":64},{"desc":"5e93eb908da0ef783a705e05","precio":639,"dia":65},{"desc":"5e93eb9036cd424addfc5aa2","precio":958,"dia":66},{"desc":"5e93eb90b180998e8eda7679","precio":663,"dia":67},{"desc":"5e93eb90824992d2141a2b29","precio":638,"dia":68},{"desc":"5e93eb90a85a919d81e891f4","precio":678,"dia":69},{"desc":"5e93eb90e11267b4d8ce9f7e","precio":458,"dia":70},{"desc":"5e93eb90afd6bd646f2a721c","precio":335,"dia":71},{"desc":"5e93eb906c39108bdfca3e65","precio":566,"dia":72},{"desc":"5e93eb90d0f981f44f90c029","precio":519,"dia":73},{"desc":"5e93eb907a66d06b26e6820a","precio":774,"dia":74},{"desc":"5e93eb90f6b19e0d643cccd5","precio":803,"dia":75},{"desc":"5e93eb90e6edbf1f67a9092b","precio":326,"dia":76},{"desc":"5e93eb90aa39a375ee5a542e","precio":344,"dia":77},{"desc":"5e93eb90ef2e70f56d67ac46","precio":452,"dia":78},{"desc":"5e93eb9033eaccf445cdf1d8","precio":370,"dia":79}

    ];

    cajero1.diasTotal=true;
    cajero2.diasTotal=true;
    cajero3.diasTotal=true;
    cajero4.diasTotal=true;
    cajero5.diasTotal=true;

    
})

