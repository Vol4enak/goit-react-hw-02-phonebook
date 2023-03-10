import React from 'react';
import ContactInfo from './ContactList.styled';
export const ContactList = ({ items }) => {
  return (
    <>
      <ul>
        {items.map(({ id, name, number }) => (
          <ContactInfo key={id}>
            <p>{name}</p>
            <p>{number}</p>
          </ContactInfo>
        ))}
      </ul>
    </>
  );
};
export default ContactList;
