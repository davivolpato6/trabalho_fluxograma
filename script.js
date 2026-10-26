// Base de dados com as 10 perguntas focadas em preferências e tipos de personalidade feminina
const questions = [
    {
        title: "Qual o ambiente ideal para o primeiro encontro?",
        options: [
            { text: "Café aconchegante ou livraria charmosa", icon: "fa-mug-hot", color: "#f59e0b" },
            { text: "Restaurante sofisticado e jantar romântico", icon: "fa-wine-glass", color: "#ef4444" },
            { text: "Trilha na natureza ou parque ao ar livre", icon: "fa-tree", color: "#10b981" },
            { text: "Show ao vivo, balada ou bar animado", icon: "fa-music", color: "#8b5cf6" }
        ]
    },
    {
        title: "Qual é o principal traço de personalidade que te atrai?",
        options: [
            { text: "Doçura, empatia e carinho constante", icon: "fa-heart", color: "#ec4899" },
            { text: "Independência, foco e ambição profissional", icon: "fa-briefcase", color: "#3b82f6" },
            { text: "Bom humor espontâneo e espírito aventureiro", icon: "fa-bolt", color: "#eab308" },
            { text: "Inteligência refinada e conversas profundas", icon: "fa-book-open", color: "#6366f1" }
        ]
    },
    {
        title: "Como ela costuma demonstrar afeto e carinho?",
        options: [
            { text: "Através de abraços, toques e proximidade física", icon: "fa-hands-holding-child", color: "#f43f5e" },
            { text: "Cuidando dos mínimos detalhes e preparando surpresas", icon: "fa-gift", color: "#14b8a6" },
            { text: "Mandando mensagens carinhosas e apoiando em tudo", icon: "fa-comments", color: "#06b6d4" },
            { text: "Compartilhando momentos de qualidade juntos", icon: "fa-star", color: "#a855f7" }
        ]
    },
    {
        title: "Qual estilo visual e de vestimenta mais te agrada?",
        options: [
            { text: "Casual moderno, descomplicado e confortável", icon: "fa-shirt", color: "#64748b" },
            { text: "Elegante, clássico, refinado e sofisticado", icon: "fa-gem", color: "#3b82f6" },
            { text: "Alternativo, autêntico, artístico e criativo", icon: "fa-palette", color: "#f97316" },
            { text: "Esportivo, dinâmico, prático e fit", icon: "fa-person-running", color: "#10b981" }
        ]
    },
    {
        title: "O que prefere fazer em um final de semana livre?",
        options: [
            { text: "Maratona de séries, filmes e comida quentinha em casa", icon: "fa-couch", color: "#a855f7" },
            { text: "Explorar novos lugares, viajar e viver aventuras", icon: "fa-plane", color: "#0ea5e9" },
            { text: "Sair para jantar, socializar e ver gente bonita", icon: "fa-champagne-glasses", color: "#f43f5e" },
            { text: "Descansar, ler, focar em autocuidado e paz", icon: "fa-spa", color: "#10b981" }
        ]
    },
    {
        title: "Qual a atitude dela diante de um problema ou desafio?",
        options: [
            { text: "Fria, analógica e extremamente racional", icon: "fa-brain", color: "#6366f1" },
            { text: "Intuitiva, calorosa e focada nas emoções", icon: "fa-hand-holding-heart", color: "#ec4899" },
            { text: "Resiliente, prática e líder nata na solução", icon: "fa-shield-halved", color: "#eab308" },
            { text: "Flexível, pacífica e busca harmonia no grupo", icon: "fa-dove", color: "#14b8a6" }
        ]
    },
    {
        title: "Qual é o hobbie ou paixão favorita dela?",
        options: [
            { text: "Arte, música, fotografia ou expressão criativa", icon: "fa-camera", color: "#d946ef" },
            { text: "Esportes, academia, bem-estar e saúde física", icon: "fa-dumbbell", color: "#22c55e" },
            { text: "Negócios, finanças, estudos e crescimento pessoal", icon: "fa-chart-line", color: "#3b82f6" },
            { text: "Culinária, gastronomia, vinhos e boa mesa", icon: "fa-utensils", color: "#f97316" }
        ]
    },
    {
        title: "Como é a dinâmica de comunicação ideal para vocês?",
        options: [
            { text: "Diálogo aberto, sincero e direto sem rodeios", icon: "fa-bolt-lightning", color: "#eab308" },
            { text: "Conversas longas, filosóficas sobre a vida e o cosmos", icon: "fa-moon", color: "#8b5cf6" },
            { text: "Risadas constantes, leveza e bom humor em alta", icon: "fa-face-grin-stars", color: "#ec4899" },
            { text: "Compreensão silenciosa e sintonia de olhares", icon: "fa-eye", color: "#06b6d4" }
        ]
    },
    {
        title: "Qual o ritmo de vida que combina mais com o estilo dela?",
        options: [
            { text: "Intenso, acelerado, multitarefa e produtivo", icon: "fa-fire", color: "#ef4444" },
            { text: "Tranquilho, equilibrado, focado em paz mental", icon: "fa-leaf", color: "#10b981" },
            { text: "Espontâneo, adaptável e aberto a surpresas diárias", icon: "fa-dice", color: "#f59e0b" },
            { text: "Organizado, planejado, metódico e estável", icon: "fa-calendar-check", color: "#3b82f6" }
        ]
    },
    {
        title: "Qual o maior diferencial de valor que ela agrega na relação?",
        options: [
            { text: "Porto seguro emocional nos momentos difíceis", icon: "fa-house-chimney-window", color: "#3b82f6" },
            { text: "Incentivo constante para voar mais alto e crescer", icon: "fa-rocket", color: "#ec4899" },
            { text: "Alegria contagiante que ilumina qualquer ambiente", icon: "fa-sun", color: "#f59e0b" },
            { text: "Companheirismo incondicional para todas as horas", icon: "fa-handshake", color: "#10b981" }
        ]
    }
];

