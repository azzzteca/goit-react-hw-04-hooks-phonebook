export function ContactListItem({ contact, deleteContact }) {
  return (
    <>
      {contact.name} {contact.number}
      <button type="button" id={contact.id} onClick={deleteContact}>
        Delete
      </button>
    </>
  );
}
