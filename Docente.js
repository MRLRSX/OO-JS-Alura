import Usuario from "./Usuario.js";
import  chalk from 'chalk';
export default class Docente extends Usuario{
    constructor(nome, email, nascimento, role = 'docente', ativo = true){
        super(nome, email, nascimento, role, ativo);
    }

    aprovarAluno(nomeAluno, media){
        return media > 7 ? `Aluno: ${nomeAluno} média: ${media} Aprovado`: `Aluno: ${nomeAluno} média: ${media} Reprovado`;
    }
}
