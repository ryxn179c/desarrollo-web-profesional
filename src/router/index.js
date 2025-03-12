import { createRouter, createWebHistory } from "vue-router";
import LoginForm from "@/views/LoginForm.vue";
import HomeForm from "@/views/HomeForm.vue";
import RegisterForm from "@/views/RegisterForm.vue";

const routes = [
  { path: "/", component: LoginForm },
  { path: "/home", component: HomeForm },
  { path: "/register", component: RegisterForm },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
