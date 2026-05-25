const AUTH_KEY = "biblioteca_user";

const Auth = {
  login(email, password) {
    if (email === "admin@biblioteca.com" && password === "admin123") {
      const user = { id: "1", name: "Administrador", email, role: "admin" };
      localStorage.setItem(AUTH_KEY, JSON.stringify(user));
      return true;
    }
    return false;
  },
  logout() {
    localStorage.removeItem(AUTH_KEY);
    window.location.href = "/login.html";
  },
  isAuthenticated() {
    return !!localStorage.getItem(AUTH_KEY);
  },
  getUser() {
    const raw = localStorage.getItem(AUTH_KEY);
    return raw ? JSON.parse(raw) : null;
  },
  requireAuth() {
    if (!this.isAuthenticated()) window.location.href = "/login.html";
  }
};
