import React from 'react';
import styled from 'styled-components';
import {Menu} from "../../../../assets/components/menu/Menu";
import {SectionTitle} from "../../../../assets/components/SectionTitle";
import {FlexWrapper} from "../../../../assets/components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from "../../../../assets/images/proj1.webp";
import timerImg from "../../../../assets/images/proj2.webp";

const worksItems = ["MOBILE DEVELOPMENT", "WEB DEVELOPMENT", "WEB SCRAPING", "NPM AND NODEJS"]

export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>My Works</SectionTitle>
            <Menu menuItems={worksItems}/>
            <FlexWrapper justify={"space-around"}>
                <Work title={"Social Network"}
                      src={socialImg}
                      text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>
                <Work title={"Timer"}
                src={timerImg}
                text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>
            </FlexWrapper>

        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    min-height: 100vh;
    background-color: blue;
`