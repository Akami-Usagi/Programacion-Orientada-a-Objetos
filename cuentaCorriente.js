export class cuentaCorriente{
    numero;
    saldo;
    agencia;
    static cantidadCuentas = 0;

    constructor(saldoCuenta, numeroCuenta, agenciaCuenta){
        this.saldo = saldoCuenta;
        this.numero = numeroCuenta;
        this.agencia = agenciaCuenta;
        cuentaCorriente.cantidadCuentas++;
    }

    depositoEnCuenta(valor){
        if (valor < 0) {
            console.log("no puedes realizar una consignacion de numeros negativos");
        }else{
            this.saldo += valor;
        }
        return this.saldo;
        
    }
    retiroEnCuenta(valor){
        if (valor <= this.saldo) {
            this.saldo -= valor;
        }else{
            console.log("saldo insuficiente, el valor maximo a retirar es: " + this.saldo);
        }
        return this.saldo
    }

    verSaldo(){
        return this.saldo
    }

    tranferencia(valor, cuentaDestino){
        if (this.saldo >= valor) {
            this.retiroEnCuenta(valor);
            cuentaDestino.depositoEnCuenta(valor)
        }else{
            console.log("saldo insuficiente para hacer la tranferencia");
        }
    }

    

}