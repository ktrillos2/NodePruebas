const fs = require("fs");

const crearArchivo = async(base = 5) => {
    try {
        
        console.log("tabla del:", base);
    
        let salida = await '';
        
        for (let i = 0; i <= 10; i++) { 
    
    
            salida += `${base} * ${i} = ${base*i}\n` ;
        }
        console.log(salida);
    
        fs.writeFileSync(`tabla-${base}.txt`, salida);
    
        return `tabla-${base}.txt creado`
    } catch (error) {
        return error;
    }
}

module.exports = {
    crearArchivo
}