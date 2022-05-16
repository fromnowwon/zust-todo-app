import { useState } from "react";
import { useTodoStore } from "../../store";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const Add = () => {
	const { addTodo } = useTodoStore((state) => state);
	const [todoVal, setTodoVal] = useState("");

	const handleSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		if (!todoVal) return;

		addTodo(todoVal);

		// 입력창 초기화
		setTodoVal("");
	};

	return (
		<Box component="div" sx={{ textAlign: "center" }}>
			<form onSubmit={handleSubmit}>
				<TextField
					id="new-todo"
					label="To Do"
					variant="filled"
					onChange={(e) => setTodoVal(e.target.value)}
					value={todoVal}
				/>

				<Button
					type="submit"
					variant="contained"
					size="large"
					sx={{ ml: 1, height: "56px", fontSize: "1.5rem" }}
				>
					+
				</Button>
			</form>
		</Box>
	);
};

export default Add;
