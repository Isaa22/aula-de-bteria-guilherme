// ============================================
// BANCO DE DADOS DAS AULAS - COMPLETO E DETALHADO
// ============================================

const aulasData = [
  {
    id: 0,
    titulo: "🥁 Conhecendo a Bateria",
    descricao: "Partes, nomenclatura e função de cada componente.",
    conteudo: `
      <div class="foto-bateria" style="background: linear-gradient(135deg, #2a3a4a, #1a2a3a); height: 200px; display: flex; align-items: center; justify-content: center; font-size: 4rem;">
        🥁 🎵 🥁
      </div>
      <p style="font-size: 1.1rem; margin-bottom: 20px;"><strong>Bem-vindo à bateria!</strong> Este é o instrumento mais empolgante da música. Vamos conhecer cada peça que compõe uma bateria completa.</p>
      
      <div class="partes-bateria">
        <div class="parte-item">
          <div class="parte-img-place"><i class="fas fa-drumstick-bite"></i></div>
          <div class="descricao-parte">
            <strong>🥁 Bumbo (Bass Drum)</strong><br>
            O maior tambor da bateria, fica no chão na posição vertical. É tocado com um pedal acionado pelo pé direito. Produz o som grave e encorpado que dá a base rítmica. É a "batida do coração" da música.
          </div>
        </div>
        <div class="parte-item">
          <div class="parte-img-place"><i class="fas fa-drum"></i></div>
          <div class="descricao-parte">
            <strong>🥁 Caixa (Snare Drum)</strong><br>
            Fica entre as pernas do baterista. Tem um som agudo e estalado porque possui "estrebos" (fios de aço) na parte de baixo. É usada para marcar os contratempos (tempos 2 e 4). É a voz principal da bateria.
          </div>
        </div>
        <div class="parte-item">
          <div class="parte-img-place"><i class="fas fa-drum"></i></div>
          <div class="descricao-parte">
            <strong>🎧 Hi-hat</strong><br>
            Dois pratos gêmeos um sobre o outro, controlados por um pedal com o pé esquerdo. Pode ser tocado fechado (som seco) ou aberto (som mais longo). É o "metrônomo" da bateria.
          </div>
        </div>
        <div class="parte-item">
          <div class="parte-img-place"><i class="fas fa-music"></i></div>
          <div class="descricao-parte">
            <strong>🎵 Pratos (Cymbals)</strong><br>
            • <strong>Ride</strong>: Prato maior, som definido, usado para manter o ritmo.<br>
            • <strong>Crash</strong>: Prato médio, som explosivo para acentuar partes da música.<br>
            • <strong>Splash/China</strong>: Pratos especiais para efeitos.
          </div>
        </div>
        <div class="parte-item">
          <div class="parte-img-place"><i class="fas fa-drum"></i></div>
          <div class="descricao-parte">
            <strong>🎵 Toms</strong><br>
            Tambores menores que produzem sons mais agudos. Geralmente são 3: Tom de chão (ao lado da caixa) e Toms suspensos (acima do bumbo). Usados para fills e viradas.
          </div>
        </div>
      </div>
      
      <div class="dica-box">
        <i class="fas fa-lightbulb" style="color: #F5B042; font-size: 1.5rem; margin-right: 10px;"></i>
        <strong>💡 DICA DO PROFESSOR:</strong> Explore cada peça da bateria tocando individualmente. Perceba a diferença de altura (grave/agudo) de cada componente.
      </div>
    `
  },
  {
    id: 1,
    titulo: "🪑 Postura & Pegada",
    descricao: "Postura correta, empunhadura das baquetas.",
    conteudo: `
      <div class="foto-bateria" style="background: linear-gradient(135deg, #2a3a2a, #1a2a1a); height: 180px; display: flex; align-items: center; justify-content: center; font-size: 3rem;">
        🪑 ✋ 🥁
      </div>
      
      <h3>📍 POSTURA CORRETA</h3>
      <p>• Sente-se no centro do banco (banco ajustado na altura em que seus joelhos fiquem levemente acima do nível do banco).<br>
      • Costas retas, ombros relaxados.<br>
      • Pés apoiados no chão: pé esquerdo no pedal do hi-hat, pé direito no pedal do bumbo.<br>
      • Braços soltos, cotovelos próximos ao corpo.</p>
      
      <div class="partes-bateria">
        <div class="parte-item">
          <div class="parte-img-place"><i class="fas fa-hand-peace"></i></div>
          <div class="descricao-parte">
            <strong>✋ Empunhadura Tradicional (Matched Grip)</strong><br>
            As duas mãos seguram as baquetas da mesma forma: polegar e indicador formam um pivô (fulcro), os outros dedos envolvem a baqueta suavemente. A palma da mão fica virada para baixo.
          </div>
        </div>
        <div class="parte-item">
          <div class="parte-img-place"><i class="fas fa-hand-fist"></i></div>
          <div class="descricao-parte">
            <strong>🎯 Posição da Baqueta</strong><br>
            A baqueta deve ficar entre a primeira articulação do indicador e a ponta do polegar. Não aperte demais! Deixe a baqueta "respirar" para permitir o rebote natural.
          </div>
        </div>
      </div>
      
      <div class="exercicio-box">
        <strong>🎯 EXERCÍCIO INICIAL:</strong> Sem tocar, apenas experimente o rebote: deixe a baqueta cair livremente sobre a caixa e observe o movimento de volta (rebote). Este é o segredo para tocar rápido sem cansar!
      </div>
      
      <div class="dica-box">
        <i class="fas fa-lightbulb" style="color: #F5B042;"></i> <strong>Professor diz:</strong> Uma pegada relaxada evita tendinite e permite mais velocidade. Treine na sua coxa antes de ir para a bateria.
      </div>
    `
  },
  {
    id: 2,
    titulo: "🎯 Primeiros Rudimentos",
    descricao: "Single stroke e double stroke - a base de tudo!",
    conteudo: `
      <div class="foto-bateria" style="background: linear-gradient(135deg, #3a2a2a, #2a1a1a); height: 150px; display: flex; align-items: center; justify-content: center; font-size: 2.5rem;">
        RLRL RLRL | RRLL RRLL
      </div>
      
      <h3>🎵 SINGLE STROKE ROLL (Toque alternado)</h3>
      <p>O movimento mais básico e fundamental: mãos alternam os golpes.<br>
      <strong>Padrão: R L R L R L R L</strong> (R = direita, L = esquerda)<br>
      Treine devagar no colo ou na caixa. Use metrônomo (60 BPM).</p>
      
      <div class="exercicio-box">
        <strong>📝 EXERCÍCIO 1 - Single Stroke:</strong><br>
        R L R L | R L R L | (repita 10x sem parar)
      </div>
      
      <h3>🎵 DOUBLE STROKE ROLL (Toque duplo)</h3>
      <p>Cada mão toca duas vezes seguidas antes de trocar.<br>
      <strong>Padrão: R R L L R R L L</strong><br>
      Este rudimento é a base para rolls (tambores) e viradas rápidas.</p>
      
      <div class="exercicio-box">
        <strong>📝 EXERCÍCIO 2 - Double Stroke:</strong><br>
        R R L L | R R L L | (repita 10x)<br>
        <em>Dica: Use o rebote para os dois golpes!</em>
      </div>
      
      <div class="dica-box">
        <i class="fas fa-lightbulb"></i> <strong>Desafio:</strong> Toque Single Stroke e Double Stroke alternando (4x cada) sem parar. O segredo da bateria está na consistência!
      </div>
    `
  },
  {
    id: 3,
    titulo: "📖 Leitura Rítmica",
    descricao: "Semínimas, colcheias e pausas.",
    conteudo: `
      <h3>🎼 FIGURAS RÍTMICAS BÁSICAS</h3>
      <div class="partes-bateria">
        <div class="parte-item">
          <div class="parte-img-place"><i class="fas fa-music"></i></div>
          <div class="descricao-parte">
            <strong>♩ Semínima = 1 tempo</strong><br>
            Duração de um pulso. Ex: Bumbo no tempo 1, caixa no tempo 3.
          </div>
        </div>
        <div class="parte-item">
          <div class="parte-img-place"><i class="fas fa-music"></i></div>
          <div class="descricao-parte">
            <strong>♪ Colcheia = 1/2 tempo</strong><br>
            Toque duas vezes por pulso. Hi-hat normalmente toca colcheias.
          </div>
        </div>
        <div class="parte-item">
          <div class="parte-img-place"><i class="fas fa-music"></i></div>
          <div class="descricao-parte">
            <strong>𝅘𝅥𝅮 Semicolcheia = 1/4 tempo</strong><br>
            Quatro toques por pulso. Para viradas rápidas.
          </div>
        </div>
      </div>
      
      <div class="exercicio-box">
        <strong>📝 LEIA E TOQUE (conte em voz alta):</strong><br>
        1 e 2 e 3 e 4 e (colcheias)<br>
        1 a 2 a 3 a 4 a (semicolcheias)
      </div>
      
      <div class="dica-box">
        🎯 <strong>Pratique:</strong> Coloque o metrônomo em 70 BPM e toque colcheias no hi-hat com a mão direita. Conte "1 e, 2 e, 3 e, 4 e" em voz alta.
      </div>
    `
  },
  {
    id: 4,
    titulo: "🎸 Groove Inicial - Rock Básico",
    descricao: "O primeiro beat que todo baterista aprende!",
    conteudo: `
      <div class="foto-bateria" style="background: linear-gradient(135deg, #1a2a3a, #0a1a2a); height: 150px; display: flex; align-items: center; justify-content: center; font-size: 2rem;">
        🦶 Bumbo | 🥁 Caixa | 🎧 Hi-hat
      </div>
      
      <h3>🎵 PADRÃO ROCK - O MAIS IMPORTANTE!</h3>
      
      <div class="exercicio-box">
        <strong>📝 GROOVE ROCK BÁSICO:</strong><br>
        🦶 <strong>Bumbo:</strong> toque nos tempos 1 e 3<br>
        🥁 <strong>Caixa:</strong> toque nos tempos 2 e 4<br>
        🎧 <strong>Hi-hat:</strong> toque colcheias constantes (1 e 2 e 3 e 4 e)<br>
        <strong>Pé esquerdo no hi-hat:</strong> mantenha fechado!
      </div>
      
      <div class="partes-bateria">
        <div class="parte-item">
          <div class="parte-img-place"><i class="fas fa-play-circle"></i></div>
          <div class="descricao-parte">
            <strong>🎯 COORDENAÇÃO É TUDO!</strong><br>
            Comece devagar: mão direita no hi-hat, mão esquerda na caixa, pé direito no bumbo. Separe os movimentos. Treine só o bumbo+caixa primeiro, depois adicione o hi-hat.
          </div>
        </div>
      </div>
      
      <div class="dica-box">
        <i class="fas fa-lightbulb"></i> <strong>Professor:</strong> O groove rock é a base de milhares de músicas (AC/DC, Beatles, Queen). Depois que você dominar isso, já consegue tocar várias músicas!
      </div>
    `
  }
];

