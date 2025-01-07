import React from 'react';
import {Icon} from "../../assets/components/icon/Icon";
import styled from "styled-components";
import {FlexWrapper} from "../../assets/components/FlexWrapper";
import {theme} from "../../styles/Theme";
import {font} from "../../styles/Common";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={"column"} align={"center"}>
                <Name>Roman</Name>
                <SocialList>
                    <SocialItem>
                        <SocialLink>
                            <Icon height={"210px"} width={"210px"} viewBox={"0 0 21px 21px"} iconId={""}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"instagram"}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"twitter"}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"pinterest"}/>
                        </SocialLink>
                    </SocialItem>

                </SocialList>
                    <Copyright>Made by Roman  — Copyright 2024 © All Rights Reserved.</Copyright>
            </FlexWrapper>

            </StyledFooter>
    );
};

const StyledFooter = styled.footer`
background-color: ${theme.colors.primaryBg};
    padding: 40px 0;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #e8dfc5; /* Меняем цвет при наведении */
    }

    ;
`
const Name = styled.span`
    ${font({family: "'Josefin Sans', sans-serif", weight:700, Fmax:22,Fmin: 16})}
    letter-spacing: 3px;
`
const SocialList = styled.ul`
    display: flex;
    gap: 20px;
    margin: 30px 0;
`
const SocialItem = styled.li`


`
const SocialLink = styled.a`
    background-color: rgba(255,255,255, 0.1);
    border-radius: 50%;
    width: 35px;   
    height: 35px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        transform: translateY(-4px);
    }
`

const Copyright = styled.small`
font-weight: 400;
    font-size: 12px;
    text-align: center;
    opacity: 0.5;
`