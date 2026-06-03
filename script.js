const form = document.getElementById("formAluno");

form.addEventListener("submit", function(e){

e.preventDefault();

let nome = document.getElementById("nome").value;

document.getElementById("painel").classList.remove("oculto");

document.getElementById("boasVindas").innerHTML =
"Bem-vindo, " + nome + "!";
});

function mostrarCadastro(){

document
.getElementById("cadastro")
.scrollIntoView({
behavior:"smooth"
});

}

function abrirAula(numero){

const modal =
document.getElementById("modal");

const conteudo =
document.getElementById("conteudoAula");

if(numero === 1){

conteudo.innerHTML = `

<h2>Aula 1 - Conhecendo a Bateria</h2>

<img
src="https://images.unsplash.com/photo-1508979828023-c5249f4df085"
width="100%"
>

<h3>Bumbo</h3>

<p>
É o maior tambor da bateria.
Tocado com o pedal.
Responsável pelos graves.
</p>

<h3>Caixa</h3>

<p>
A peça mais utilizada para marcar o ritmo.
</p>

<h3>Chimbal</h3>

<p>
Pratos controlados pelo pé.
Muito usados para manter o tempo.
</p>

<button onclick="concluirAula()">
Concluir Aula
</button>

`;

}

modal.style.display = "block";

}

function fecharModal(){

document.getElementById("modal").style.display =
"none";

}

function concluirAula(){

document.getElementById("barra").style.width =
"30%";

document.getElementById("textoProgresso")
.innerHTML = "30%";

alert("Parabéns! Aula concluída!");

}
