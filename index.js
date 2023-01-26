import Usuario from "./Usuario.js";
import Docente from "./Docente.js";
import Adminstrador from "./Adminstrador.js";
import chalk from 'chalk';

const novoUsuario = new Usuario('Lucas Rocha dos Santos', 'lucas.rocha-dev@outlook.com', '01-04-1995');
const novoAdmin = new Adminstrador('Anna Clara Bernadino dos Santos', 'annaclara@annaclra.com', '01-04-1995');

console.log(chalk.black.bgGreen(novoUsuario.exibirInfos()));
console.log(chalk.black.bgGreen(novoAdmin.exibirInfos()));
console.log(chalk.black.bgGreen(novoAdmin.nome));
novoUsuario.nome = 'João da Silva';
novoUsuario.email = 'joaodasilva@gmail.com';
console.log(chalk.black.bgGreen(novoUsuario.exibirInfos()));
