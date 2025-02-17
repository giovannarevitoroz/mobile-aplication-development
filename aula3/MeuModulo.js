// Definição da classe Pessoa
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    saudacao() {
        console.log(`Olá, ${this.nome} ${this.sobrenome}`);
    }
}

// Definição da classe Aluno, que herda de Pessoa
class Aluno extends Pessoa {
    constructor(nome, sobrenome, curso) {
        super(nome, sobrenome);
        this.curso = curso;
    }

    exibirCurso() {
        console.log(`${this.nome} está matriculado no curso de ${this.curso}.`);
    }
}

// Exportação das classes
export { Pessoa, Aluno };
