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

  const handleChange = (e) => {
    const choice = e.target.id;
    const selections = Object.keys(selection);
    if(!selections.includes(choice)) return null;
    const newSelections = {};
    selections.forEach((s) => (newSelections[s] = false));
    newSelections[choice] = true;
    setGameChoice(choice);
    setSelection({ ...newSelections });
  };

  const handleCustom = (e) => {
    const title = e.target.id;
    const numb = Number(e.target.value);
    setCustom({ ...customObj, [title]: numb });
  };

  const handleNewGame = (e) => {
    e.preventDefault();
    const settings = {
      easy: { width: 9, height: 9, mines: 10 },
      intermediate: { width: 16, height: 16, mines: 40 },
      expert: { width: 30, height: 16, mines: 99 },
    };
    let gameObj = {};
    if (gameChoice !== "custom") {
      gameObj = { ...settings[gameChoice] };
    } else {
      gameObj = {
        width: customObj.customW,
        height: customObj.customH,
        mines: customObj.customBombs,
      };
    }
    raiseNewGame(gameObj);
    handleHide();
  };

  return (
    <Form onChange={handleChange} className="game-menu">
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
      <Button variant="secondary" onClick={handleNewGame}>New Game</Button>
      </div>
    </Form>
  );
}

export default GameSelect;
