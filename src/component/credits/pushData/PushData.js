import React, { useState } from "react";
import { Button, Modal } from "semantic-ui-react";

import style from "./PushData.module.css";

function ModalReducer(state, action) {
  switch (action.type) {
    case "close":
      return { open: false };
    case "open":
      return { open: true, size: action.size };
    default:
      throw new Error("Unsupported action...");
  }
}
const PushData = () => {
  const [cash, setCash] = useState("");
  const [state, dispatch] = React.useReducer(ModalReducer, {
    open: false,
    size: undefined,
  });
  const { open, size } = state;

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(cash);
  };
  return (
    <>
      <Button
        floated="left"
        onClick={() => dispatch({ type: "open", size: "small" })}
      >
        PUSH DATA
      </Button>

      <Modal
        size={size}
        open={open}
        onClose={() => dispatch({ type: "close" })}
      >
        <Modal.Header>ADD CREDIT</Modal.Header>
        <Modal.Content className={style.modal}>
          <form onSubmit={formSubmitHandler}>
            <input
              type="number"
              min="0"
              value={cash}
              onChange={(e) => {
                setCash(e.target.value);
              }}
            />
            <button type="submit">SUBMIT</button>
          </form>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default PushData;
