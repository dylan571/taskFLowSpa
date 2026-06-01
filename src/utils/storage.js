export const storage = {
    setSession(user) {
        localStorage.setItem("session", JSON.stringify(user));
    },
    getSession() {
        return JSON.parse(localStorage.getItem("session"));
    },

    clearSession() {
        localStorage.removeItem("session");
    },
};
