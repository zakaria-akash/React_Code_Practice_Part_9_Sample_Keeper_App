import React from "react";

function AddNote() {
  return (
    <div>
      <form>
        <input name="title" placeholder="Title" />
        <textarea name="content" placeholder="Take a note..." rows="3" />
        <button>Add Note</button>
      </form>
    </div>
  );
}

export default AddNote;
