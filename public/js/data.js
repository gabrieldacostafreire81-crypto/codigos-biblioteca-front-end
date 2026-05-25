const DEFAULT_DATA = {
  books: [
    { id: "1", title: "Dom Casmurro", author: "Machado de Assis", isbn: "978-85-7232-001", category: "Romance", quantity: 5, available: 3 },
    { id: "2", title: "Grande Sertão: Veredas", author: "Guimarães Rosa", isbn: "978-85-7232-002", category: "Romance", quantity: 3, available: 1 },
    { id: "3", title: "Memórias Póstumas de Brás Cubas", author: "Machado de Assis", isbn: "978-85-7232-003", category: "Romance", quantity: 4, available: 4 },
    { id: "4", title: "O Cortiço", author: "Aluísio Azevedo", isbn: "978-85-7232-004", category: "Naturalismo", quantity: 3, available: 2 },
    { id: "5", title: "Capitães da Areia", author: "Jorge Amado", isbn: "978-85-7232-005", category: "Romance", quantity: 6, available: 5 },
    { id: "6", title: "Vidas Secas", author: "Graciliano Ramos", isbn: "978-85-7232-006", category: "Romance", quantity: 4, available: 0 },
    { id: "7", title: "A Hora da Estrela", author: "Clarice Lispector", isbn: "978-85-7232-007", category: "Romance", quantity: 3, available: 2 },
    { id: "8", title: "Iracema", author: "José de Alencar", isbn: "978-85-7232-008", category: "Indianismo", quantity: 5, available: 4 }
  ],
  users: [
    { id: "1", name: "Ana Silva", email: "ana@email.com", phone: "(11) 99999-1111", registeredAt: "2024-01-15" },
    { id: "2", name: "Carlos Santos", email: "carlos@email.com", phone: "(11) 99999-2222", registeredAt: "2024-02-20" },
    { id: "3", name: "Maria Oliveira", email: "maria@email.com", phone: "(11) 99999-3333", registeredAt: "2024-03-10" },
    { id: "4", name: "João Ferreira", email: "joao@email.com", phone: "(11) 99999-4444", registeredAt: "2024-04-05" },
    { id: "5", name: "Beatriz Costa", email: "beatriz@email.com", phone: "(11) 99999-5555", registeredAt: "2024-05-12" }
  ],
  loans: [
    { id: "1", userId: "1", userName: "Ana Silva", bookId: "1", bookTitle: "Dom Casmurro", loanDate: "2026-03-01", dueDate: "2026-03-15", returnDate: null, fine: 0, status: "overdue" },
    { id: "2", userId: "2", userName: "Carlos Santos", bookId: "2", bookTitle: "Grande Sertão: Veredas", loanDate: "2026-04-01", dueDate: "2026-04-15", returnDate: null, fine: 0, status: "active" },
    { id: "3", userId: "3", userName: "Maria Oliveira", bookId: "6", bookTitle: "Vidas Secas", loanDate: "2026-03-10", dueDate: "2026-03-24", returnDate: "2026-03-22", fine: 0, status: "returned" },
    { id: "4", userId: "1", userName: "Ana Silva", bookId: "4", bookTitle: "O Cortiço", loanDate: "2026-04-05", dueDate: "2026-04-19", returnDate: null, fine: 0, status: "active" },
    { id: "5", userId: "4", userName: "João Ferreira", bookId: "6", bookTitle: "Vidas Secas", loanDate: "2026-02-15", dueDate: "2026-03-01", returnDate: null, fine: 26, status: "overdue" }
  ]
};

const STORAGE_KEY = "biblioteca_data";
const FINE_PER_DAY = 2;

