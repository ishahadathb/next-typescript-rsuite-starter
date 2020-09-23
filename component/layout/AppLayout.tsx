import React from 'react';
import { Avatar, Container, Dropdown, Nav, Navbar, Sidebar } from 'rsuite';

const AppLayout: React.FC = ({ children }) => (
  <Container>
    <Sidebar>
      <p>Brand Logo</p>
      <p>This is sidebar</p>
    </Sidebar>
    <Container>
      <Navbar>
        <Nav pullRight>
          <Dropdown
            placement="bottomEnd"
            renderTitle={() => <Avatar circle>b</Avatar>}
          >
            <Dropdown.Item>Setting</Dropdown.Item>
            <Dropdown.Item>Logout</Dropdown.Item>
          </Dropdown>
        </Nav>
      </Navbar>
      {children}
    </Container>
  </Container>
);

export default AppLayout;
