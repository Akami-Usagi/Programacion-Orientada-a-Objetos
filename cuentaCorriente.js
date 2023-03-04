class cuentaCorriente{
    numero;
    saldo;
    agencia;

    constructor(){
        this.saldo = 0;
        this.numero = "";
        this.agencia = "";
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

}