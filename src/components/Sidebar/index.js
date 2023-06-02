import React from 'react'
import { SidebarContainer, CloseIcon, Icon, SidebarWrapper, SidebarLink, SideBtnWrap, SidebarRoute, SidebarMenu } from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="/about">
                    About
                </SidebarLink>
                <SidebarLink to="/billing">
                    Billing
                </SidebarLink>
                <SidebarLink to="/inventory">
                    Inventory
                </SidebarLink>
                <SidebarLink to="/sign-up">
                    Sign Up
                </SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/sign-in">
                    Sign In
                </SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar;