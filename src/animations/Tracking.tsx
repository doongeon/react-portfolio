import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background: hsl(224, 32%, 12%);
  background-image: conic-gradient(
    from 0deg at 50% 50%,
    blue,
    purple,
    purple,
    blue
  );
  background-blend-mode: multiply;
  color: white;
  min-block-size: 100dvh;
  display: grid;
  place-items: center;
`;
const Card = styled.div`
  padding: 1em 2em;
  background-color: #001219;
  border-radius: 1em;
  font-weight: bold;
  font-size: 2rem;
  text-shadow: 0 0 0.25em currentColor;
  line-height: 1.5em;
  position: relative;

  transform-style: preserve-3d;
  transform: perspective(5000px) rotateY(25deg) rotateX(25deg);

  &::before,
  &::after {
    box-sizing: border-box;
    content: "";
    position: absolute;
    border-radius: inherit;
  }

  &::before {
    inset: 0.1rem;
    background-color: black;
    transform: translateZ(-1.9rem);
    filter: blur(10px);
    opacity: 0.7;
  }

  &::after {
    background-color: yellow;
    inset: -1em;
    background: linear-gradient(-45deg, red, blue);
    transform: translateZ(-2em);
  }
`;
const ColorRed = styled.span`
  color: #ff006e;
`;
const ColorBlue = styled.span`
  color: #3a86ff;
`;
const ColorPurple = styled.span`
  color: #8338ec;
`;
const ColorYellow = styled.span`
  color: #ffbe0b;
`;

const Tracking = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

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
    const middleX = window.innerWidth / 2;
    const middleY = window.innerHeight / 2;

    const offsetX = ((position.x - middleX) / middleX) * 55;
    const offsetY = ((position.y - middleY) / middleX) * 55;

    const card = cardRef.current;
    if (card) {
      card.style.transform = `perspective(5000px) rotateY(${offsetX}deg) rotateX(${-offsetY}deg)`;
    }
  }, [position]);

  return (
    <>
      <Container>
        <Card ref={cardRef}>
          <pre>
            <ColorRed>int</ColorRed> <ColorBlue>main</ColorBlue>(
            <ColorRed>string</ColorRed>[] <ColorYellow>args</ColorYellow>){" "}
            {"{\n"} <ColorBlue>printf</ColorBlue>(
            <ColorPurple>"hello world!"</ColorPurple>);{"\n}"}
          </pre>
        </Card>
      </Container>
    </>
  );
};

export default Tracking;
