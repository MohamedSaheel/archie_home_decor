"use client";

import React, { useState, useRef } from 'react';
import { Service } from "./Service";

const Page = () => {
  const [activeTab, setActiveTab] = useState(0);
  const divRefs = [useRef(null), useRef(null), useRef(null)];

  const handleTabClick = (index) => {
    setActiveTab(index);
    divRefs[activeTab]?.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Service
      activeTab={activeTab}
      handleTabClick={handleTabClick}
      divRefs={divRefs}
    />
  );
};

export default Page;
