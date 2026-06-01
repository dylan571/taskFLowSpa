import { storage } from "../utils/storage.js";

export function isAuthenticated() {
  return !!storage.getSession();
}

export function isAdmin() {
  const user = storage.getSession();

  return user?.role === "ADMIN";
}
