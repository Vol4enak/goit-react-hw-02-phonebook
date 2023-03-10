import React from 'react';

export const ContactFrom = () => {
    return (
      <>
    <h1>Phonebook</h1>
    <form>
      <label htmlFor="">
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <br />
      <button type="submit">Add contact</button>
    </form>
    <h2>Contacts</h2>
  </>
  )
};
