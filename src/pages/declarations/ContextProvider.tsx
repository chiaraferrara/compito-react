import { ReactNode, useState } from "react";
import { createContext } from "react";
import { TContext, Todo } from "./declarations";

export const AppContext = createContext<TContext>({
  data: [],
  completeTodo: (id: number) => {},
  fetchData: () => {},
  removeTodo: (id: number) => {},
});

interface Props {
  children: ReactNode;
}

export function ContextProvider({ children }: Props) {
  const [data, setData] = useState<Todo[]>([]);

  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    const todos = posts.map((todo: any) => ({
      id: todo.id,
      title: todo.title,
      completed: false,
    }));
    setData(todos);
  };

  const completeTodo = (id: number) => {
    const newTodos = data.map((todo: Todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setData(newTodos);
  };

  const removeTodo = (id: number) => {
    const newTodos = data.filter((todo: Todo) => todo.id !== id);
    setData(newTodos);
  };

  return (
    <AppContext.Provider value={{ data, completeTodo, fetchData, removeTodo }}>
      {children}
    </AppContext.Provider>
  );
}
