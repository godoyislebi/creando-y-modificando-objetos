export default class Paciente{
    constructor(nombre, edad, rut, diagnostico){
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
    imprimirDatos(id, i){ 
        const data = document.getElementById(id);
        data.innerHTML += ` 
            <tr>
                <th scope="row">${i}</th>
                <th>${this.nombre}</th>
                <th>${this.edad}</th>
                <th>${this.rut}</th>
                <th>${this.diagnostico}</th>
            </tr>
        `;
    }
}



//export default Paciente;
//const helper = "hola";
//const adios = "adios";
// export { helper, adios};