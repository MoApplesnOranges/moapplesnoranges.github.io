import React from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./Navbar";
import Footer from "./Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Footer />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));

export default App;
