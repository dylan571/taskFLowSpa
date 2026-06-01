import { routes, notFound } from "./routes.js";
import { isAuthenticated, isAdmin } from "./guards.js";

const app = document.getElementById("app");

export function navigate(path) {
  history.pushState({}, "", path);
  renderRoute();
}

export function renderRoute() {
  const path = window.location.pathname;

  if (path !== "/" && path !== "/login" && !isAuthenticated()) {
    history.replaceState({}, "", "/login");
    app.innerHTML = routes["/login"]();
    return;
  }

  if (path === "/admin" && !isAdmin()) {
    history.replaceState({}, "", "/dashboard");
    app.innerHTML = routes["/dashboard"]();
    return;
  }

  const view = routes[path];

  if (!view) {
    app.innerHTML = notFound();
    return;
  }

  app.innerHTML = view();
}

window.addEventListener("popstate", renderRoute);
