import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fefae0;
`;
const Header = styled.h1`
  display: block;
  text-align: center;
  font-size: 40px;
  color: #606c38;
`;
const Playground = styled.div`
  width: 60vw;
  height: 500px;
  border-radius: 15px;
  position: relative;
  background-color: #dda15e;
  overflow: hidden;
  padding: 5px;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  /* transform: translate(-50%, -50%); */
  border-radius: 50%;
  transition: ease-out 0.6s;
  white-space: pre-wrap;
`;


const App = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [mouseEnter, setMouseEnter] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);
  const playgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const box = boxRef.current;
    const playground = playgroundRef.current;
    if (mouseEnter && box && playground) {
      // mouse enter
      const rect = playground.getBoundingClientRect();
      const box_x = position.x - rect.left - box.offsetWidth / 2;
      const box_y = position.y - rect.top - box.offsetHeight / 2;
      box.style.left = "0";
      box.style.top = "0";
      box.style.transform = `translate(${box_x}px, ${box_y}px)`;
      return;
    }

    if (box) {
      // mouse leave
      box.style.top = "50%";
      box.style.left = "50%";
      box.style.transform = "translate(-50%, -50%)";
    }
  }, [mouseEnter, position]);

  const catchMouseEnter = (event: any): any => {
    setMouseEnter(true);
  };
  const catchMouseLeave = (event: any): any => {
    setMouseEnter(false);
  };

  return (
    <>
      <Container>
        <Header>Following</Header>
        <Playground
          ref={playgroundRef}
          onMouseEnter={catchMouseEnter}
          onMouseLeave={catchMouseLeave}
        >
          <Box ref={boxRef}>
            <pre style={{ whiteSpace: "pre-wrap" }}>
              {`int main(void) {
  return 0;
}`}
            </pre>
          </Box>
        </Playground>
      </Container>
    </>
  );
};

export default App;
