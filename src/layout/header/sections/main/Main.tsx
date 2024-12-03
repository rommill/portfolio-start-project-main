import React from 'react';
import styled from "styled-components";
import photo from '../../../../assets/images/photo.webp'
import {FlexWrapper} from "../../../../assets/components/FlexWrapper";

export const Main = () => {
    return (

       <div>
           <StyledMain>
               <FlexWrapper align={"center"} justify={"space-around"}>
                   <div>
                       <span>Hi There</span>
                       <Name>I am Roman Filippov</Name>
                       <MainTitle>A Web Developer</MainTitle>
                   </div>

                   <Photo src={photo} alt="" />
               </FlexWrapper>
           </StyledMain>
       </div>


    );
};

const StyledMain = styled.div`
min-height: 100vh;
    background-color: bisque;
`
const Photo = styled.img`
width: 350px;
    height: 430px;
    object-fit: cover;
`
const MainTitle = styled.h1`

`
const Name = styled.h2`
`
