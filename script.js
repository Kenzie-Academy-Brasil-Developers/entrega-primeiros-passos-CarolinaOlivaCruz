
let nome = prompt("Qual o seu nome?"); 
if(nome.length < 5) {
    alert('Nome Inválido');
}

let materia1 = prompt('Digite o nome da matéria');
let nota1 = parseFloat(prompt('Digite a sua nota de ' + materia1));
if(nota1 <= 0 || nota1 > 10){
    alert('Nota Inválida');
} else if(isNaN(nota1)){
    alert('Número inválido');
}

let materia2 = prompt('Digite o nome da matéria');
let nota2 = parseFloat(prompt('Digite a sua nota de ' + materia2));
if(nota2 <= 0 || nota2 > 10){
    alert('Nota Inválida');
} else if(isNaN(nota2)){
    alert('Número inválido');
}

let materia3 = prompt('Digite o nome da matéria');
let nota3 = parseFloat(prompt('Digite a sua nota de ' + materia3));
if(nota3 <= 0 || nota3 > 10){
    alert('Nota Inválida');
} else if(isNaN(nota3)){
    alert('Número inválido');
}

let materia4 = prompt('Digite o nome da matéria');
let nota4 = parseFloat(prompt('Digite a sua nota de ' + materia4));
if(nota4 <= 0 || nota4 > 10){
    alert('Nota Inválida');
} else if(isNaN(nota4)){
    alert('Número inválido');
}

let materia5 = prompt('Digite o nome da matéria');
let nota5 = parseFloat(prompt('Digite a sua nota de ' + materia5));
if(nota5 <= 0 || nota5 > 10){
    alert('Nota Inválida');
} else if(isNaN(nota5)){
    alert('Número inválido');
}

let materia6 = prompt('Digite o nome da matéria');
let nota6 = parseFloat(prompt('Digite a sua nota de ' + materia6));
if(nota6 <= 0 || nota6 > 10){
    alert('Nota Inválida');
} else if(isNaN(nota6)){
    alert('Número inválido');
}

let materia7 = prompt('Digite o nome da matéria');
let nota7 = parseFloat(prompt('Digite a sua nota de ' + materia7)) ;
if(nota7 <= 0 || nota7 > 10){
    alert('Nota Inválida');
} else if(isNaN(nota7)){
    alert('Número inválido');
}

let materia8 = prompt('Digite o nome da matéria');
let nota8 = parseFloat(prompt('Digite a sua nota de ' + materia8)) ;
if(nota8 <= 0 || nota8 > 10){
    alert('Nota Inválida');
} else if(isNaN(nota8)){
    alert('Número inválido');
}

let materia9 = prompt('Digite o nome da matéria');
let nota9 = parseFloat(prompt('Digite a sua nota de ' + materia9));
if(nota9 <= 0 || nota9 > 10){
    alert('Nota Inválida');
} else if(isNaN(nota9)){
    alert('Número inválido');
}

let materia10 = prompt('Digite o nome da matéria');	
let nota10 = parseFloat(prompt('Digite a sua nota de ' + materia10)) ;
if(nota10 <= 0 || nota10 > 10){
    alert('Nota Inválida');
} else if(isNaN(nota10)){
    alert('Número inválido');
}

let somaNotas = nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7 + nota8 + nota9 + nota10;
  
let mediaNotas = somaNotas / 10;

let notaPresenca = parseInt(prompt('Digite sua nota de presença')) ;
if (notaPresenca <= 0 || notaPresenca > 10) {
    alert('Nota Inválida');
} else if(isNaN(notaPresenca)){
    alert('Nota inválido');
}

if(mediaNotas >= 8 && notaPresenca >= 8){
    alert(`A nota do aluno(a) ${nome} é de ${mediaNotas} e sua presença de ${notaPresenca}:
    Aluno(a) Aprovado`);
} else if(mediaNotas < 8 && notaPresenca <= 10){
    alert(`A nota do aluno(a) ${nome} é de ${mediaNotas} e sua presença de ${notaPresenca}:
    Aluno(a) Reprovado`);
} else {
alert(`Dados inválidos`);
}