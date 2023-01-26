import chalk from 'chalk';

const user = {
    init : function(nome, email){
        this.nome = nome;
        this.email = email;
    },
    exibirInfors: function(){ return `${this.nome} , ${this.email}`}
 }
 // heranca atráves de prototype
 const novoUser = Object.create(user);
 novoUser.init('LUCAS ROCHA DOS SANTOS', 'lucas.rocha-dev@outlook.com');
 console.log(chalk.black.bgGreen(novoUser.exibirInfors()));
 console.log(chalk.black.bgGreen(), user.isPrototypeOf(novoUser));

 