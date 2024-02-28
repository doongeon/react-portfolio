import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const Header = styled.h1`
  display: block;
  text-align: center;
  font-size: 40px;
  color: lightgreen;
`;
const Playground = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 15px;
  position: relative;
  background-color: lightyellow;
  overflow: hidden;
  padding: 5px;
`;

const Box = styled.div`
  content: "";
  box-sizing: border-box;
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: lightgreen;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  transition: ease-out 0.6s;
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
      const rect = playground.getBoundingClientRect();
      box.style.left = "0";
      box.style.top = "0";
      const box_x = position.x - rect.left - 10;
      const box_y = position.y - rect.top - 10;
      box.style.transform = `translate(${box_x}px, ${box_y}px)`;
    } else {
      const box = boxRef.current;
      if (box) {
        box.style.top = "50%";
        box.style.left = "50%";
        box.style.transform = "translate(-50%, -50%)";
      }
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
        <Header>Following Dot</Header>
        <Playground
          ref={playgroundRef}
          onMouseEnter={catchMouseEnter}
          onMouseLeave={catchMouseLeave}
        >
          <Box ref={boxRef} />
        </Playground>
      </Container>
    </>
  );
};

export default App;
