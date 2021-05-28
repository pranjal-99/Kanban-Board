import React from "react";
import "./styles.css";
import { Card, ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import DeleteIcon from "@material-ui/icons/Delete";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

export default function Cards(props) {
  return (
    <div className="col-lg-4" key={props.index}>
      <Card className="card" style={{ width: "18rem" }}>
        <Card.Header>{props.Name}</Card.Header>
        <ListGroup className="cardHolder" variant="flush">
          {props.tasks
            .filter(value => value.stage === props.index)
            .map((filteredvalue, index) => (
              <ListGroup.Item key={index}>
                <div className="row">
                  <div className="col">{filteredvalue.task}</div>
                  <div className="col">
                    <ArrowBackIcon
                      className="spacing"
                      onClick={() =>
                        props.backward(filteredvalue.task, filteredvalue.stage)
                      }
                    />
                    <ArrowForwardIcon
                      onClick={() =>
                        props.forward(filteredvalue.task, filteredvalue.stage)
                      }
                    />
                    <DeleteIcon
                      onClick={() => props.onDelete(filteredvalue.task)}
                    />
                  </div>
                </div>
              </ListGroup.Item>
            ))}
        </ListGroup>
      </Card>
    </div>
  );
}
