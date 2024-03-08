import { useContext, useEffect } from "react";
import { AppContext } from "./declarations/ContextProvider";
import { Button, ButtonGroup, Container } from "@mui/material";
import { SingleTask, Title, Wrapper } from "@/styles/globals";

export default function Home() {
  const { data } = useContext(AppContext);
  const { fetchData } = useContext(AppContext);
  const { completeTodo, removeTodo } = useContext(AppContext);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Title>Todo List</Title>
      <Container>
        {data.map((task: any, index: number) => (
          <div key={index}>
            <div>
              <Wrapper>
                <ButtonGroup
                  color="secondary"
                  orientation="vertical"
                  size="small"
                  variant="text"
                >
                  {!task.completed ? (
                    <Button
                      onClick={() => {
                        completeTodo(task.id);
                      }}
                    >
                      Completed
                    </Button>
                  ) : (
                    <Button
                      onClick={() => {
                        completeTodo(task.id);
                      }}
                    >
                      Not Completed
                    </Button>
                  )}
                  <Button
                    onClick={() => {
                      removeTodo(task.id);
                    }}
                  >
                    Delete
                  </Button>
                </ButtonGroup>
                <SingleTask isCompleted={task.completed}>
                  {task.title}
                </SingleTask>
              </Wrapper>
            </div>
          </div>
        ))}
      </Container>
    </>
  );
}
