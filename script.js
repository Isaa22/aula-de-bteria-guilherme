function abrirCadastro(){

document
.getElementById("cadastro")
.scrollIntoView({
behavior:"smooth"
});

}

const form =
document.getElementById("formAluno");

form.addEventListener("submit", function(e){

e.preventDefault();

alert(
"Aluno cadastrado com sucesso!"
);

});
