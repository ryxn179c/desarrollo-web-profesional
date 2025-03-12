<template>
  <div>
    <!-- Navbar -->
    <nav>
      <div class="nav-left">
        <span>Bienvenido, {{ username }}</span>
      </div>
      <div class="nav-right">
        <button @click="logout">Cerrar sesión</button>
      </div>
    </nav>

    <h2 style="text-align: center;">Lista de Usuarios</h2>

    <!-- Tabla de Usuarios -->
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Teléfono</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.Id">
            <td>{{ user.FirstName }} {{ user.LastName }}</td>
            <td>{{ user.Email }}</td>
            <td>{{ user.Phone }}</td>
            <td>
              <button @click="editUser(user)">Editar</button>
              <button @click="deleteUser(user.Id)">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Botón Agregar Empleado -->
    <div class="button-container">
      <button @click="showAddModal = true">Agregar Usuario</button>
    </div>

    <!-- Modal de Edición -->
    <div v-if="showEditModal" class="modal">
      <div class="modal-content">
        <h3>Editar Usuario</h3>
        <form @submit.prevent="updateUser">
          <div>
            <label for="firstName">Nombre:</label>
            <input type="text" v-model="editedUser.FirstName" id="firstName" required />
          </div>
          <div>
            <label for="lastName">Apellido:</label>
            <input type="text" v-model="editedUser.LastName" id="lastName" required />
          </div>
          <div>
            <label for="email">Correo:</label>
            <input type="email" v-model="editedUser.Email" id="email" required />
          </div>
          <div>
            <label for="phone">Teléfono:</label>
            <input type="text" v-model="editedUser.Phone" id="phone" required />
          </div>
          <button type="submit">Guardar Cambios</button>
          <button type="button" @click="closeEditModal">Cancelar</button>
        </form>
      </div>
    </div>

    <!-- Modal de Agregar Usuario -->
    <div v-if="showAddModal" class="modal">
      <div class="modal-content">
        <h2>Agregar Usuario</h2>
        <form @submit.prevent="addUser">
          <div class="form-grid">
            <div class="input-group">
              <label for="username">Usuario</label>
              <input v-model="newUser.username" id="username" required />
            </div>
            <div class="input-group">
              <label for="firstName">Nombre</label>
              <input v-model="newUser.firstName" id="firstName" required />
            </div>
            <div class="input-group">
              <label for="lastName">Apellido</label>
              <input v-model="newUser.lastName" id="lastName" required />
            </div>
            <div class="input-group">
              <label for="email">Correo Electrónico</label>
              <input v-model="newUser.email" id="email" type="email" required />
            </div>
            <div class="input-group">
              <label for="phone">Teléfono</label>
              <input v-model="newUser.phone" id="phone" />
            </div>
            <div class="input-group">
              <label for="position">Puesto</label>
              <input v-model="newUser.position" id="position" required />
            </div>
            <div class="input-group">
              <label for="department">Departamento</label>
              <input v-model="newUser.department" id="department" required />
            </div>
            <div class="input-group">
              <label for="hireDate">Fecha de Contratación</label>
              <input v-model="newUser.hireDate" id="hireDate" type="date" required />
            </div>
            <div class="input-group">
              <label for="password">Contraseña</label>
              <input v-model="newUser.password" id="password" type="password" required />
            </div>
          </div>
          <button type="submit">Guardar</button>
          <button type="button" @click="closeAddModal">Cancelar</button>
        </form>
      </div>
    </div>
  </div>

  <!-- Modal de confirmación para eliminación -->
  <div v-if="showModal" class="modal">
    <div class="modal-content">
      <p>¿Seguro que deseas eliminar este usuario?</p>
      <button @click="confirmDelete">Sí</button>
      <button @click="closeModal">No</button>
    </div>
  </div>
</template>

<script>
import api from "@/api/api.js";

