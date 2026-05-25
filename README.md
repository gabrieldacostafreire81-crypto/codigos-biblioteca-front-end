# Sistema de Gestão de Biblioteca

Frontend completo para gerenciar uma biblioteca moderna.

## 🚀 Como Executar

### Com Live Server (VS Code)

1. Instale a extensão **Live Server** no VS Code
2. Clique com botão direito em `public/index.html`
3. Selecione "Open with Live Server"
4. O navegador abrirá automaticamente em `http://localhost:5500`

### Com outro servidor web

```bash
# Python 3.x
cd public
python -m http.server 8000

# Node.js (se tiver http-server instalado)
npx http-server public -p 8000
```

## 🔑 Credenciais de Teste

- **Email:** admin@biblioteca.com
- **Senha:** admin123

## ✅ Verificar Se Está Funcionando

1. Acesse: `http://localhost:5500/test.html`
2. Verifique se todos os módulos estão carregados (✅)
3. Clique em "Ir para Login" ou acesse diretamente `http://localhost:5500/login.html`

## 📁 Estrutura do Projeto

```
public/
├── index.html           # Página inicial (redirecionador)
├── login.html           # Página de login
├── dashboard.html       # Dashboard principal
├── books.html          # Gerenciar livros
├── users.html          # Gerenciar usuários
├── loans.html          # Gerenciar empréstimos
├── reports.html        # Relatórios
├── test.html           # Página de teste
├── styles.css          # Estilos globais
└── js/
    ├── auth.js         # Sistema de autenticação
    ├── data.js         # Banco de dados local (localStorage)
    ├── layout.js       # Funções de layout e UI
    └── test.js         # Script de testes
```

## 🎨 Recursos

- ✅ Dashboard com estatísticas
- ✅ Gestão de livros (criar, editar, excluir)
- ✅ Gestão de usuários
- ✅ Sistema de empréstimos com controle de atrasos
- ✅ Cálculo automático de multas (R$ 2,00/dia)
- ✅ Relatórios com gráficos
- ✅ Interface responsiva
- ✅ Dados persistidos em localStorage
- ✅ Autenticação básica

## 🛠️ Tecnologia

- HTML5
- CSS3
- JavaScript (Vanilla, sem frameworks)
- localStorage (banco de dados cliente)

## 📝 Notas

- Todos os dados são salvos em `localStorage` do navegador
- Não há backend necessário
- A aplicação funciona 100% offline após o carregamento inicial
- Dados são persistidos entre sessões
