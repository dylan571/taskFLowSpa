import { renderHome } from "../views/home.js";
import { renderLogin } from "../views/login.js";
import { renderDashboard } from "../views/dashboard.js";
import { renderProfile } from "../views/profile.js";
import { renderTask } from "../views/tasks.js";
import { renderTaskForm } from "../views/task-form.js";
import { renderAdmin } from "../views/admin.js";
import { renderFound } from "../views/not-found.js";
import { renderRegister } from "../views/register.js";
// Definimos las rutas de la aplicación, cada ruta corresponde a una función que renderiza la vista correspondiente.
export const routes = {
  "/": renderHome,
  "/login": renderLogin,
  "/dashboard": renderDashboard,
  "/profile": renderProfile,
  "/tasks": renderTask,
  "/tasks/new": renderTaskForm,
  "/admin": renderAdmin,
  "/register": renderRegister,
  "/home": renderHome,
  "/tasks/edit": renderTaskForm,
};

export const notFound = renderFound;
