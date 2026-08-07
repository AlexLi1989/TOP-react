export function createTodo(text, completed = false) {
  return {
    id: crypto.randomUUID(),
    text,
    completed,
  };
}

export const initialTodos = [
  { id: "initial-todo-apples", text: "Get apples", completed: true },
  { id: "initial-todo-oranges", text: "Get oranges", completed: true },
  { id: "initial-todo-carrots", text: "Get carrots", completed: false },
];
