import { storage } from "../utils/storage.js";
import { getUsers } from "./api.js";

export async function login(email, password) {
  const users = await getUsers();
  
  const user = users.find(
    (user) => user.email === email && user.password === password,
  );

  if (!user) {
    throw new Error("Credenciales inválidas");
  }

  storage.setSession(user);

  return user;
}

export function logout() {
  storage.clearSession();
}