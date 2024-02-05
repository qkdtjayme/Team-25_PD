// components/user/UserTab.js

import React from 'react';
import UserProfile from './UserProfile';
import UserAnalytics from './UserAnalytics';
import styled from 'styled-components';

function UserTab() {
  return (
    <div>
      <UserTabWrapper>
        <UserProfile />
        <UserAnalytics />
      </UserTabWrapper>

      <BottomNavBar>
        <NavItem>Exercises</NavItem>
        <NavItem>Camera</NavItem>
        <NavItem>User</NavItem>
      </BottomNavBar>
    </div>
  );
}

export default UserTab;


const UserTabWrapper = styled.div`
  background-color: #EBD9B4;
  padding: 80px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  animation: fadeIn 1s;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const BottomNavBar = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #A9B388;
  display: flex;
  justify-content: space-around;
  padding: 2px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const NavItem = styled.div`
  text-align: center;
  color: #F9EFDB;
  cursor: pointer;
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #5F6F52;
  }
`;