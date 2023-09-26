import React from "react";

export default function Button() {
  return (
    <>
      {/* Add a button to toggle the theme */}
      <Button variant="primary" onClick={toggleTheme}>
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </Button>
    </>
  );
}
