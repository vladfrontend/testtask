import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Menu, Container, Button, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { logout } from '../actions/auth';

class NavBar extends React.Component {
  static propTypes = {
    logout: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired
  };

  _renderRightMenu() {
    const { logout, user } = this.props;

    const userAuthenticatedTmpl = (
      <Dropdown item text={user.username}>
        <Dropdown.Menu>
          <Dropdown.Item as={Link} to="/projects">Projects</Dropdown.Item>
          <Dropdown.Item as={Link} to="/tasks">Tasks</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={logout}>Log out</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );

    const userNotAuthenticatedTmpl = (
      <React.Fragment>
        <Menu.Item as={Link} to="/signin">Sign in</Menu.Item>
        <Menu.Item as={Link} to="/signup">Sign up</Menu.Item>
      </React.Fragment>
    );

    return (
      <Menu.Menu position='right'>
        { this.props.isAuthenticated ?
          userAuthenticatedTmpl :
          userNotAuthenticatedTmpl }
      </Menu.Menu>
    );
  }

  render() {
    return (
      <Menu fixed='top' inverted borderless size='large'>
        <Container>
          <Menu.Item as={Link} to="/" header>
            Task Tracker
          </Menu.Item>
          <Menu.Item as={Link} to="/projects">Projects</Menu.Item>
          <Menu.Item as={Link} to="/tasks">Tasks</Menu.Item>

          {this._renderRightMenu()}
        </Container>
      </Menu>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user
});

const mapDispatchToProps = {
  logout
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);