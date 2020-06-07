import React, { useState } from "react";
import "./styles.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Data(props) {
  const [data, Setdata] = useState({
    task: "",
    stage: 0
  });

  const [add, setadd] = useState(false);

  function storedata(event) {
    const { name, value } = event.target;
    setadd(false);
    let obj = { [name]: value, stage: 0 };
    Setdata(prevdata => {
      return obj;
    });
    console.log(data);
  }
  function transfer(event) {
    props.onAdd(data);
    setadd(true);
    let obj = { task: "", stage: 0 };
    Setdata(prevdata => {
      return obj;
    });
    event.preventDefault();
  }

  return (
    <div className="Data">
      <input
        className="input"
        onChange={storedata}
        name="task"
        value={add ? "" : data.task}
        placeholder="Enter Task"
      />{" "}
      <Button onClick={transfer} variant="secondary" size="sm" type="submit" disabled={data.task.length>0?false:true}>
        Submit
      </Button>
    </div>
  );
}
