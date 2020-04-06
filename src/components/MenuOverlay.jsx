import React, { useRef, useState } from "react";
import GameSelect from "./GameSelect";
import { Overlay, Button, Popover } from "react-bootstrap";

function MenuOverlay(props) {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const handleHide = () => {
    setShow(!show);
  };
  return (
    <>
      <Button variant="info" ref={target} onClick={() => setShow(!show)}>
        Game Menu
      </Button>
      <Overlay
        target={target.current}
        show={show}
        trigger="click"
        key="bottom"
        placement="bottom"
        rootClose
        onHide={handleHide}
      >
        <Popover>
          <Popover.Content>
            <GameSelect
              handleHide={handleHide}
              raiseNewGame={props.handleNewGame}
            />
          </Popover.Content>
        </Popover>
      </Overlay>
    </>
  );
}

export default MenuOverlay;
