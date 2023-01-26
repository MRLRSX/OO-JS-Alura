import chalk from 'chalk';

function User(nome, email){
   this.nome = nome;
   this.email = email;

   this.exibirInfors = function(){
      return `${this.nome} , ${this.email}`;

   }
   
}

//const novoUser = new User('Lucas Rocha', 'lucas.rocha-dev@outlook.com');
//console.log(chalk.black.bgGreen(novoUser.exibirInfors()));

function Admin(role){
   User.call(this, 'Lucas Rocha', 'lucas.rocha-dev@outlook.com');
   this.role = role || 'estudante';
}
// herança com prototype
Admin.prototype = Object.create(User.prototype);
const novoUser = new Admin('admin');
console.log(chalk.black.bgGreen(novoUser.exibirInfors()))
console.log(chalk.black.bgGreen(novoUser.role));




