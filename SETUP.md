# 🚀 Setup do Sistema de Biblioteca

## Passo 1: Abrir no Live Server

### Se você tem VS Code:

1. **Abra a pasta** `Codigo biblioteca front end` no VS Code
2. **Clique com botão direito** no arquivo `public/start.html`
3. **Selecione** "Open with Live Server"
4. **Pronto!** O navegador abrirá automaticamente

OU

1. **Clique com botão direito** na pasta `public`
2. **Selecione** "Open with Live Server"

### Se não tem VS Code:

**Opção A - Usar Python (Windows):**
```
1. Abra o PowerShell
2. Execute:
   cd "C:\Users\Gabri\OneDrive\Desktop\Codigo biblioteca front end\public"
   python -m http.server 8000

3. Abra o navegador e acesse:
   http://localhost:8000/start.html
```

**Opção B - Usar Node.js:**
```
1. Se tiver Node.js instalado, abra PowerShell
2. Execute:
   cd "C:\Users\Gabri\OneDrive\Desktop\Codigo biblioteca front end\public"
   npx http-server -p 8000

3. Abra o navegador e acesse:
   http://localhost:8000/start.html
```

## Passo 2: Fazer Login

1. Na página que abrir, clique em "🔓 Acessar Sistema"
2. Ou acesse diretamente: `http://localhost:5500/login.html`
3. Use as credenciais:
   - Email: `admin@biblioteca.com`
   - Senha: `admin123`

## Passo 3: Explorar o Sistema

Depois de fazer login, você verá:

- **Dashboard** - Estatísticas e visão geral
- **Livros** - Gerenciar acervo da biblioteca
- **Usuários** - Cadastro de leitores
- **Empréstimos** - Registrar empréstimos e devoluções
- **Relatórios** - Estatísticas e histórico

## ✅ Teste Rápido

Acesse: `http://localhost:5500/test.html`

Você deve ver todos os módulos com ✅:
- ✅ Auth Module
- ✅ DB Module
- ✅ Layout Module
- ✅ LocalStorage
- ✅ Books, Users, Loans

Se algum aparecer ❌, há um problema de carregamento.

## 🛠️ Resolvendo Problemas

### Página fica branca
1. Abra o console do navegador (F12 ou Ctrl+Shift+I)
2. Veja se há mensagens vermelhas de erro
3. Verifique se os arquivo estão na pasta `public/js/`:
   - auth.js
   - data.js
   - layout.js

### "Não consigo acessar"
1. Verifique se o Live Server está rodando (ícone na barra de status)
2. Tente acessar direto: http://localhost:5500

### "Dados desapareceram"
Os dados são salvos em localStorage do navegador. Se você limpar o cache/cookies, perderá os dados. Isso é normal!

## 📋 Estrutura de Arquivos

```
📁 Codigo biblioteca front end/
  📁 public/
    🌐 index.html       → Redirecionador
    🌐 start.html       → Página inicial
    🌐 login.html       → Login
    🌐 dashboard.html   → Dashboard
    🌐 books.html       → Livros
    🌐 users.html       → Usuários
    🌐 loans.html       → Empréstimos
    🌐 reports.html     → Relatórios
    🌐 test.html        → Teste
    📄 styles.css       → Estilos
    📁 js/
      📜 auth.js        → Autenticação
      📜 data.js        → Banco de dados
      📜 layout.js      → Layout
      📜 test.js        → Testes
  📄 README.md
  📄 SETUP.md (este arquivo)
```

## 🎯 Funcionalidades

✅ **Autenticação** - Login com email/senha
✅ **Dashboard** - Estatísticas em tempo real
✅ **CRUD Livros** - Criar, ler, editar, deletar
✅ **CRUD Usuários** - Gerenciar leitores
✅ **Empréstimos** - Sistema de controle de empréstimos
✅ **Multas** - Cálculo automático (R$ 2,00/dia)
✅ **Relatórios** - Gráficos e estatísticas
✅ **Responsivo** - Funciona em desktop, tablet e mobile

## 🔒 Segurança

⚠️ **AVISO:** Este é um sistema de demonstração. 

Para um sistema real, você precisaria:
- Implementar backend (Node.js, Python, etc.)
- Usar banco de dados (MongoDB, PostgreSQL, etc.)
- Autenticação segura com JWT
- HTTPS
- Validação de entrada

Atualmente, os dados estão apenas em localStorage do navegador.

---

**Pronto! Seu sistema está funcionando! 🎉**
