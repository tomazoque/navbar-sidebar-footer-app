import React from 'react';
import { Nav, NavMenu, NavLink, NavBtn, NavBtnLink, NavbarContainer, NavLogo, MobileIcon } from './NavbarElements';
import { FaBars } from 'react-icons/fa';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';

const Navbar = ({ toggle }) => {
  return (
    <>
    <Nav>
        <NavbarContainer>
            <NavLogo to="/"><Logo alt='logo'/></NavLogo>            
            <MobileIcon onClick={toggle}>
                <FaBars />
            </MobileIcon>    
            <NavMenu>
                <NavLink to="/about">
                    About
                </NavLink>
                <NavLink to="/billing">
                    Billing
                </NavLink>
                <NavLink to="/inventory">
                    Inventory
                </NavLink>
                <NavLink to="/sign-up">
                    Sign Up
                </NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/sign-in">
                    Sign In
                </NavBtnLink>
            </NavBtn>        
        </NavbarContainer>
    </Nav>
    </>
  );
}

export default Navbar;