import React from 'react';
import styled from 'styled-components';

type WorkPropsType = {
    title: string
    text: string
    src: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <Image src={props.src} alt=""/>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <Link></Link>
            <Link></Link>

        </StyledWork>
    );
};

const StyledWork = styled.div`
background-color: cadetblue;
    max-width: 540px;
    width: 100%;
`
const Image = styled.img`
    width: 100%;
    height: auto;
`
const Link = styled.a`
`
const Title = styled.h3`
`
const Text = styled.p`
`