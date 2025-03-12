const API_URL = "http://192.168.1.205:8179/api/auth";

export default {
  async register(user) {
    if (!user.password || user.password.trim() === "") {
      throw new Error("La contraseña no puede estar vacía.");
    }
    const response = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    return response.json();
  },

  async login(user) {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: user.username,
        passwordHash: user.password,
      }),
    });
    return response.json();
  },

  async getUsers() {
    const response = await fetch(`${API_URL}/users`);
    return response.json();
  },

  async getUser(id) {
    const response = await fetch(`${API_URL}/user/${id}`);
    return response.json();
  },

  async updateUser(id, user) {
    const response = await fetch(`${API_URL}/user/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    return response.json();
  },

  async deleteUser(id) {
    const response = await fetch(`${API_URL}/user/${id}`, { method: "DELETE" });
    return response.json();
  },
};
