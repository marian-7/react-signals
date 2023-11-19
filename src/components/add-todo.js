import { Button, Flex, Input, Stack } from "@mantine/core";
import { v4 as uuidV4 } from "uuid";
import { useState } from "react";
import { todosSignal } from "../signals/todos-signal";

export const AddTodo = () => {
  console.log("Rendering <AddTodo />...");
  const [text, setText] = useState("");

  const onAddTodo = () => {
    const todo = {
      id: uuidV4(),
      text,
      isDone: false,
    };
    todosSignal.value = [todo, ...todosSignal.value];
    setText("");
  };

  const onPressEnter = (e) => {
    if (e.key === "Enter") {
      onAddTodo();
    }
  };

  const resetAll = () => {
    todosSignal.value = [];
  };

  return (
    <Stack maw={300} gap={10} align="center">
      <Flex align="center" gap={10}>
        <Input
          size="sm"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyUp={onPressEnter}
        />
        <Button onClick={onAddTodo}>Add</Button>
      </Flex>
      <Button color="error" onClick={resetAll}>
        Reset All
      </Button>
    </Stack>
  );
};
