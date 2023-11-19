import "./App.css";
import "@mantine/core/styles.css";
import { MantineProvider, Title, Stack } from "@mantine/core";
import { theme } from "./theme";
import { AddTodo } from "./components/add-todo";
import { TodoList } from "./components/todo-list";
import { CompletedTodos } from "./components/completed-todos";

function App() {
  console.log("Rendering <App />...");

  return (
    <MantineProvider theme={theme}>
      <div className="main-container">
        <Stack gap={30} align="center">
          <Title order={1}>React Signals</Title>
          <CompletedTodos />
          <AddTodo />
          <TodoList />
        </Stack>
      </div>
    </MantineProvider>
  );
}

export default App;