const DB = {
  load() {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) { this.save(DEFAULT_DATA); return JSON.parse(JSON.stringify(DEFAULT_DATA)); }
    try { return JSON.parse(raw); }
    catch { this.save(DEFAULT_DATA); return JSON.parse(JSON.stringify(DEFAULT_DATA)); }
  },
  save(data) { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); },
  reset() { localStorage.removeItem(STORAGE_KEY); },
  newId() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 7); },

  getBooks() { return this.load().books; },
  getBook(id) { return this.getBooks().find(b => b.id === id); },
  saveBook(book) {
    const data = this.load();
    if (book.id) {
      const i = data.books.findIndex(b => b.id === book.id);
      if (i >= 0) data.books[i] = { ...data.books[i], ...book };
    } else {
      book.id = this.newId();
      book.available = book.quantity;
      data.books.push(book);
    }
    this.save(data);
  },
  deleteBook(id) {
    const data = this.load();
    data.books = data.books.filter(b => b.id !== id);
    this.save(data);
  },

  getUsers() { return this.load().users; },
  getUser(id) { return this.getUsers().find(u => u.id === id); },
  saveUser(user) {
    const data = this.load();
    if (user.id) {
      const i = data.users.findIndex(u => u.id === user.id);
      if (i >= 0) data.users[i] = { ...data.users[i], ...user };
    } else {
      user.id = this.newId();
      user.registeredAt = new Date().toISOString().slice(0, 10);
      data.users.push(user);
    }
    this.save(data);
  },
  deleteUser(id) {
    const data = this.load();
    data.users = data.users.filter(u => u.id !== id);
    this.save(data);
  },

  getLoans() {
    const data = this.load();
    const today = new Date().toISOString().slice(0, 10);
    let changed = false;
    data.loans.forEach(loan => {
      if (loan.status === "active" && loan.dueDate < today) {
        const days = Math.floor((new Date(today) - new Date(loan.dueDate)) / (1000 * 60 * 60 * 24));
        loan.status = "overdue";
        loan.fine = days * FINE_PER_DAY;
        changed = true;
      } else if (loan.status === "overdue" && !loan.returnDate) {
        const days = Math.floor((new Date(today) - new Date(loan.dueDate)) / (1000 * 60 * 60 * 24));
        const newFine = Math.max(days * FINE_PER_DAY, 0);
        if (newFine !== loan.fine) { loan.fine = newFine; changed = true; }
      }
    });
    if (changed) this.save(data);
    return data.loans;
  },
  createLoan({ userId, bookId, dueDate }) {
    const data = this.load();
    const user = data.users.find(u => u.id === userId);
    const book = data.books.find(b => b.id === bookId);
    if (!user || !book) return { ok: false, error: "Usuário ou livro inválido." };
    if (book.available <= 0) return { ok: false, error: "Livro indisponível." };

    book.available -= 1;
    const loan = {
      id: this.newId(),
      userId, userName: user.name,
      bookId, bookTitle: book.title,
      loanDate: new Date().toISOString().slice(0, 10),
      dueDate, returnDate: null, fine: 0, status: "active"
    };
    data.loans.push(loan);
    this.save(data);
    return { ok: true, loan };
  },
  returnLoan(id) {
    const data = this.load();
    const loan = data.loans.find(l => l.id === id);
    if (!loan) return { ok: false, error: "Empréstimo não encontrado." };
    if (loan.returnDate) return { ok: false, error: "Já devolvido." };

    loan.returnDate = new Date().toISOString().slice(0, 10);
    const days = Math.floor((new Date(loan.returnDate) - new Date(loan.dueDate)) / (1000 * 60 * 60 * 24));
    loan.fine = days > 0 ? days * FINE_PER_DAY : 0;
    loan.status = "returned";

    const book = data.books.find(b => b.id === loan.bookId);
    if (book) book.available = Math.min(book.quantity, book.available + 1);

    this.save(data);
    return { ok: true, loan };
  },
  payFine(id) {
    const data = this.load();
    const loan = data.loans.find(l => l.id === id);
    if (loan) { loan.fine = 0; this.save(data); }
  }
};
