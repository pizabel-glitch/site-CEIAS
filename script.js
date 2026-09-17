// Menu Hamburguer para Dispositivos Móveis
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.getElementById('navLinks');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Fechar menu mobile ao clicar em algum link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Simulação de Envio do Formulário de Contato
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Impede a página de recarregar
    
    const nome = document.getElementById('nome').value;
    
    alert(`Obrigado pelo contato, ${nome}! Sua mensagem foi enviada com sucesso. Em breve retornaremos.`);
    
    // Limpar o formulário
    contactForm.reset();
});