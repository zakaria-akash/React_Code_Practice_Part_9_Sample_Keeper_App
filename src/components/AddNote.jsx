import React, { useState } from "react";
import EntryCard from "./EntryCard";
function AddNote() {
  const [newNote, setNewNote] = useState([]);
  let newTitle;
  let newContent;
  let newObject = {
    title: "",
    content: ""
  };
  function collectNewTitle(e) {
    newTitle = e.target.value;
  }
  function collectNewContent(e) {
    newContent = e.target.value;
  }
  function createANote(ev) {
    newObject.title = newTitle;
    newObject.content = newContent;
    setNewNote((oldItems) => {
      return [...oldItems, newObject];
    });
    ev.preventDefault();
  }
  return (
    <div>
      <form onSubmit={createANote}>
        <input
          onChange={collectNewTitle}
          name="title"
          placeholder="Title"
          aria-required="true"
          value={newTitle}
        />
        <textarea
          onChange={collectNewContent}
          name="content"
          placeholder="Take a note..."
          rows="3"
          aria-required="true"
          value={newContent}
        />
        <button>Add Note</button>
      </form>
      <div>
        {newNote.map((item) => (
          <EntryCard key={item.key} title={item.title} content={item.content} />
        ))}
      </div>
    </div>
  );
}

export default AddNote;
