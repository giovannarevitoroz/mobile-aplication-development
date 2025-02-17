// Definição das classes
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    saudacao() {
        console.log(`Olá, ${this.nome}`);
    }
}

class Aluno extends Pessoa {
    constructor(nome, sobrenome) {
        super(nome, sobrenome);
        this.profissao = "Aluno";
    }
}

export { Aluno, Pessoa };

// Criando e exibindo um objeto
const nome = "Gabriel";
const user = { nome };
console.log(user);

// Exportação correta de classe padrão
export default class MinhaClasse {
    show() {
        console.log("MinhaClasse");
    }
}

// Variáveis e manipulação de strings
const nome2 = "Mirian";
const message = `Hello, ${nome2}`;
const valor = "5" + 5;

console.log(message);
console.log(valor);

// Arrow Functions
const somarArrow = (a, b) => a + b;
const di = () => console.log("Hello");
di();

function somar(a, b = 9) {
    return a + b;
}

const resultado = somar(10, 40);
const resultadoArrow = somarArrow(10, 8);

console.log("resultado arrow", resultadoArrow);

// Spread Operator
const meuArray = [1, 2, 3];
const segundoArray = [4, ...meuArray];

const user2 = { email: "mirian@mirian.com", name: "Mirian" };
const updateUser = { ...user2, job: "student" };

console.log(meuArray);
console.log(...meuArray);
console.log(segundoArray);
console.log(user2);
console.log(updateUser);

// Desestruturação
const cores = ["azul", "vermelho", "preto"];
const [azul, vermelho, preto] = cores;

console.log(azul, vermelho, preto);

const { name } = user2;
console.log(name);

// Função corrigida sayMyName
const sayMyName = ({ name }) => {
    console.log("Say my name", name);
};

sayMyName(user2);

// Objetos
const carro1 = { marca: "Fiat", modelo: "500", cor: "Branco" };

const pessoa = {
    nome: "Mario",
    sobrenome: "de Andrade",
    id: 1,
    nomeCompleto() {
        console.log(`${this.nome} ${this.sobrenome}`);
    }
};

const criarNovaPessoa = (nome) => {
    console.log(`Olá, ${nome}`);
    return { nome };
};

pessoa.nomeCompleto();
const novaPessoa = criarNovaPessoa("João");
console.log(novaPessoa);

// Função que retorna um objeto reutilizável
const criarPessoa = (nome) => {
    const obj = { nome };
    obj.saudacao = () => {
        console.log(`Olá, ${obj.nome}`);
    };
    return obj;
};

const pessoa1 = criarPessoa("Carlos");
pessoa1.saudacao();

// Função Construtora de Pessoa
function PessoaConstrutor(nome) {
    this.nome = nome;
    this.saudacao = () => {
        console.log(`Seja bem-vindo(a), ${this.nome}`);
    };
}

const mirian = new PessoaConstrutor("Mirian");
const joao = new PessoaConstrutor("João");

mirian.saudacao();
console.log(mirian);

// Classe com getter e setter
class PessoaClasse {
    constructor(nome, email) {
        this._nome = nome;
        this.email = email;
    }

    get nome() {
        return this._nome;
    }

    set nome(value) {
        this._nome = value;
    }

    saudacao() {
        console.log(`Olá, ${this.nome}`);
    }
}

// Classe AlunoClasse corrigida
class AlunoClasse extends PessoaClasse {
    constructor(nome, email, curso) {
        super(nome, email);
        this.curso = curso;
        this.profissao = "Aluno";
    }
}

const mirian1 = new PessoaClasse("Mirian", "mirian@mirian.com.br");
console.log(mirian1.nome);

mirian1.nome = "Mirian Bronzati";
console.log(mirian1.nome);

const giovanna = new AlunoClasse("Giovanna", "giovanna@email.com", "Matemática");
console.log(giovanna.nome, giovanna.email, giovanna.curso);

// Importação correta de módulos
import * as classes from "./MeuModulo.js";
import { Aluno } from "./MeuModulo.js";

// Função para calcular pedido
const calcularPedido = (valor, gorjeta = 0.1) => valor * (1 + gorjeta);
console.log(calcularPedido(100, 0.15));

// Correção da importação da classe
import MinhaClasse from "./Modulo2.js";
const minhaClasse = new MinhaClasse();
minhaClasse.show();
