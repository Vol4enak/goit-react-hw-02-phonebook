import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Container } from './App.styled';
import { ContactForm } from './ContantForm/contactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = ({ name, number }) => {

    if (this.visibleContact) {
      alert(`${name} is already in contacts`)
      return
    }
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  filterByName = data => {
    this.setState({ filter: data });
  };
  visibleContact = () => {
    const normalaizedfilter = this.state.filter.toLocaleLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalaizedfilter)
    );
  };
  render() {

    const visibility = this.visibleContact();
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm
          onSubmit={this.formSubmitHandler}
          onFilter={this.filterByName}
        />

        <h2>Contacts</h2>

        <Filter onChange={this.filterByName} />

        <ContactList items={visibility} />
      </Container>
    );
  }
}
