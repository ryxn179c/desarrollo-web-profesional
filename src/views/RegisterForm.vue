<template>
    <div class="login-container">
        <div class="particles"></div>
        <div class="login-card">
            <h2>Crear Cuenta</h2>
            <form @submit.prevent="handleRegister">
                <div class="form-grid">
                    <div class="input-group">
                        <label for="username">Usuario</label>
                        <input v-model="user.username" id="username" placeholder="Ingrese su usuario" required />
                    </div>
                    <div class="input-group">
                        <label for="firstName">Nombre</label>
                        <input v-model="user.firstName" id="firstName" placeholder="Ingrese su nombre" required />
                    </div>
                    <div class="input-group">
                        <label for="lastName">Apellido</label>
                        <input v-model="user.lastName" id="lastName" placeholder="Ingrese su apellido" required />
                    </div>
                    <div class="input-group">
                        <label for="email">Correo Electrónico</label>
                        <input v-model="user.email" id="email" type="email" placeholder="Ingrese su correo" required />
                    </div>
                    <div class="input-group">
                        <label for="phone">Teléfono</label>
                        <input v-model="user.phone" id="phone" placeholder="Ingrese su teléfono" />
                    </div>
                    <div class="input-group">
                        <label for="position">Puesto</label>
                        <input v-model="user.position" id="position" placeholder="Ingrese su puesto" required />
                    </div>
                    <div class="input-group">
                        <label for="department">Departamento</label>
                        <input v-model="user.department" id="department" placeholder="Ingrese su departamento"
                            required />
                    </div>
                    <div class="input-group">
                        <label for="hireDate">Fecha de Contratación</label>
                        <input v-model="user.hireDate" id="hireDate" type="date" required />
                    </div>
                    <div class="input-group">
                        <label for="password">Contraseña</label>
                        <input v-model="user.password" id="password" type="password" placeholder="Ingrese su contraseña"
                            required />
                    </div>
                </div>
                <button type="submit">Crear Cuenta</button>
                <!-- Mensaje de error -->
                <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
            </form>
            <div class="create-account-link">
                <p>¿Ya tienes cuenta? <router-link to="/">Iniciar sesión</router-link></p>
            </div>
        </div>

        <!-- Card de éxito -->
        <div v-if="showSuccessMessage" class="success-message-card">
            <p>Registro exitoso</p>
        </div>
    </div>
</template>

<script>
import api from "@/api/api.js";

export default {
    data() {
        return {
            user: {
                username: "",
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                position: "",
                department: "",
                hireDate: "",
                password: "",
            },
            errorMessage: "",
            showSuccessMessage: false,
        };
    },
    methods: {
        async handleRegister() {
            try {
                // Asegúrate de que la contraseña esté presente antes de enviarla
                if (!this.user.password || this.user.password.trim() === "") {
                    this.errorMessage = "La contraseña no puede estar vacía.";
                    return;
                }

                // Creamos un objeto con todos los datos menos la contraseña
                const userToRegister = {
                    ...this.user,
                    passwordHash: this.user.password // Asignamos la contraseña al campo passwordHash
                };

                // Realiza la solicitud de registro con la contraseña en passwordHash
                const response = await api.register(userToRegister);

                if (response.success) {
                    // Muestra el mensaje de éxito
                    this.showSuccessMessage = true;

                    // Después de 3 segundos, redirige al home
                    setTimeout(() => {
                        this.$router.push("/home");
                    }, 3000);
                } else {
                    this.errorMessage = response.message || "Ocurrió un error al registrar el usuario.";
                }
            } catch (error) {
                // Captura cualquier error
                this.errorMessage = error.response?.data?.message || "Ocurrió un error al registrar el usuario.";
            }
        },
    },
};
</script>

<style scoped>
/* 🌌 Fondo con degradado animado */
.login-container {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #141e30, #243b55);
    overflow: hidden;
    position: relative;
    padding: 0px;
}

/* 🎇 Partículas animadas en el fondo */
.particles {
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.15) 10%, transparent 20%);
    background-size: 50px 50px;
    animation: movingParticles 8s linear infinite;
}

@keyframes movingParticles {
    from {
        transform: translateX(0) translateY(0);
    }

    to {
        transform: translateX(-50px) translateY(-50px);
    }
}

/* 💳 Tarjeta de registro centrada con efecto Glassmorphism */
.login-card {
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    text-align: center;
    width: 100%;
    max-width: 1520px;
    color: #fff;
    animation: fadeIn 0.8s ease-in-out;
    z-index: 2;
}

/* ✨ Animación de aparición */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* 📌 Inputs estilizados */
.input-group {
    margin-bottom: 1.2rem;
    text-align: left;
}

.input-group label {
    display: block;
    margin-bottom: 0.3rem;
    color: #f1f1f1;
    font-weight: bold;
}

.input-group input {
    width: 100%;
    padding: 12px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.1);
    color: white;
    font-size: 1rem;
    transition: all 0.3s ease;
}

/* Grilla con 3 columnas */
.form-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
}

.input-group input:focus {
    border-color: #00c6ff;
    outline: none;
}

/* 🔘 Botón con efecto */
button {
    width: 300px;
    padding: 12px;
    background: linear-gradient(135deg, #00c6ff, #0072ff);
    color: white;
    font-size: 1rem;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    box-shadow: 0 4px 10px rgba(0, 198, 255, 0.3);
    display: block;
    margin: 1.5rem auto;
}

button:hover {
    background: linear-gradient(135deg, #0072ff, #00c6ff);
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(0, 198, 255, 0.5);
}

button:active {
    transform: translateY(0);
    box-shadow: 0 4px 10px rgba(0, 198, 255, 0.3);
}

/* 🚨 Mensaje de error */
.error {
    color: #ff4f4f;
    margin-top: 1rem;
    font-size: 0.9rem;
}

/* 💬 Placeholder en color blanco */
.input-group input::placeholder {
    color: white;
    opacity: 0.7;
}

/* 💫 Card de mensaje de éxito */
.success-message-card {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(255, 255, 255, 0.8);
    padding: 1rem 2rem;
    border-radius: 8px;
    color: rgb(0, 0, 0);
    text-align: center;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
    z-index: 10;
    animation: fadeOut 4s forwards;
}

@keyframes fadeOut {
    0% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        visibility: hidden;
    }
}

.create-account-link {
    margin-top: 1rem;
    text-align: center;
}

.create-account-link a {
    color: #00c6ff;
    text-decoration: none;
    font-weight: bold;
    font-size: 0.9rem;
}

.create-account-link a:hover {
    text-decoration: underline;
}
</style>
