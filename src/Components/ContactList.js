import React from "react";
import ContactCard from "./ContactCard";

export default function ContactList(props) {
    const contactrander = props.contact.map((contact) => {
        return (
            <ContactCard key={contact.id} contact={contact} />
        )
    })

  return (
    <div>
      <h1>Contact List</h1>
        {contactrander}
    </div>
  );
}