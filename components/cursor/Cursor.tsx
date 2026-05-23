"use client";

import { useEffect, useState } from "react";
import "./Cursor.css";

export default function Cursor() {

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [hovered, setHovered] = useState(false);

  useEffect(() => {

    const moveCursor = (e: MouseEvent) => {

      setPosition({
        x: e.clientX,
        y: e.clientY,
      });

    };

    const handleMouseOver = (e: Event) => {

      const target = e.target as HTMLElement;

      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("button") ||
        target.closest("a")
      ) {

        setHovered(true);

      } else {

        setHovered(false);

      }

    };

    window.addEventListener(
      "mousemove",
      moveCursor
    );

    document.addEventListener(
      "mouseover",
      handleMouseOver
    );

    return () => {

      window.removeEventListener(
        "mousemove",
        moveCursor
      );

      document.removeEventListener(
        "mouseover",
        handleMouseOver
      );

    };

  }, []);

  return (

    <div
      className={`custom-cursor ${
        hovered ? "cursor-hover" : ""
      }`}
      style={{
        transform:
          `translate3d(${position.x}px, ${position.y}px, 0)`
      }}
    />

  );
}