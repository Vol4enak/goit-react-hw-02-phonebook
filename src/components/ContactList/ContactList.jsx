import React from 'react';
import { ContactInfo, ContactButtom } from './ContactList.styled';
export const ContactList = ({ items }) => {
  return (
    <>
      <ul>
        {items.map(({ id, name, number }) => (
          <ContactInfo key={id}>
            <p>{name}</p>
            <p>{number}</p>
            <ContactButtom type="button">Delete</ContactButtom>
          </ContactInfo>
        ))}
      </ul>
    </>
  );
};
export default ContactList;
