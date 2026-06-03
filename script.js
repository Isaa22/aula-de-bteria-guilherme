// ---------- DADOS DAS 20 AULAS (profissional, com fotos e explicações de cada parte da bateria) ----------
const aulasData = [
  { id: 0, titulo: "🥁 Conhecendo a Bateria", descricao: "Partes, nomenclatura e função de cada componente.", conteudo: "Nesta aula você vai conhecer cada peça do instrumento. Assista com atenção às imagens e funcionalidades.", partes: [
      { nome: "Bumbo (Bass Drum)", icone: "fas fa-drumstick-bite", explicacao: "Produz o som grave, é acionado pelo pedal. A base rítmica da bateria." },
      { nome: "Caixa (Snare)", icone: "fas fa-drum", explicacao: "Som agudo e estalado. Usada nos backbeats." },
      { nome: "Hi-hat", icone: "fas fa-drum", explicacao: "Pratos gêmeos controlados por pedal, som fechado ou aberto." },
      { nome: "Pratos Ride e Crash", icone: "fas fa-music", explicacao: "Ride mantém o ritmo, Crash dá acentos." }
  ] },
  { id: 1, titulo: "Postura & Pegada", descricao: "Postura correta, empunhadura das baquetas.", conteudo: "Aprenda a sentar, posicionar os pés e segurar as baquetas (técnica Alemã, Francesa ou Americana)." },
  { id: 2, titulo: "Primeiros Rudimentos", descricao: "Single stroke e double stroke.", conteudo: "Toque alternado e duplo. Base para velocidade e controle." },
  { id: 3, titulo: "Leitura Rítmica", descricao: "Semínimas, colcheias e pausas.", conteudo: "Entendendo partitura rítmica básica aplicada à bateria." },
  { id: 4, titulo: "Groove Inicial", descricao: "Bumbo no 1 e 3, caixa no 2 e 4.", conteudo: "Primeiro beat: padrão rock básico." },
  { id: 5, titulo: "Levada com Hi-hat", descricao: "Hi-hat contínuo nas colcheias.", conteudo: "Coordenar mão direita com mão esquerda e pé esquerdo." },
  { id: 6, titulo: "Variações de Bumbo", descricao: "Acrescentar notas extras.", conteudo: "Padrões com bumbo em contratempos." },
  { id: 7, titulo: "Introdução ao Acento", descricao: "Acentuar a caixa", conteudo: "Toques acentuados vs normais." },
  { id: 8, titulo: "Ghost Notes", descricao: "Notas fantasma na caixa.", conteudo: "Toques leves que dão swing ao groove." },
  { id: 9, titulo: "Padrão Shuffle", descricao: "Triple feel", conteudo: "Sensação de balanço. Estudo do shuffle." },
  { id: 10, titulo: "Pratique com Metrônomo", descricao: "Desenvolva time", conteudo: "Uso do click e subdivisões." },
  { id: 11, titulo: "Viradas Simples", descricao: "Fill na caixa e tom", conteudo: "Transições entre frases." },
  { id: 12, titulo: "Coordenação 4 membros", descricao: "Independência", conteudo: "Exercícios de separação mão/pé." },
  { id: 13, titulo: "Acentos no Crash", descricao: "Marcar seções", conteudo: "Uso do crash para pontos fortes." },
  { id: 14, titulo: "Ride & Samba", descricao: "Padrão de samba", conteudo: "Introdução à levada brasileira." },
  { id: 15, titulo: "Dinâmica", descricao: "Forte e piano", conteudo: "Controle de volume expressivo." },
  { id: 16, titulo: "Polirritmia simples", descricao: "3 contra 2", conteudo: "Conceito inicial de polirritmia." },
  { id: 17, titulo: "Improviso", descricao: "Criar solos", conteudo: "Frases rítmicas e criatividade." },
  { id: 18, titulo: "Blues & Rock", descricao: "Aplicação de grooves", conteudo: "Diferenças entre estilos." },
  { id: 19, titulo: "Projeto Final", descricao: "Toque uma música completa", conteudo: "Aplicar tudo que aprendeu junto com backing track." }
];

// Estado do aluno
let alunoLogado = null; // { nome, nivel, experiencia, progresso: [bool...] }
let currentModalAulaId = null;

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  carregarEstadoSalvo();
  document.getElementById('btnRegisterStudent').addEventListener('click', registrarAluno);
  document.getElementById('resetProgressBtn')?.addEventListener('click', resetarProgresso);
  // modal fechar
  const modal = document.getElementById('aulaModal');
  document.querySelectorAll('.close-modal, #closeModalBtn').forEach(btn => {
    btn.addEventListener('click', () => modal.style.display = 'none');
  });
  document.getElementById('completeLessonBtn')?.addEventListener('click', concluirAulaAtual);
  window.onclick = (e) => { if(e.target === modal) modal.style.display = 'none'; };
});

function carregarEstadoSalvo() {
  const saved = localStorage.getItem('batteryAcademyStudent');
  if(saved) {
    alunoLogado = JSON.parse(saved);
    atualizarInterfacePosCadastro();
    renderizarAulas();
    document.getElementById('cadastroSection').style.display = 'none';
    document.getElementById('courseArea').style.display = 'block';
  } else {
    document.getElementById('cadastroSection').style.display = 'block';
    document.getElementById('courseArea').style.display = 'none';
  }
}

