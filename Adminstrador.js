import Usuario from "./Usuario.js";
export default class Adminstrador extends Usuario{
    constructor(nome, email, nascimento, role = 'Admin', ativo = true){
        super(nome, email, nascimento, role, ativo);           
    }

    criarCurso(nomeCurso, vagas){
        return `Curso criado ${nomeCurso} criado com ${vagas}`;
    }
}