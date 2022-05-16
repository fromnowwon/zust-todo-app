import { useTodoStore } from "../../store";
import ListItem from "@mui/material/ListItem";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

// Styles
import { todoType } from "../Todo";

const TodoList = ({ todo }: { todo: todoType }) => {
	const { deleteTodo, completeTodo } = useTodoStore((state) => state);

	return (
		<>
			<ListItem disablePadding sx={{ p: 1 }}>
				<FormGroup>
					<FormControlLabel
						control={
							<Checkbox
								checked={todo.isCompleted ? true : false}
								onClick={() => {
									completeTodo(todo.id);
								}}
							/>
						}
						label={
							<span
								style={{
									textDecoration: todo.isCompleted
										? "line-through"
										: "unset",
								}}
							>
								{todo.text}{" "}
							</span>
						}
					/>
				</FormGroup>
				<Button onClick={() => deleteTodo(todo.id)} color="secondary">
					Delete
				</Button>
			</ListItem>
			<Divider />
		</>
	);
};

export default TodoList;
