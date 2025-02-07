class Conta
{
    numeroDaConta : number
    saldo : number = 0

    constructor(numeroDaConta : number)
    {
        this.numeroDaConta = numeroDaConta
    }
}

class ContaSalario extends Conta
{
    depositar(valor: number)
    {
        this.saldo += valor
    }
}

interface ITransacional // A classe que usar a interface de que declarar o método 
{                       // dentro da interface dentro do seu escopo

}