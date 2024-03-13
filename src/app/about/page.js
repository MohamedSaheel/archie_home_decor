"use client";

import React, { useState, useRef } from 'react';
import About from "./About";

const Page = () => {
  const divRef = useRef(null);
  const [isFullText, setIsFullText] = useState(false);
  const handleReadMore = () => {
    setIsFullText(!isFullText);
    divRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleSlider = () => {
    setIsOpen(!isOpen);
  };
  return (
    <About
      isFullText={isFullText}
      handleReadMore={handleReadMore}
      isOpen={isOpen}
      toggleSlider={toggleSlider}
      divRef={divRef}
    />
  );
};

export default Page;