// Gerar automaticamente as aulas restantes (5 a 19) com conteúdo rico
for (let i = 5; i <= 19; i++) {
  const temas = [
    { tit: "🎧 Levada com Hi-hat", desc: "Coordenar mão direita com pé esquerdo", cont: "<p>O hi-hat pode ser aberto e fechado para criar variações rítmicas. Experimente abrir o hi-hat nas colcheias pares (2 e, 4 e) para dar um swing especial!</p><div class='exercicio-box'>Exercício: Toque o groove rock básico, mas nos tempos 2 e 4, abra levemente o hi-hat junto com a caixa.</div>" },
    { tit: "⚡ Variações de Bumbo", desc: "Acrescentar notas extras no bumbo", cont: "<p>Acrescente o bumbo no 'e' do tempo 3 (contratempo). Ex: Bumbo no 1, 3 e no 3e. Isso cria um groove mais 'quebrado'.</p><div class='exercicio-box'>Padrão: Bumbo - 1, 3, 3e | Caixa - 2,4 | Hi-hat colcheias.</div>" },
    { tit: "🔥 Introdução ao Acento", desc: "Acentuar a caixa", cont: "<p>Toque a caixa mais forte nos tempos 2 e 4. Os acentos são o que fazem o público dançar! Treine contrastando toques normais vs acentuados.</p>" },
    { tit: "👻 Ghost Notes", desc: "Notas fantasma na caixa", cont: "<p>Ghost notes são toques muito leves na caixa entre os tempos principais. Dão groove e 'sujeira' musical. Ex: toque a caixa levemente no 'e' de cada tempo.</p>" },
    { tit: "🕺 Padrão Shuffle", desc: "Triple feel", cont: "<p>O shuffle tem sensação de 'balanço' (triple feeling). Toque o hi-hat como 'da-da-dá, da-da-dá' no lugar de colcheias retas. Muito usado no blues e rock.</p>" },
    { tit: "⏱️ Pratique com Metrônomo", desc: "Desenvolva sua noção de tempo", cont: "<p>Metrônomo é fundamental! Comece em 60 BPM tocando apenas o groove básico. Aumente 5 BPM por dia até chegar em 120 BPM com perfeição.</p>" },
    { tit: "🌀 Viradas Simples", desc: "Fill na caixa e tom", cont: "<p>Antes de voltar ao groove principal, faça uma virada (fill) nos últimos 2 tempos do compasso. Ex: toque caixa → tom suspenso → tom médio → tom de chão.</p>" },
    { tit: "🧠 Coordenação 4 membros", desc: "Independência total", cont: "<p>Treine cada membro separadamente. Exercício: pé direito faz semínimas, pé esquerdo faz colcheias, mão direita faz contratempos, mão esquerda improvisa na caixa.</p>" },
    { tit: "💥 Acentos no Crash", desc: "Marcar seções da música", cont: "<p>O crash é usado para marcar o início de uma nova seção (refrão, ponte). Toque crash junto com o bumbo na primeira batida do compasso.</p>" },
    { tit: "🇧🇷 Ride & Samba", desc: "Padrão brasileiro", cont: "<p>No samba, a mão direita toca o tamborim imaginário no prato ride com padrão '1 a 2, 3 a 4'. O pé esquerdo faz o 'chiado' do pandeiro.</p>" },
    { tit: "🎚️ Dinâmica", desc: "Forte e piano, controle de volume", cont: "<p>Toque o mesmo groove com diferentes intensidades: piano (suave), mezzo-forte (médio), forte (forte). Grave-se tocando para perceber as diferenças!</p>" },
    { tit: "🌀 Polirritmia simples", desc: "3 contra 2", cont: "<p>Polirritmia: uma mão toca 3 golpes enquanto a outra toca 2 no mesmo espaço de tempo. Ex: mão direita: 1 2 3 | esquerda: 1 - 2 - |</p>" },
    { tit: "🎸 Improviso", desc: "Criar solos criativos", cont: "<p>Improvisar = usar fills e ritmos variados em sequência. Comece com uma frase de 2 compassos, repita e vá modificando. Não tenha medo de errar!</p>" },
    { tit: "🎵 Blues & Rock", desc: "Aplicação de grooves", cont: "<p>Blues usa shuffle, rock usa colcheias retas. Toque uma música simples como 'Johnny B. Goode' aplicando os grooves estudados.</p>" },
    { tit: "🏆 Projeto Final", desc: "Toque uma música completa", cont: "<p>Escolha uma música (ex: Billie Jean - Michael Jackson) e toque do início ao fim com backing track. Grave e analise seu desempenho! Parabéns por concluir o curso!</p>" }
  ];
  const idx = i - 5;
  aulasData.push({
    id: i,
    titulo: temas[idx].tit,
    descricao: temas[idx].desc,
    conteudo: temas[idx].cont + `<div class='dica-box'><i class='fas fa-trophy'></i> <strong>Meta:</strong> Grave sua evolução e compare com a aula anterior!</div>`
  });
}

// Estado do aluno
let alunoLogado = null;
let currentModalAulaId = null;

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  carregarEstadoSalvo();
  document.getElementById('btnRegisterStudent').addEventListener('click', registrarAluno);
  document.getElementById('resetProgressBtn')?.addEventListener('click', resetarProgresso);
  
  const modal = document.getElementById('aulaModal');
  document.querySelectorAll('.close-modal, #closeModalBtn').forEach(btn => {
    btn.addEventListener('click', () => modal.style.display = 'none');
  });
  document.getElementById('completeLessonBtn')?.addEventListener('click', concluirAulaAtual);
  window.onclick =
