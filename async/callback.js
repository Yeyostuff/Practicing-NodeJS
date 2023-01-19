function soyAsincrona(){
    console.log('Hola, soy una función asíncrona');
    setTimeout(function(){
        console.log('Estoy siendo asíncrona');
    }, 1000)
}

console.log('Iniciando Proceso');
soyAsincrona();

console.log('Terminando Proceso');