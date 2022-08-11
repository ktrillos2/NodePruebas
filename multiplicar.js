const { crearArchivo } = require("./required/requerirarchivos");

console.clear();

const [, , arg3] = process.argv

const [,base]=arg3.split("=")

console.log(base);
// const base=3

crearArchivo(base)
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    });
