import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../assets/components/FlexWrapper";
import {Icon} from "../../../../assets/components/icon/Icon";
import {SectionTitle} from '../../../../assets/components/SectionTitle';
import {Skill} from './skill/Skill';

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>My Skills</SectionTitle>
            <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                <Skill iconId={"code"}
                       title={"html"}
                description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
                <Skill iconId={"css"}
                       title={"css3"}
                description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
                <Skill iconId={"html"}
                       title={"html5"}
                description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
                <Skill iconId={"js"}
                       title={"javascript"}
                description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
                <Skill iconId={"react"}
                       title={"react"}
                description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
                <Skill iconId={"vscode"}
                       title={"vscode"}
                description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>

            </FlexWrapper>
        </StyledSkills>

    );
};

const StyledSkills = styled.section`
    background-color: cadetblue;
    min-height: 100vh;
`