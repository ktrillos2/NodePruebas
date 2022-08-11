const empleados = [
    { id: 1, nombre: "Fernando" },
    { id: 2, nombre: "Linda" },
    { id: 3, nombre: "Karen" },
];
const salarios = [
    { id: 1, salario: 1000 },
    { id: 2, salario: 1500 },
];
const getEmpleado = (id) => {
    return (promesa = new Promise((resolve, reject) => {
        const empleado = empleados.find((e) => e.id === id)?.nombre;

        empleado ? resolve(empleado) : reject(`No Existe Empleado Con Id: ${id}`);
    }));
};

const id = 4;
const getSalario = (id) => {
    return (promesa = new Promise((resolve, reject) => {
        const salario = salarios.find((s) => s.id === id)?.salario;

        salario ? resolve(salario) : reject(`No Existe Salario Con Id: ${id}`);
    }));
};

const getInfoUsuario = async () => {
    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);

        return `el salario del empleado ${empleado} es: ${salario}`;
    } catch (error) {
        throw error;
    }
};

getInfoUsuario()
    .then((res) => {
        console.log("Todo Bien");
        console.log(res);
    })
    .catch((err) => {
        console.log("todo mal");
        console.error(err)
    });
