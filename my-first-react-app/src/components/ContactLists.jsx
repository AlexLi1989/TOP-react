export default function ContactList({ contacts, selectedId, dispatch }) {
  const handleChangeSelection = (contactId) => {
    dispatch({
      type: "changed_selection",
      contactId: contactId,
    });
  };
  return (
    <section className="contact-list">
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <button
              onClick={() => {
                handleChangeSelection(contact.id);
              }}
            >
              {selectedId === contact.id ? <b>{contact.name}</b> : contact.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
