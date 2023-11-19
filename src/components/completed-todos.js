import { Flex, Text } from "@mantine/core";
import { completedTodoCount } from "../signals/todos-signal";

export const CompletedTodos = () => {
  console.log("Rendering <CompletedTodos />...");
  return (
    <Flex gap={10}>
      <Text>Completed Todos:</Text>
      <Text c="primary">{completedTodoCount}</Text>
    </Flex>
  );
};
