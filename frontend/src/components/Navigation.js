import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import {NavLink} from 'react-router-dom';
import {Navbar} from 'react-bootstrap';
import logo from '../static/logo.png';
import "../App.css";


const Navigation = () => {
  return (
    <div>
    <Navbar bg="dark" variant="dark" expand="lg" id="my-nav">
        <Navbar.Brand className="app-logo" href="/">
            <img
              src={logo}
              width="500"
              height="150"
              className="d-inline-block align-center"
              alt="React Bootstrap logo"
            />{' '}
        </Navbar.Brand>
    </Navbar>
    <div className='sidebar'>
    <CDBSidebar textColor="#333" backgroundColor="#f0f0f0">
        <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
          Navigation
        </CDBSidebarHeader>
        <CDBSidebarContent>
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/crud1" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="list">Companies</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/crud2" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Departments</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/employee" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Employees</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/manage" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Manage</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
    </div>
  );
};

export default Navigation;