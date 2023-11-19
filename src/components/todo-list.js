import { Checkbox, Flex, Stack, Text } from "@mantine/core";
import { todosSignal } from "../signals/todos-signal";

export const TodoList = () => {
  console.log("Rendering <TodoList />...");

  const renderTodo = (todo) => {
    const onChange = (e) => {
      const { checked } = e.target;
      todosSignal.value = todosSignal.value.map((t) => {
        if (t.id === todo.id) {
          return {
            ...t,
            isDone: checked,
          };
        }
        return t;
      });
    };

    return (
      <Flex key={todo.id} align="center" gap={10}>
        <Checkbox checked={todo.isDone} value={todo.id} onChange={onChange} />
        <Text>{todo.text}</Text>
      </Flex>
    );
  };

  return (
    <Stack maw={300} gap={10}>
      {todosSignal.value.map(renderTodo)}
    </Stack>
  );
};
