import { useState } from "react";

export default function Chat({ contact, message, dispatch }) {
  const handlerSend = (contact, message) => {
    alert(`${contact.email} has sent ${message}`);
    dispatch({
      type: "send_message",
      message: message,
    });
  };
  return (
    <section className="chat">
      <textarea
        value={message}
        placeholder={"Chat to " + contact.name}
        onChange={(e) => {
          dispatch({
            type: "edited_message",
            message: e.target.value,
          });
        }}
      />
      <br />
      <button onClick={() => handlerSend(contact, message)}>
        Send to {contact.email}
      </button>
    </section>
  );
}
