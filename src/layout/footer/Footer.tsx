import React from 'react';
import {Icon} from "../../assets/components/icon/Icon";
import styled from "styled-components";
import {FlexWrapper} from "../../assets/components/FlexWrapper";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={"column"} align={"center"}>
                <Name>Roman</Name>
                <SocialList>
                    <SocialItem>
                        <SocialLink>
                            <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"facebook"}/>
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
background-color: blue;
    min-height: 20vh;
    padding: 20px 0;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: darkblue; /* Меняем цвет при наведении */
    }

    ;
`
const Name = styled.span`

`
const SocialList = styled.ul`
    display: flex;
    gap: 30px;
`
const SocialItem = styled.li`


`
const SocialLink = styled.a`
    
`
const Copyright = styled.small`

`