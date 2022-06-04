const duplicar = (valor)=> {
    if( typeof valor === "number") {
        let resultado = valor * 2;
        console.log(resultado);
        return resultado;
    }

    throw new Error('El valor debe ser un número');
}

try {
    duplicar("Dos2");
    console.log('Funciona correctamente');
} catch (error) {
    console.error(`${error}`);
} 