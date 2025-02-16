// src/components/Link.jsx

import React from "react";

const Link = ({ to, children }) => {
  const handleClick = (e) => {
    e.preventDefault(); // Prevent the default anchor link behavior
    window.history.pushState({}, "", to); // Change the URL
    window.dispatchEvent(new Event("popstate")); // Trigger the popstate event to update the current path
  };

  return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  );
};

export default Link;
