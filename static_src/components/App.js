import React from 'react';
import NavBar from './NavBar';
import { Container } from 'semantic-ui-react';

export default ({ children }) => (
  <div>
    <NavBar />
    <Container style={{ marginTop: '6em' }}>
      {children}
    </Container>
  </div>
);