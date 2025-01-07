import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../assets/components/FlexWrapper";
import {SectionTitle} from '../../../../assets/components/SectionTitle';
import {Skill} from './skill/Skill';
import {Container} from "../../../../assets/components/Container";

interface SkillsProps {
    id?: string
}

export const Skills = ({id}: SkillsProps) => {
    return (
        <StyledSkills id={id}>
            <Container>
                <SectionTitle>My Skills</SectionTitle>
                <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                    {skillsData.map((skill, index) => (
                        <AnimatedSkill
                            key={index}
                            iconId={skill.iconId}
                            title={skill.title}
                            description={skill.description}
                            delay={index * 0.2} // Задержка появления для каждого скилла
                        />
                    ))}
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

// Данные для скиллов
const skillsData = [
    {
        iconId: "code",
        title: "html",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
    {
        iconId: "css",
        title: "css3",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
    {
        iconId: "html",
        title: "html5",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
    {
        iconId: "js",
        title: "javascript",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
    {
        iconId: "react",
        title: "react",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
    {
        iconId: "vscode",
        title: "vscode",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    }
];

// Компонент Skill с анимацией появления
const AnimatedSkill = ({iconId, title, description, delay}: any) => {
    return (
        <SkillWrapper delay={delay}>
            <Skill iconId={iconId} title={title} description={description}/>
        </SkillWrapper>
    );
};

// Стили с анимацией появления
const SkillWrapper = styled.div<{ delay: number }>`
    opacity: 0;
    transform: rotate(-90deg);
    animation: rotateIn 0.8s ease forwards;
    animation-delay: ${({delay}) => delay}s;

    @keyframes rotateIn {
        0% {
            opacity: 0;
            transform: rotate(-90deg);
        }
        100% {
            opacity: 1;
            transform: rotate(0);
        }
    }
`;


// Основной контейнер для Skills
const StyledSkills = styled.section``;
