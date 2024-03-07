import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  background-color: #081b23;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Face = styled.div`
  padding: 20px 40px;
  background-color: #081b23;
  border: 2px solid #ffd60a;
  color: #ffd60a;
  text-shadow: 0 0 0.125em hsl(0 10% 100% / 0.4), 0 0 1em #ffd60a;
  box-shadow: inset 0 0 0.5em 0 #ffd60a, 0 0 0.5em 0 #ffd60a;
  position: relative;
  transition: ease-in-out 250ms;
  &::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    box-shadow: 0 0 2em 1em #ffd60a;
    opacity: 0.3;
    transition: ease-in-out 250ms;
  }
  &::after {
    pointer-events: none;
    position: absolute;
    content: "";
    top: 5rem;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #ffd60a;
    transform: perspective(4rem) rotateX(40deg) scale(1, 0.35);
    filter: blur(4em);
    opacity: 0.5;
    transition: ease-in-out 250ms;
  }
  &:hover {
    background-color: #ffd60a;
    color: white;
    text-shadow: none;
  }
  &:hover::after{
    opacity: 1;
  }
  &:hover::before {
    opacity: 1;
  }
`;

const Shining = () => {
  return (
    <Container>
      <Face>hello, i am shining</Face>
    </Container>
  );
};

export default Shining;
