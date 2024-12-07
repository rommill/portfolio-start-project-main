import React from 'react';
import styled from "styled-components";
import {Logo} from "../../assets/components/logo/Logo";
import {Menu} from "../../assets/components/menu/Menu";

const items = ["Home", "Skills", "Works", "Testimony", "Contact"]

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu menuItems ={items}/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: #68a176;
    display: flex;
    justify-content: space-between;
`