function registrarAluno() {
  const nome = document.getElementById('studentName').value.trim();
  const nivel = document.getElementById('studentLevel').value;
  const experiencia = document.getElementById('experienceTime').value.trim() || "não informado";
  if(!nome) {
    alert("Por favor, insira o nome do aluno.");
    return;
  }
  // Se for iniciante, já começa da aula 0 disponível, caso contrário permite avanço personalizado? (pedagogicamente inicia da primeira, mas level afeta recomendação)
  const progressoInicial = [true, ...Array(19).fill(false)]; // primeira aula desbloqueada
  alunoLogado = {
    nome: nome,
    nivel: nivel,
    experiencia: experiencia,
    progresso: progressoInicial,
    ultimaAulaLiberada: 0
  };
  salvarAluno();
  document.getElementById('cadastroSection').style.display = 'none';
  document.getElementById('courseArea').style.display = 'block';
  atualizarInterfacePosCadastro();
  renderizarAulas();
}

function salvarAluno() {
  localStorage.setItem('batteryAcademyStudent', JSON.stringify(alunoLogado));
}

function atualizarInterfacePosCadastro() {
  document.getElementById('studentNameSpan').innerText = alunoLogado.nome.split(' ')[0];
  let nivelTexto = alunoLogado.nivel === 'iniciante' ? '🥁 Iniciante' : (alunoLogado.nivel === 'intermediario' ? '🎵 Intermediário' : '🔥 Avançado');
  document.getElementById('studentLevelBadge').innerHTML = `🎓 ${alunoLogado.nome} · ${nivelTexto} | ${alunoLogado.experiencia}`;
}

function renderizarAulas() {
  const grid = document.getElementById('aulasGrid');
  grid.innerHTML = '';
  for(let i = 0; i < aulasData.length; i++) {
    const aula = aulasData[i];
    const isCompleted = alunoLogado.progresso[i] === true;
    const isLocked = (i > 0 && !alunoLogado.progresso[i-1]);
    const card = document.createElement('div');
    card.className = `aula-card ${isLocked && !isCompleted ? 'locked' : ''}`;
    // Imagem dinâmica com ícone/emoji (design moderno com fotos conceituais)
    const imgBg = i === 0 ? 'linear-gradient(135deg, #1f2b38, #0e1620), url("https://placehold.co/600x400/1e2a36/white?text=Bateria")' : 'linear-gradient(135deg, #2c1a1a, #170d0d)';
    card.innerHTML = `
      <div class="aula-img" style="background: ${imgBg}; background-size: cover;">
        <span class="aula-num"><i class="fas fa-drum"></i> Aula ${i+1}</span>
      </div>
      <div class="aula-info">
        <div class="aula-title">${aula.titulo}</div>
        <div class="aula-desc">${aula.descricao}</div>
        <div class="completion-status">
          <span class="check-complete">${isCompleted ? '<i class="fas fa-check-circle" style="color:#F5B042"></i> Concluída' : '<i class="far fa-circle"></i> Não concluída'}</span>
          <i class="fas fa-chevron-right" style="color:#E25822"></i>
        </div>
      </div>
    `;
    if(!isLocked || isCompleted) {
      card.addEventListener('click', () => abrirModalAula(i));
    }
    grid.appendChild(card);
  }
}

function abrirModalAula(aulaId) {
  if(!alunoLogado) return;
  if(aulaId > 0 && !alunoLogado.progresso[aulaId-1]) {
    alert("Complete a aula anterior primeiro!");
    return;
  }
  currentModalAulaId = aulaId;
  const aula = aulasData[aulaId];
  document.getElementById('modalTitle').innerHTML = `Aula ${aulaId+1}: ${aula.titulo}`;
  let bodyHTML = `<div style="font-size: 1.05rem; margin-bottom: 20px;">${aula.conteudo}</div>`;
  if(aula.partes) {
    bodyHTML += `<h3><i class="fas fa-drum-set"></i> Partes da Bateria em detalhe:</h3><div class="partes-bateria">`;
    aula.partes.forEach(parte => {
      bodyHTML += `
        <div class="parte-item">
          <div class="parte-img-place"><i class="${parte.icone}"></i></div>
          <div class="descricao-parte"><strong>${parte.nome}</strong><br>${parte.explicacao}</div>
        </div>
      `;
    });
    bodyHTML += `</div>`;
  }
  if(aulaId === 1) bodyHTML += `<div class="parte-item"><div class="parte-img-place"><i class="fas fa-hand-peace"></i></div><div class="descricao-parte"><strong>Pegada Correta</strong><br>Segure a baqueta entre o polegar e o nó médio do indicador, sem rigidez.</div></div>`;
  if(aulaId === 4) bodyHTML += `<div><hr><i class="fas fa-play-circle"></i> Exemplo rítmico: Bumbo (pé) nos tempos 1 e 3, caixa nos 2 e 4.</div>`;
  
  document.getElementById('modalBody').innerHTML = bodyHTML;
  document.getElementById('aulaModal').style.display = 'flex';
}

function concluirAulaAtual() {
  if(currentModalAulaId === null || !alunoLogado) return;
  if(alunoLogado.progresso[currentModalAulaId]) {
    alert("Essa aula já foi concluída!");
    document.getElementById('aulaModal').style.display = 'none';
    return;
  }
  alunoLogado.progresso[currentModalAulaId] = true;
  // Se completou e a próxima existe, não precisa de ação extra, mas garante desbloqueio lógico
  salvarAluno();
  renderizarAulas();
  document.getElementById('aulaModal').style.display = 'none';
  alert(`🎉 Parabéns! Aula ${currentModalAulaId+1} concluída. Continue evoluindo!`);
  currentModalAulaId = null;
}

function resetarProgresso() {
  if(confirm("Tem certeza que deseja resetar todo o progresso do aluno? As aulas voltarão ao início.")) {
    alunoLogado.progresso = [true, ...Array(19).fill(false)];
    salvarAluno();
    renderizarAulas();
    alert("Progresso reiniciado! Aula 1 liberada.");
  }
}
