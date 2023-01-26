export default class Usuario{
    #nome;
    #email;
    #nascimento;
    #role;
    #ativo;

    constructor(nome, email, nascimento, role, ativo = true){
        this.#nome = nome;
        this.#email = email;
        this.#nascimento = nascimento;
        this.#role = role || 'estudante';
        this.#ativo = true;
    }

    get nome()
    { 
        return this.#nome;
    }
    set nome(nome){
        if(nome ==== ''){
            throw new Error('Formato invalido !');
        }
        this.#nome = nome;
    }
    get email(){
         return this.#email;
    }
    set email(email){
        this.#email = email;
    }
    get nascimento(){ 
        return this.#nascimento;
    }
    set nascimento(nascimento){
        this.#nascimento = nascimento;
    }
    get ativo(){ 
        return this.#ativo;
    }
    set ativo(ativo){
        this.#ativo = ativo;
    }
    get role(){ 
        return this.#role;
    }
  
    set role(role){
        this.#role = role;
    }

    exibirInfos(){
  
        return `${this.nome} , ${this.email} ${this.nascimento} , ${this.ativo} , ${this.role}`;
    }
}

