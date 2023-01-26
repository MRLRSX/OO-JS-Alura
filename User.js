const user = {
    nome: 'Lucas',
    email: 'lucas@gmail.com',
    nascimento:'01/05/1995',
    role: 'Admin',
    ativo: true,
    exibirInfos: function(){
        console.log(this.nome, this.email, this.nascimento);
    }
}

const admin = {
    nome: 'anna clara',
    email: 'annaclara@annaclara.com',
    nascimento: '10/03/2021',
    criarCurso(){
        console.log("Curso Criado");
    }
}

Object.setPrototypeOf(admin, user);
admin.criarCurso();
admin.exibirInfos();
