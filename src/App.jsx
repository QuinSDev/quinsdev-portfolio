import React, { useState } from "react";
import { Home } from "./page/Home";


function App() {
  const [showDetails, setShowDetails] = useState(false);

  const handleShowDetails = () => {
    setShowDetails(true);
  }

  return (
    <>
      <Home />
    </>
  );
}

export default App;
