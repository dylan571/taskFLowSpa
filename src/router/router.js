// importamos las rutas y los guards
import { routes, notFound } from "./routes.js";
import { isAuthenticated, isAdmin } from "./guards.js";
import { setupLogin } from "../views/login.js";
import { setupTasks } from "../views/tasks.js";
import { setupTaskForm } from "../views/task-form.js";

const app = document.getElementById("app");
// Función para navegar a una ruta específica
export function navigate(path) {
  history.pushState({}, "", path);
  renderRoute();
}
// Función para renderizar la vista correspondiente a la ruta actual
export function renderRoute() {
  const path = window.location.pathname;

  console.log("Ruta actual:", path);

  if (path !== "/" && path !== "/login" && !isAuthenticated()) {
    history.replaceState({}, "", "/login");
    app.innerHTML = routes["/login"]();
    setupLinks();
    setupLogin();
    return;
  }

  if (path === "/admin" && !isAdmin()) {
    history.replaceState({}, "", "/dashboard");
    app.innerHTML = routes["/dashboard"]();
    setupLinks();
    return;
  }

  const view = routes[path];
  // Si no hay una ruta definida, mostrar la página 404
  if (!view) {
    app.innerHTML = notFound();
    setupLinks();
    return;
  }
  // Renderizar la vista correspondiente a la ruta actual.
  app.innerHTML = view();

  setupLinks();
  // Si la ruta es "/login", configurar el formulario de inicio de sesión
  if (path === "/login") {
    setupLogin();
  }
  // Si la ruta es "/tasks", configurar la vista de tareas
  if (path === "/tasks") {
  setupTasks();
  }
  // Si la ruta es "/tasks/new", configurar el formulario de tareas
  if (path === "/tasks/new" || path === "/tasks/edit") {
    setupTaskForm();
  }
}
// Escuchar cambios en el historial para renderizar la vista correcta
window.addEventListener("popstate", renderRoute);
// Configurar los enlaces para navegar sin recargar la página
function setupLinks() {
  document.querySelectorAll("a[href]").forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");

      if (!href.startsWith("/")) return;

      e.preventDefault();

      navigate(href);
    });
  });
}