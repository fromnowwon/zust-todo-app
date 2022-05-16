import { useEffect } from "react";
import { useTodoStore } from "../store";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
// Components
import Add from "./Sections/Add";
import TodoList from "./Sections/TodoList";

export type todoType = {
	id: string;
	isCompleted: boolean;
	text: string;
};

const Todo = () => {
	const { todos } = useTodoStore((state) => state);

	useEffect(() => {
		localStorage.setItem("todoList", JSON.stringify(todos));
	}, [todos]);

	return (
		<>
			<h1>🐳 Zust To-Do App</h1>
			<Box sx={{ width: "100%" }}>
				<Add />
				<List sx={{ mt: 3 }}>
					{todos.map((todo: todoType) => (
						<TodoList todo={todo} key={todo.id} />
					))}
				</List>
			</Box>
		</>
	);
};

export default Todo;
