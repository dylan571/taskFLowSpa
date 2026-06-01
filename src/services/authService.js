import { storage } from "../utils/storage.js";

const users = [
  {
    id: 1,
    email: "admin@test.com",
    password: "123456",
    role: "ADMIN",
  },
  {
    id: 2,
    email: "user@test.com",
    password: "123456",
    role: "USER",
  },
];

export function login(email, password) {
  const user = users.find(
    (user) => user.email === email && user.password === password,
  );

  if (!user) {
    throw new Error("Credenciales inválidas");
  }

  storage.setSession(user);

  return user;
}
