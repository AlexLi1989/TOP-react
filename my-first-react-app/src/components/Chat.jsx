export default function Chat({ contact, message, dispatch }) {
  const handleEdit = (message) => {
    dispatch({
      type: "edited_message",
      message: message,
    });
  };
  return (
    <section className="chat">
      <textarea
        value={message}
        placeholder={"Chat to " + contact.name}
        onChange={(e) => {
          handleEdit(e.target.value);
          // (Read the input value from e.target.value)
        }}
      />
      <br />
      <button>Send to {contact.email}</button>
    </section>
  );
}
