import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from './App.styled';
import { ContactFrom } from './ContantForm/contactForm';
export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <Container>
        <ContactFrom />
      </Container>
    );
  }
}
