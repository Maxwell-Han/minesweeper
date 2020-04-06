import React, { useState } from "react";
import { Form, Row, Col, Button, Popover } from "react-bootstrap";

function GameSelect(props) {
  const { raiseNewGame, handleHide } = props;
  const [gameChoice, setGameChoice] = useState("easy");
  const [selection, setSelection] = useState({
    easy: false,
    intermediate: false,
    expert: false,
    custom: false,
  });
  const [customObj, setCustom] = useState({
    customW: 9,
    customH: 9,
    customBombs: 9,
  });

  return (
    <Form className="game-menu">
      <Form.Label className="menu-label">Select Game Size: </Form.Label>
      <Form.Row>
        <Col></Col>
        <Col>Height</Col>
        <Col>Width</Col>
        <Col>Mines</Col>
      </Form.Row>
      <Form.Row>
        <Col>
          <Form.Check
            type={"radio"}
            id="easy"
            label="Easy"
            checked={selection.easy}
          />
        </Col>
        <Col>9</Col>
        <Col>9</Col>
        <Col>10</Col>
      </Form.Row>
      <Form.Row>
        <Col>
          <Form.Check
            type={"radio"}
            id="intermediate"
            label="Intermediate"
            checked={selection.intermediate}
          />
        </Col>
        <Col>16</Col>
        <Col>16</Col>
        <Col>40</Col>
      </Form.Row>
      <Form.Row>
        <Col>
          <Form.Check
            type={"radio"}
            id="expert"
            label="Expert"
            checked={selection.expert}
          />
        </Col>
        <Col>16</Col>
        <Col>30</Col>
        <Col>99</Col>
      </Form.Row>
      <Form.Row>
        <Col>
          <Form.Check
            type={"radio"}
            id="custom"
            label="Custom"
            checked={selection.custom}
          />
        </Col>
        <Col>
          <Form.Control
            type="number"
            id="customH"
            min={9}
            max={50}
            value={customObj.customH}
            onChange={handleCustom}
          />
        </Col>
        <Col>
          <Form.Control
            type="number"
            id="customW"
            min={9}
            max={50}
            value={customObj.customW}
            onChange={handleCustom}
          />
        </Col>
        <Col>
          <Form.Control
            type="number"
            id="customBombs"
            min={9}
            max={50}
            value={customObj.customBombs}
            onChange={handleCustom}
          />
        </Col>
      </Form.Row>
      <div className="new-game-button">
        <Button variant="secondary">New Game</Button>
      </div>
    </Form>
  );
}

export default GameSelect;
