let alunos = ['Gustavo']

let turma = alunos.map(function(nomeAluno)
{
    aluno =
    {
        nome: nomeAluno,
        nota: 7
    }
    return aluno
})
// ENTRADA DE ALUNOS
turma.push(
{
    nome: "Gui",
    nota: 9
})
turma.push(
{
    nome: "Rodrigo",
    nota: 5
})
turma.push(
{
    nome: "Maria",
    nota: 10
})
turma.push(
{
    nome: "Marcos",
    nota: 4
})
turma.push(
{
    nome: "Bia",
    nota: 5
})
turma.push(
{
    nome: "Pedro",
    nota: 2
})
console.log(turma)

console.log("Alunos com nota maior que 6:")
let aprovados = turma.filter(function(item)
{
    return item.nota >= 6  // True - se todos os objetos com o atributo curso for igual a "front-end"  
    /* Se for True retorna true. Se for false retorna "false" */
})
console.log(aprovados)