
let nome = prompt("Qual o seu nome?"); 

let materia1 = 'Matemática';
let nota1 = Number(prompt('Digite a sua nota de Matemática'));

let materia2 = 'Português';
let nota2 = Number(prompt('Digite a sua nota de Português'));

let materia3 = 'Informática';
let nota3 = Number(prompt('Digite a sua nota de Informática'));

let materia4 = 'Geografia';
let nota4 = Number(prompt('Digite a sua nota de Geografia'));

let materia5 = 'Inglês';
let nota5 = Number(prompt('Digite a sua nota de Inglês'));

let materia6 = 'História';
let nota6 = Number(prompt('Digite a sua nota de História'));

let materia7 = 'Filosofia';
let nota7 = Number(prompt('Digite a sua nota de Filosofia')) ;

let materia8 = 'Sociologia';
let nota8 = Number(prompt('Digite a sua nota de Sociologia')) ;

let materia9 = 'Literatura';
let nota9 = Number(prompt('Digite a sua nota de Literatura')) ;


let materia10 = 'Educação Física';	
let nota10 = Number(prompt('Digite a sua nota de Educação Física')) ;


let notaPresenca = Number(prompt('Digite sua nota de presença')) ;


if(nome.length < 5) {
    alert('Nome Inválido');
}

if(nota1 <= 0 || nota1 >= 10){
    alert('Nota Inválida');
} else if(nota2 <= 0 || nota2 >= 10){
    alert('Nota Inválida');
} else if(nota3 <= 0 || nota3 >= 10){
    alert('Nota Inválida');
} else if(nota4 <= 0 || nota4 >= 10){
    alert('Nota Inválida');
} else if(nota5 <= 0 || nota5 >= 10){
    alert('Nota Inválida');
} else if(nota6 <= 0 || nota6 >= 10){
    alert('Nota Inválida');
} else if(nota7 <= 0 || nota7 >= 10){
    alert('Nota Inválida');
} else if(nota8 <= 0 || nota8 >= 10){
    alert('Nota Inválida');
} else if(nota9 <= 0 || nota9 >= 10){
    alert('Nota Inválida');
} else if(nota10 <= 0 || nota10 >= 10){
    alert('Nota Inválida');
} else if (notaPresenca <= 0 || notaPresenca >= 10) {
    alert('Nota Inválida');
}

let somaNotas = nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7 + nota8 + nota9 + nota10;
  
let mediaNotas = somaNotas / 10;

if(somaNotas <= 100 || somaNotas >= 0){
    if(nome.length > 5 && mediaNotas <=10 || mediaNotas >= 8){
        alert(`A nota do aluno ${nome} é de ${mediaNotas} e sua presença de ${notaPresenca}:
        Aluno Aprovado`);
    } else if(nome.length > 5 && mediaNotas < 8 || mediaNotas > 0){
        alert(`A nota do aluno ${nome} é de ${mediaNotas} e sua presença de ${notaPresenca}:
        Aluno Reprovado`);} 
    } else {
    alert(`Dados inválidos`);
}



