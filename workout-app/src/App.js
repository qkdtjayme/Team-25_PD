// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ExerciseTab from './components/ExerciseTab';
import UserTab from './components/UserTab';
import Camera from './components/Camera';
import { AppContainer, ContentWrapper, Nav, NavList, NavItem, NavLinkStyled } from './components/styles';

function App() {
  return (
    <Router>
      <AppContainer>
        <ContentWrapper>
          {/* Content Area */}
          <Routes>
            <Route path="/exercise/*" element={<ExerciseTab />} />
            <Route path="/user" element={<UserTab />} />
            <Route path="/camera" element={<Camera />} />
          </Routes>
        </ContentWrapper>

        {/* Navigation Bar */}
        <Nav>
          <NavList>
            <NavItem>
              <NavLinkStyled to="/exercise">Exercise</NavLinkStyled>
            </NavItem>
            <NavItem>
              <NavLinkStyled to="/user">User</NavLinkStyled>
            </NavItem>
            <NavItem>
              <NavLinkStyled to="/camera">Camera</NavLinkStyled>
            </NavItem>
          </NavList>
        </Nav>
      </AppContainer>
    </Router>
  );
}

export default App;
