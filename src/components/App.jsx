import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Container } from './App.styled';
import { ContactForm } from './ContantForm/contactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitHandler = ({ name, number }) => {
    console.log(number);
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
  render() {
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />

        <h2>Contacts</h2>

        <Filter onChange={this.filterByName} />

        <ContactList items={this.state.contacts} />
      </Container>
    );
  }
}
