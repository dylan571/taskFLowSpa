import { logout } from "../services/authService.js";
import { navigate } from "../router/router.js";

export function createNavbar() {
    return `
        <nav class="navbar">
            <ul class="nav-links">
                <li class="nav-item">
                    <button id="logout-btn" class="nav-link">Logout</button>
                </li>
            </ul>
        </nav>
    `;
}

export function setupNavbar() {
    const logoutBtn = document.getElementById("logout-btn");
    if (!logoutBtn) return;

        logoutBtn.addEventListener("click", () => {
            logout();
            navigate("/login");
        });
    }
