import React from "react";
import EntryCard from "./EntryCard";
import Notes from "../notes.js";

// function InitEntry(noteItem) {
//   return (
//     <EntryCard
//       key={noteItem.key}
//       title={noteItem.title}
//       content={noteItem.content}
//     />
//   );
// }

// function Note() {
//   return <div> {Notes.map(InitEntry)} </div>;
// }

//applying of javascript arrow function:

function Note() {
  return (
    <div className="entireNote">
      {Notes.map((item) => (
        <EntryCard key={item.key} title={item.title} content={item.content} />
      ))}
    </div>
  );
}

export default Note;
