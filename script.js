// Lógica de Login
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const loginOverlay = document.getElementById('login-overlay');
    const mainContent = document.getElementById('main-content');
    const errorMessage = document.getElementById('error-message');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = event.target.username.value;
        const password = event.target.password.value;

        if (username === 'prof' && password === 'sesi2025') {
            // 1. Faz a tela de login desaparecer suavemente
            loginOverlay.style.opacity = '0';
            loginOverlay.addEventListener('transitionend', () => {
                loginOverlay.style.display = 'none';
            }, { once: true }); // Garante que o evento rode apenas uma vez

            // 2. Mostra o conteúdo principal e aplica a animação de fade-in
            mainContent.classList.remove('hidden');
            mainContent.classList.add('fade-in-active');
        } else {
            errorMessage.textContent = 'Usuário ou senha inválidos.';
            // Limpa a mensagem de erro após 3 segundos
            setTimeout(() => {
                errorMessage.textContent = '';
            }, 3000);
        }
    });
});

// Seleciona os elementos do DOM
const direitosTrigger = document.getElementById('direitos-trigger');
const modalOverlay = document.getElementById('modal-overlay');
const closeModal = document.getElementById('close-modal');

// Adiciona um evento de clique para abrir o modal
direitosTrigger.addEventListener('click', function(event) {
    event.preventDefault(); // Previne o comportamento padrão do link
    modalOverlay.style.display = 'flex';
});

// Adiciona um evento de clique para fechar o modal pelo botão 'X'
closeModal.addEventListener('click', function() {
    modalOverlay.style.display = 'none';
});

// Adiciona um evento de clique para fechar o modal clicando fora dele
modalOverlay.addEventListener('click', function(event) {
    if (event.target === modalOverlay) {
        modalOverlay.style.display = 'none';
    }
});