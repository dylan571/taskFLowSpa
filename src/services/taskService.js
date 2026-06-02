import { API_URL } from "./api.js";

export async function getTasks() {
  const response = await fetch(`${API_URL}/tasks`);

  if (!response.ok) {
    throw new Error("Error al obtener tareas");
  }

  return response.json();
}