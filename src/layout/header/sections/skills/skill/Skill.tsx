import React from 'react';
import {Icon} from "../../../../../assets/components/icon/Icon";
import styled from 'styled-components'

type SkillPropsType = {
    iconId: string
    title: string
    description: string
}

export const Skill = (props: SkillPropsType)  => {
    return (
        <StyledSkill>
            <Icon iconId={"props.iconId"}/>
            <SkillTitle>{props.title}</SkillTitle>
            <SkillText>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim</SkillText>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    width: 30%;
    background-color: #668f66;
    margin: 10px;
`

const SkillTitle = styled.h3`
  
    `

const SkillText = styled.p`
  
    `