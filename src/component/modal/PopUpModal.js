import React, { useState } from "react";
import { Button, Modal } from "semantic-ui-react";
import style from "./PopUpModal.module.css";

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

// PopUpModal
const PopUpModal = ({ onGetDataFromPopUp }) => {
  const [state, dispatch] = React.useReducer(ModalReducer, {
    open: false,
    size: undefined,
  });
  const { open, size } = state;
  //   Sates
  const [date, setDate] = useState("");
  const [username, setUsername] = useState("");
  const [amount, setAmount] = useState("");
  const [isPaid, setIspaid] = useState("true");

  //   User Data
  const userInputData = {
    id: Math.random(),
    date: date,
    username: username.trim(),
    isPaid: isPaid === "true" ? true : false,
    credit: 0,
    amount: +amount,
  };
  //   Event listner
  const sumbitedForm = (e) => {
    e.preventDefault();
    onGetDataFromPopUp(userInputData);

    // Close the modal
    dispatch({ type: "close" });
  };

  return (
    <>
      <Button
        floated={"right"}
        positive
        onClick={() => dispatch({ type: "open", size: "small" })}
      >
        ADD
      </Button>

      <Modal
        size={size}
        open={open}
        onClose={() => dispatch({ type: "close" })}
      >
        <Modal.Header>ADD CREDIT</Modal.Header>
        <Modal.Content className={style.modal}>
          <form className={style.form} onSubmit={sumbitedForm}>
            <input
              required
              type="date"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
            <input
              required
              type="text"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <input
              required
              type="number"
              onChange={(e) => {
                setAmount(e.target.value);
              }}
            />
            <select
              required
              onChange={(e) => {
                setIspaid(e.target.value);
              }}
              defaultValue=""
            >
              <option value="" disabled>
                SELECT
              </option>
              <option value="true">PAID</option>
              <option value="false">NOT PAID</option>
            </select>
            <button type="submit">SUBMIT</button>
          </form>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default PopUpModal;
