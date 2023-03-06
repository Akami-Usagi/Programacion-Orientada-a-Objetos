import { cliente } from "./cliente.js";
import { cuentaCorriente } from "./cuentaCorriente.js";



const cuenta1 = new cuentaCorriente(1000, "321", "buga");
const cuenta2 = new cuentaCorriente(500, "546", "cali");
const cuenta3 = new cuentaCorriente(500, "546", "cali");
const cliente1 = new cliente("camilo", "12345", cuenta1);


cliente1.cuentaCorriente = cuenta1;


let saldo = cliente1.cuentaCorriente.verSaldo();
console.log("el saldo actual es: " + saldo);
console.log(cliente1, cliente1.cuentaCorriente);


console.log(cuentaCorriente.cantidadCuentas);