let currentQuestionIndex = 0;

// Elementos do DOM
const currentQSpan = document.getElementById('current-q');
const progressBar = document.getElementById('progress-bar');
const questionTitle = document.getElementById('question-title');
const optionsContainer = document.getElementById('options-container');
const quizCard = document.getElementById('quiz-card');
const resultCard = document.getElementById('result-card');
const flowchartCanvas = document.getElementById('flowchart-canvas');
const restartBtn = document.getElementById('restart-btn');

function loadQuestion() {
    const q = questions[currentQuestionIndex];
    currentQSpan.textContent = currentQuestionIndex + 1;
    progressBar.style.width = `${((currentQuestionIndex + 1) / questions.length) * 100}%`;
    questionTitle.textContent = q.title;
    
    optionsContainer.innerHTML = '';
    q.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = `<i class="fa-solid ${opt.icon}" style="color: ${opt.color}"></i> <span>${opt.text}</span>`;
        btn.addEventListener('click', () => handleAnswer(opt));
        optionsContainer.appendChild(btn);
    });
}

function handleAnswer(selectedOption) {
    // Adiciona o conector e o novo nó ao fluxograma dinamicamente
    appendFlowNode(currentQuestionIndex + 1, selectedOption);

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function appendFlowNode(stepNumber, option) {
    // Cria elemento conector (linha colorida)
    const connector = document.createElement('div');
    connector.className = 'flow-connector';
    flowchartCanvas.appendChild(connector);

    // Cria o nó do fluxograma
    const node = document.createElement('div');
    node.className = 'flow-node';
    node.style.borderLeft = `4px solid ${option.color}`;
    node.innerHTML = `
        <i class="fa-solid ${option.icon}" style="color: ${option.color}"></i>
        <div>
            <strong>Passo ${stepNumber}: Perfil de Escolha</strong>
            <p>${option.text}</p>
        </div>
    `;
    flowchartCanvas.appendChild(node);

    // Rola o canvas automaticamente para o fim para mostrar a última inserção
    flowchartCanvas.scrollTop = flowchartCanvas.scrollHeight;
}

function showResult() {
    quizCard.classList.add('hidden');
    resultCard.classList.remove('hidden');
}

restartBtn.addEventListener('click', () => {
    currentQuestionIndex = 0;
    // Remove todos os nós e conectores adicionados, mantendo apenas o nó inicial
    const nodesAndConnectors = flowchartCanvas.querySelectorAll('.flow-node:not(.start-node), .flow-connector');
    nodesAndConnectors.forEach(el => el.remove());

    resultCard.classList.add('hidden');
    quizCard.classList.remove('hidden');
    loadQuestion();
});

// Inicialização da aplicação
loadQuestion();