import { cuentaCorriente } from "./cuentaCorriente.js";

export class cliente{
    nombre;
    cedula;
    #cuentaCorriente;

    set cuentaCorriente(valor){
        if (valor instanceof cuentaCorriente){
            this.#cuentaCorriente = valor;
        }
    }

    get cuentaCorriente(){
        return this.#cuentaCorriente;
    }

    constructor(nombreCliente, cedulaCliente, cuentaCorrienteCliente){
        this.nombre = nombreCliente;
        this.cedula = cedulaCliente;
        this.#cuentaCorriente = cuentaCorrienteCliente;
    }

}