export default {
  data() {
    return {
      users: [],
      showModal: false,
      showEditModal: false,
      showAddModal: false,
      userToDelete: null,
      editedUser: null,
      newUser: { FirstName: '', LastName: '', Email: '', Phone: '' },
      username: '',
    };
  },
  async mounted() {
    try {
      this.username = localStorage.getItem("username") || "Invitado";
      const usersResponse = await api.getUsers();
      this.users = usersResponse;
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
    }
  },
  methods: {
    editUser(user) {
      this.editedUser = { ...user };
      this.showEditModal = true;
    },
    closeEditModal() {
      this.showEditModal = false;
      this.editedUser = null;
    },
    async updateUser() {
      try {
        const response = await api.updateUser(this.editedUser.Id, this.editedUser);
        if (response.success) {
          const index = this.users.findIndex(user => user.Id === this.editedUser.Id);
          if (index !== -1) {
            this.users[index] = { ...this.editedUser };
          }
          this.closeEditModal();
          alert("Usuario actualizado correctamente");
        }
      } catch (error) {
        console.error("Error al actualizar el usuario:", error);
      }
    },
    deleteUser(id) {
      this.showModal = true;
      this.userToDelete = id;
    },
    closeModal() {
      this.showModal = false;
      this.userToDelete = null;
    },
    async confirmDelete() {
      if (this.userToDelete !== null) {
        const response = await api.deleteUser(this.userToDelete);
        if (response.success) {
          alert("Usuario eliminado correctamente");
          this.users = this.users.filter(user => user.Id !== this.userToDelete);
          this.closeModal();
        }
      }
    },
    closeAddModal() {
      this.showAddModal = false;
      this.newUser = { FirstName: '', LastName: '', Email: '', Phone: '' };
    },
    async addUser() {
  try {
    const response = await api.register({
      ...this.newUser,
      passwordHash: this.newUser.password,
    });

    console.log("Respuesta de la API:", response);

    if (response.success) {
      alert("Usuario agregado correctamente");

      const newUserObject = {
        Id: response.data?.Id || Date.now(),
        FirstName: this.newUser.firstName,
        LastName: this.newUser.lastName,
        Email: this.newUser.email,
        Phone: this.newUser.phone,
      };

      this.users.push(newUserObject);

      // Cerrar modal y limpiar formulario
      this.showAddModal = false;
      this.newUser = {
        username: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        position: "",
        department: "",
        hireDate: "",
        password: "",
      };
    } else {
      console.error("Error en la respuesta de la API:", response);
      alert("Error al agregar usuario: " + (response.message || "Error desconocido"));
    }
  } catch (error) {
    console.error("Error en la petición:", error);
    alert("Ocurrió un error al agregar usuario.");
  }
}
,
    logout() {
      localStorage.removeItem("username");
      localStorage.removeItem("token");
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
/* Navbar */
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: black;
  color: white;
}

.nav-left {
  font-size: 18px;
}

.nav-right {
  display: flex;
  align-items: center;
}

.nav-right button {
  padding: 8px 16px;
  cursor: pointer;
  background-color: black;
  color: white;
  border: 1px solid white;
  border-radius: 5px;
}

.nav-right button:hover {
  background-color: #444;
}

/* Tabla */
.table-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

table {
  width: 80%;
  border-collapse: collapse;
  text-align: center;
}

th,
td {
  padding: 10px;
  border: 1px solid #ddd;
}

thead {
  background-color: black;
  color: white;
}

tbody tr {
  background-color: white;
  color: black;
}

tbody tr:nth-child(even) {
  background-color: #f2f2f2;
}

button {
  padding: 8px 16px;
  margin: 5px;
  cursor: pointer;
  background-color: black;
  color: white;
  border: 1px solid white;
  border-radius: 5px;
}

button:hover {
  background-color: #444;
}

/* Modal */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}

form div {
  margin-bottom: 10px;
}

form input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

/* Botón Agregar */
.button-container {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.button-container button {
  background-color: black;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}
</style>
