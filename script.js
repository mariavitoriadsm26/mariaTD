function inserirNome() {
    let nomeUsuario = prompt("Qual o seu nome?");
    let elemento = document.querySelector("#nome-usuario");
    elemento.textContent = nomeUsuario;
}

inserirNome();
//Lista de linguagens escritas:

let linguagens ["javaScript","Python", "C"];

console.log(linguagens[0]) //"JavaScript"
console.log(linguagens[1]) //"Python"
console.log(linguagens)[2]) //"C"

const lista = document.querySelector("#lista);
lista.textContent = linguagens[0];
lista.textContent = linguagens[1];
lista.textContent = linguagens[2];

let aluno1 = {
    nome:"Maria",
    idade:19,
    anoLetivo:"3 serie",
    MateriasFavoritas: [Biologia, história, geografia")
                        }
    console.log(aluno1.nome);
    console.log(aluno1.MateriasFavoritas[0])
