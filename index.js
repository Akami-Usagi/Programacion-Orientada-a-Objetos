

const cliente1 = new cliente();


cliente1.nombre = "andrea";
cliente1.cedula = "123456"
cliente1.cuentaCorriente = new cuentaCorriente();
    
cliente1.cuentaCorriente.numero = "12345",
cliente1.cuentaCorriente.saldo = 1000,
cliente1.cuentaCorriente.agencia = "buga"


let saldo = cliente1.cuentaCorriente.verSaldo();

console.log("el saldo actual es: " + saldo);

console.log(cliente1.cuentaCorriente.depositoEnCuenta(500)); 

console.log(cliente1.cuentaCorriente.retiroEnCuenta(1500)); 





