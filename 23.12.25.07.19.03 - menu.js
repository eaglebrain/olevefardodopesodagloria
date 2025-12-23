document.addEventListener("DOMContentLoaded", function() {
    
    // 1. DEFINA AQUI OS SEUS LINKS
    // Para adicionar mais páginas, basta copiar uma linha e mudar o texto e o link
    const links = [
        { nome: "Sombras ao Entardecer", url: "21.12.25.10.27.01 - index - o levo fardo do peso da gloria.html" },
        { nome: "A Montanha-Russa Espiritual", url: "22.12.25.10.23.34 - montanha-russa espiritual.html" },
        { nome: "Fervor Todo Dia, o Dia Todo", url: "23.12.25.07.00.34 - fervor todo dia, o dia todo.html" },
        { nome: "Sobre o Autor", url: "contato.html" }
    ];

    // 2. MONTAGEM DO HTML DA SIDEBAR
    const sidebarHTML = `
        <a href="index.html" class="brand">O leve fardo <br /> do peso da <br /> glória ⏹</a>
        <nav>
            <ul>
                ${links.map(link => {
                    // Verifica se o link atual corresponde à página aberta no navegador
                    // Se for a página inicial (root), verifica se é index.html
                    const path = window.location.pathname;
                    const page = path.split("/").pop(); // Pega apenas o nome do arquivo
                    
                    // Lógica para marcar o ativo (considerando index como padrão se vazio)
                    const isActive = (page === link.url) || (page === "" && link.url === "index.html");
                    
                    return `<li><a href="${link.url}" class="${isActive ? 'active' : ''}">${link.nome}</a></li>`;
                }).join('')}
            </ul>
        </nav>
    `;

    // 3. INSERIR NA PÁGINA
    const sidebarElement = document.getElementById("sidebar-dinamica");
    if (sidebarElement) {
        sidebarElement.innerHTML = sidebarHTML;
    }

    // 4. LÓGICA DO MENU MOBILE (HAMBÚRGUER)
    // Inserimos o botão e o overlay via JS também para limpar seu HTML
    const body = document.body;
    
    // Criar Overlay
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    body.appendChild(overlay);

    // Criar Botão
    const btnMobile = document.createElement('button');
    btnMobile.className = 'menu-toggle';
    btnMobile.setAttribute('aria-label', 'Abrir Menu');
    btnMobile.innerHTML = '<span class="hamburger-icon"></span>';
    body.prepend(btnMobile); // Adiciona no início do body

    // Eventos
    function toggleMenu() {
        body.classList.toggle('menu-open');
    }

    btnMobile.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);
});