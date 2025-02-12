const nome = "Mirian";
const message  = `Hello, ${nome}`;
const valor = "5" + 5;


"arrow function | mais simples para logica mais simples"
const somarArrow = (a,b) => a+b;
const di = () => console.log("Hello");
di();

function somar(a,b = 9) {
    return a + b
}

const resultado = somar (10,40)
const resultadoArrow = somarArrow(10,8)

console.log("resultado arrow", resultado)

const meuArray = [1,2,3]
const segundoArray = [4,...meuArray]
const user = {email: "mirian@mirian.com", name: "Mirian"}
const updateUser = {...user, "job": "student"}
const mergedUser = {
    job: "Developer",
    email: "mirian@mirian.com",
    name: "Mirian",
    job: "student"

}

console.log(meuArray)
console.log(...meuArray)
console.log(segundoArray)

console.log(user)
console.log(updateUser)
