"use strict";

class Paciente {
  constructor(nombre, edad, rut, diagnostico) {
    this._nombre = () => nombre;

    this._edad = () => edad;

    this._rut = () => rut;

    this._diagnostico = () => diagnostico;
  }

  get nombre() {
    return this._nombre();
  }

  get edad() {
    return this._edad();
  }

  get rut() {
    return this._rut();
  }

  get diagnostico() {
    return this._diagnostico();
  }

  imprimirDatos(id, i) {
    const data = document.getElementById(id);
    data.innerHTML += " \n            <tr>\n                <th scope=\"row\">".concat(i, "</th>\n                <th>").concat(this.nombre, "</th>\n                <th>").concat(this.edad, "</th>\n                <th>").concat(this.rut, "</th>\n                <th>").concat(this.diagnostico, "</th>\n            </tr>\n        ");
  }

}

const pacientes = [{
  nombre: "Jess González",
  edad: 32,
  rut: "18.522.901-7",
  diagnostico: "Problemas para decidir qué ponerse para salir"
}, {
  nombre: "Islebi Pinto",
  edad: 31,
  rut: "17.737.695-7",
  diagnostico: "Cansancio terminal"
}, {
  nombre: "Marco",
  edad: 14,
  rut: "22.737.901-7",
  diagnostico: "Embarazo adolescente"
}, {
  nombre: "Molotov",
  edad: 1,
  rut: "22.522.695-9",
  diagnostico: "Hiperactividad"
}]; // acá estoy instanciando, le estoy pasando los parámetros para crear un nuevo objeto

pacientes.forEach((paciente, i) => {
  const datosPaciente = new Paciente(paciente.nombre, paciente.edad, paciente.rut, paciente.diagnostico);
  datosPaciente.imprimirDatos("pacientes", i + 1);
});
/*
const pacientes = [
    {
      nombre: "Franco Urra",
      edad: 47,
      rut: "12345678-9",
      diagnostico: "Hipertensión Arterial",
    },
    {
      nombre: "Matías Mesa",
      edad: 27,
      rut: "12345678-9",
      diagnostico: "Diabetes Mellitus 1",
    },
    {
      nombre: "Enrique Flores",
      edad: 37,
      rut: "12345678-9",
      diagnostico: "Disfunción de la vista",
    },
    {
      nombre: "Milagros Acosta",
      edad: 17,
      rut: "12345678-9",
      diagnostico: "Hipertensión Pulmonar",
    },
    {
      nombre: "Victor Fernandez",
      edad: 47,
      rut: "12345678-9",
      diagnostico: "Diabetes Mellitus 2",
    },
    {
      nombre: "Is Pinto",
      edad: 15,
      rut: "12345678-9",
      diagnostico: "Pancreatitis Aguda",
    },
    {
      nombre: "Francisco Lobos",
      edad: 2,
      rut: "12345678-9",
      diagnostico: "Neuroblastoma",
    },
    {
      nombre: "Jean Jaque",
      edad: 67,
      rut: "12345678-9",
      diagnostico: "Enfermedad de Parkinson",
    },
    {
      nombre: "Cesar Riveros",
      edad: 87,
      rut: "12345678-9",
      diagnostico: "Alopecia por Radiación",
    },
    {
      nombre: "Joshua Espinoza",
      edad: 77,
      rut: "12345678-9",
      diagnostico: "Enfermedad de Creutzfeldt-Jakob",
    },
  ];
*/

/*
const paciente1 = new Paciente ("Islebi Pinto", 31, "17.737.695-7", "Hipotensión");
const paciente2 = new Paciente ("Jess González", 32, "18.522.901-7", "Problemas para decidir qué ponerse para salir");
const paciente3 = new Paciente ("Marco", 14, "22.522.901-7", "Embarazo");
const paciente4 = new Paciente ("Molotov", 1, "22.522.901-7", "Hiperactividad");

console.log(paciente1.nombre);

//paciente1.imprimirDatos("nombrePaciente");
//invocar el método Imprimir datos
// instanciaciones
paciente1.imprimirDatos("pacientes");
paciente2.imprimirDatos("pacientes");
*/