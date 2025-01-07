import React from 'react';
import styled from 'styled-components';
import {TabMenu} from "./tabMenu/TabMenu";
import {SectionTitle} from "../../../../assets/components/SectionTitle";
import {FlexWrapper} from "../../../../assets/components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from "../../../../assets/images/proj1.webp";
import timerImg from "../../../../assets/images/proj2.webp";
import {Container} from "../../../../assets/components/Container";

const worksItems = ["MOBILE DEVELOPMENT", "WEB DEVELOPMENT", "WEB SCRAPING", "NPM AND NODEJS"]

interface WorksProps {
    id?: string
}

export const Works = ({id}: WorksProps) => {
    return (
        <StyledWorks>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu menuItems={worksItems}/>
                <FlexWrapper justify={"space-between"} align={"flex-start"}>
                    <Work title={"Social Network"}
                          src={socialImg}
                          text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>
                    <Work title={"Timer"}
                          src={timerImg}
                          text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>
                </FlexWrapper>
            </Container>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
   
`