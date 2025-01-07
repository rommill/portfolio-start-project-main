import React from 'react';
import {SectionTitle} from "../../../../assets/components/SectionTitle";
import {Icon} from "../../../../assets/components/icon/Icon";
import styled from "styled-components";
import {Slider} from "../../../../assets/components/slider/Slider";
import {FlexWrapper} from "../../../../assets/components/FlexWrapper";
import {IconWrapper} from "../skills/skill/Skill";
import {Container} from "../../../../assets/components/Container";

interface TestimonyProps {
    id?: string
}

export const Testimony = ({id}: TestimonyProps) => {
    return (
        <StyledTestimony>
            <Container>
                <SectionTitle>Testimony</SectionTitle>
                <FlexWrapper direction={"column"} align={"center"}>
                    <StyledIconWrapper>
                        <Icon iconId={"code"}/>
                    </StyledIconWrapper>
                    <StyledSliderWrapper>
                        <Slider/>
                    </StyledSliderWrapper>
                </FlexWrapper>
            </Container>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    min-height: 50vh;
    background-color: cadetblue;
    display: flex;
    align-items: center;
    justify-content: center;

    ${Container} {
        padding: 20px;
    }

    @media (max-width: 768px) {
        min-height: 60vh;
    }

    @media (max-width: 576px) {
        min-height: 70vh;
    }
`;

const StyledIconWrapper = styled(IconWrapper)`
    margin: 40px 0 50px;

    @media (max-width: 768px) {
        margin: 30px 0 40px;
    }

    @media (max-width: 576px) {
        margin: 20px 0 30px;
    }
`;

const StyledSliderWrapper = styled.div`
    width: 80%;
    max-width: 800px;
    margin: 0 auto;

    @media (max-width: 768px) {
        width: 90%;
    }

    @media (max-width: 576px) {
        width: 95%;
    }
`;
