 function calculadoraIdade(anos){
  return `Daqui a ${anos}anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
// essas são as informsções sobre as pessoas
};

const pessoa1 = {
     nome: 'Amelia',
     idade: 23,
};
     const pessoa2 = {
        nome: ' Marcia',
        idade: 20,
     };
const pessoa3 = {
    nome: 'Jonas',
    idade: 13,
};
// é um comando que vai calcular a função 
 console.log(calculadoraIdade.call(pessoa3, 40));
 console.log(calculadoraIdade.apply(pessoa2, [24]));

alert(calculadoraIdade.call(pessoa3, 40));

    
    