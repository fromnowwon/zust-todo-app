import create from "zustand";
import { uid } from "react-uid";

type Store = {
	todos: {
		text: string;
		id: string;
		isCompleted: boolean;
	}[];
	addTodo: (todoText: string) => void;
	deleteTodo: (todoId: string) => void;
	completeTodo: (todoId: string) => void;
};

export const useTodoStore = create<Store>((set) => ({
	todos: localStorage.getItem('todoList') 
		? JSON.parse(localStorage.getItem('todoList') as string) 
		: [],
	addTodo: (todoText) =>
		set((state) => ({
			todos: [
				...state.todos,
				{
					text: todoText,
					id: uid(`${todoText}-${state.todos.length}`),
					isCompleted: false,
				},
			],
		})),
	deleteTodo: (todoId) =>
		set((state) => ({
			todos: state.todos.filter((todo) => todo.id !== todoId),
		})),
	completeTodo: (todoId) =>
		set((state) => ({
			todos: state.todos.map((todo) => {
				if (todo.id === todoId) {
					if (!todo.isCompleted) {
						return {
							...todo,
							isCompleted: true,
						};
					} else {
						return {
							...todo,
							isCompleted: false,
						};
					}
					
				}
				return todo;
			}),
		})),
}));
