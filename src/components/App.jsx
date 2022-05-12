import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import AddNote from "./AddNote";

function App() {
  return (
    <div>
      <Header />
      <AddNote />
      <Note />
      <Footer />
    </div>
  );
}

export default App;
