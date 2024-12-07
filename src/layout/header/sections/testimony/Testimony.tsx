import React from 'react';
import {SectionTitle} from "../../../../assets/components/SectionTitle";
import {Icon} from "../../../../assets/components/icon/Icon";
import styled from "styled-components";
import {Slider} from "../../../../assets/components/slider/Slider";
import {FlexWrapper} from "../../../../assets/components/FlexWrapper";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <SectionTitle>Testimony</SectionTitle>
            <FlexWrapper direction={"column"} align={"center"}>
                <Icon iconId={ "code"}/>
                <Slider/>
            </FlexWrapper>


        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
min-height: 50vh;
    background-color: cadetblue;
`