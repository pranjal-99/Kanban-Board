import React, { useState } from "react";
import "./styles.css";
import Navbar from "./Navbar.js";
import Data from "./Data.js";
import Cards from "./Cards.js";

export default function App() {
  var Names = ["Backlog", "ToDo", "Completed"];

  const [tasks, settask] = useState([]);

  function onAdd(data) {
    settask(prevtask => {
      return [...prevtask, data];
    });
    // console.log(tasks);
  }

  function onDelete(data) {
    // console.log(data);
    settask(prevtask => {
      return [
        ...prevtask.filter(value => {
          return value.task !== data;
        })
      ];
    });
    // console.log(tasks);
    // event.preventDefault();
  }

  function onForward(data, ind) {
    if (ind < 2) {
      tasks.forEach(t => {
        if (t.task === data) {
          t.stage = ind + 1;
        }
      });
      settask(prevtask => {
        return [...tasks];
      });
    }
  }

  function onBackward(data, ind) {
    if (ind > 0) {
      tasks.forEach(t => {
        if (t.task === data) {
          t.stage = ind - 1;
        }
      });
      settask(prevtask => {
        return [...tasks];
      });
    }
  }

  return (
    <div className="App">
      <Navbar />
      <Data onAdd={onAdd} />
      <div className="row row_spacing">
        {Names.map((value, index) => (
          <Cards
            key={index}
            index={index}
            Name={value}
            tasks={tasks}
            onDelete={onDelete}
            forward={onForward}
            backward={onBackward}
          />
        ))}
      </div>
    </div>
  );
}
