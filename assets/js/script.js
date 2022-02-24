import Paciente from "./Paciente.js"
import { pacientes } from "./data.js"
//import {helper} from "./Paciente"

// acá estoy instanciando, le estoy pasando los parámetros para crear un nuevo objeto
pacientes.forEach((paciente, i) => {
    const datosPaciente = new Paciente (
        paciente.nombre, 
        paciente.edad, 
        paciente.rut, 
        paciente.diagnostico
    );
    datosPaciente.imprimirDatos("pacientes", i + 1);
});



/*

console.log(paciente1.nombre);

//paciente1.imprimirDatos("nombrePaciente");
//invocar el método Imprimir datos
// instanciaciones
paciente1.imprimirDatos("pacientes");
paciente2.imprimirDatos("pacientes");
*/