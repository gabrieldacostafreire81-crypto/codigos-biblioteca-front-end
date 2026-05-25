function renderLayout(activePage, contentHtml) {
  if (!Auth || !Auth.getUser) throw new Error('Auth module not loaded properly');
  const user = Auth.getUser() || { name: "—", email: "—" };
  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: "📊", href: "/dashboard.html" },
    { id: "books", label: "Livros", icon: "📚", href: "/books.html" },
    { id: "users", label: "Usuários", icon: "👥", href: "/users.html" },
    { id: "loans", label: "Empréstimos", icon: "🔄", href: "/loans.html" },
    { id: "reports", label: "Relatórios", icon: "📈", href: "/reports.html" }
  ];

  const navHtml = navItems.map(item => `
    <a href="${item.href}" class="nav-item ${item.id === activePage ? 'active' : ''}">
      <span class="nav-icon">${item.icon}</span>
      <span>${item.label}</span>
    </a>
  `).join('');

  document.body.innerHTML = `
    <div class="app-layout">
      <aside class="sidebar">
        <div class="sidebar-header">
          <div class="sidebar-logo">📚</div>
          <div><h1>Biblioteca</h1><p>Sistema de Gestão</p></div>
        </div>
        <nav class="sidebar-nav">${navHtml}</nav>
        <div class="sidebar-footer">
          <div class="user-info">
            <div class="name">${user.name}</div>
            <div class="email">${user.email}</div>
          </div>
          <button class="logout-btn" onclick="Auth.logout()">
            <span class="nav-icon">🚪</span><span>Sair</span>
          </button>
        </div>
      </aside>
      <main class="main-content" id="main-content">${contentHtml}</main>
    </div>
    <div class="modal-overlay" id="modal-overlay">
      <div class="modal" id="modal-container"></div>
    </div>
  `;
}

function openModal(title, bodyHtml, footerHtml) {
  const overlay = document.getElementById('modal-overlay');
  const container = document.getElementById('modal-container');
  container.innerHTML = `
    <div class="modal-header">
      <h3 class="modal-title">${title}</h3>
      <button class="modal-close" onclick="closeModal()">×</button>
    </div>
    <div class="modal-body">${bodyHtml}</div>
    ${footerHtml ? `<div class="modal-footer">${footerHtml}</div>` : ''}
  `;
  overlay.classList.add('active');
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('active');
}

function escapeHtml(str) {
  if (str == null) return '';
  return String(str)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function formatDate(dateStr) {
  if (!dateStr) return '—';
  const [y, m, d] = dateStr.split('-');
  return `${d}/${m}/${y}`;
}
