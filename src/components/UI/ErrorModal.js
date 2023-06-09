import React from "react";
import Button from "./Button";
import Card from "./Card";
function ErrorModal(props) {
  return (
    <div>
      <div className="backdrop" onClick={props.onConfirm}>
        <Card className="modal">
          <header className="header">
            <h2>{props.title}</h2>
          </header>
          <div>
            <p className="content">{props.message}</p>
          </div>
          <footer className="actions">
            <Button onClick={props.onConfirm}>Okay</Button>
          </footer>
        </Card>
      </div>
    </div>
  );
}

export default ErrorModal;
