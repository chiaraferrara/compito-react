import styled from "@emotion/styled";

export const Container = styled.div(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  fontFamily: "Arial, sans-serif",
}));

export const Wrapper = styled.div(() => ({
  display: "flex",
  flexFlow: "row wrap",
  justifyContent: "center",
  alignItems: "center",
  padding: "10px",
  margin: "auto",
}));

export const SingleTask = styled.div<{ isCompleted: boolean }>((props) => ({
  color: props.isCompleted ? "#A574A5" : "#000000",
  textDecoration: props.isCompleted ? "line-through" : "none",
  fontFamily: "Arial, sans-serif",
  width: "50%",
  padding: "10px",
}));

export const Title = styled.h1(() => ({
  textAlign: "center",
  color: "#A574A5",
  fontFamily: "Arial, sans-serif",
}));
