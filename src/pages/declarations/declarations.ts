export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface TContext {
  data: Todo[];
  completeTodo: (id: number) => void;
  fetchData: () => void;
  removeTodo: (id: number) => void;
}
