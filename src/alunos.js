let alunos = ['João','Jose','Pedro','Maria','Fatima','Bruna']
let notaAlunos = [8,4,5,6,7,5]

console.log("Alunos com mais de 6 :")
notaAlunos.forEach(function(nota,indice)
{
    if(nota >= 6)
    console.log(alunos[indice])
}) 