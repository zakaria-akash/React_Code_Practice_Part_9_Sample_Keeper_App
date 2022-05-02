import React from "react";
import EntryCard from "./EntryCard";
import Notes from "../notes.js";

function InitEntry(Notes) {
  return (
    <EntryCard key={Notes.key} title={Notes.title} content={Notes.content} />
  );
}

function Note() {
  return <div> {Notes.map(InitEntry)} </div>;
}

export default Note;
