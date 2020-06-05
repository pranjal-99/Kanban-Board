import React from "react";
import "./styles.css";
import EventNoteIcon from "@material-ui/icons/EventNote";

function Navbar() {
  return (
    <div className="navbar_css">
      <h2>
        <EventNoteIcon className="icon" /> ToDo(Kanban Board)
      </h2>
    </div>
  );
}

export default Navbar;
