import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../../assets/components/SectionTitle";
import {Button} from "../../../../assets/components/Button";
import {FlexWrapper} from "../../../../assets/components/FlexWrapper";
import {Container} from "../../../../assets/components/Container";

interface SloganProps {
    id?: string
}

export const Slogan = ({id}: SloganProps) => {
    return (
        <StyledSlogan>
            <Container>
                <FlexWrapper direction={"column"} align={"center"}>
                    <SectionTitle>I Am Available For Freelance</SectionTitle>
                    <Button>Hire me</Button>
                </FlexWrapper>
            </Container>
        </StyledSlogan>
    );
};

const StyledSlogan = styled.section`
    min-height: 30vh;
    background-color: #e8dfc5;
`