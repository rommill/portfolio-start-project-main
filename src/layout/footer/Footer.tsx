import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { FlexWrapper as OriginalFlexWrapper } from '../../assets/components/FlexWrapper';
import { theme } from '../../styles/Theme';
import { font } from '../../styles/Common';
import linkedin from '../../assets/images/linkedin.png';
import instagram from '../../assets/images/instagram.png';
import pinterest from '../../assets/images/pinterest.png';
import facebook from '../../assets/images/facebook.png';

export const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);
    const footerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Отключаем наблюдатель, как только секция стала видимой
                }
            },
            {
                threshold: 0.1, // Срабатывает, когда 10% секции становится видимым
            }
        );

        if (footerRef.current) {
            observer.observe(footerRef.current);
        }

        return () => {
            if (footerRef.current) {
                observer.unobserve(footerRef.current);
            }
        };
    }, []);

    return (
        <StyledFooter ref={footerRef}>
            <FlexWrapper direction={'column'} align={'center'} isVisible={isVisible}>
                <StyledName isVisible={isVisible}>Roman</StyledName>
                <SocialList>
                    <SocialItem isVisible={isVisible}>
                        <SocialLink href="https://www.facebook.com/share/1QB5HbyHtR/" target="_blank" rel="noopener noreferrer">
                            <img src={facebook} alt="Facebook" />
                        </SocialLink>
                    </SocialItem>
                    <SocialItem isVisible={isVisible}>
                        <SocialLink href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <img src={instagram} alt="Instagram" />
                        </SocialLink>
                    </SocialItem>
                    <SocialItem isVisible={isVisible}>
                        <SocialLink href="https://www.linkedin.com/in/rommill-romanov-76220933b/?originalSubdomain=ee" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt="LinkedIn" />
                        </SocialLink>
                    </SocialItem>
                    <SocialItem isVisible={isVisible}>
                        <SocialLink href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
                            <img src={pinterest} alt="Pinterest" />
                        </SocialLink>
                    </SocialItem>
                </SocialList>
                <StyledCopyright isVisible={isVisible}>
                    Made by Roman — Copyright 2024 © All Rights Reserved.
                </StyledCopyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: ${theme.colors.primaryBg};
    padding: 40px 0;
    transition: background-color 0.3s ease;
    position: relative; /* Добавлено для отключения эффекта particles */
`;

const FlexWrapper = styled(OriginalFlexWrapper)<{ isVisible: boolean }>`
    gap: 20px;
    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
    transform: ${({ isVisible }) => (isVisible ? 'translateY(0)' : 'translateY(20px)')};
    transition: opacity 0.6s ease, transform 0.6s ease;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }

    @media (max-width: 480px) {
        gap: 15px;
    }
`;

const StyledName = styled.span<{ isVisible: boolean }>`
    ${font({ family: "'Josefin Sans', sans-serif", weight: 700, Fmax: 22, Fmin: 16 })}
    letter-spacing: 3px;
    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
    transform: ${({ isVisible }) => (isVisible ? 'translateY(0)' : 'translateY(20px)')};
    transition: opacity 0.6s ease, transform 0.6s ease;
`;

const SocialList = styled.ul`
    display: flex;
    gap: 20px;
    margin: 30px 0;
`;

const SocialItem = styled.li<{ isVisible: boolean }>`
    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
    transform: ${({ isVisible }) => (isVisible ? 'translateY(0)' : 'translateY(20px)')};
    transition: opacity 0.6s ease, transform 0.6s ease;
`;

const SocialLink = styled.a`
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    img {
        width: 30px;
        height: 30px;
        transition: transform 0.3s ease;
    }

    &:hover {
        transform: scale(1.1);
        box-shadow: 0 14px 16px rgba(0, 0, 0, 0.2); /* Добавляем тень */
        img {
            transform: scale(1.1);
        }
    }
`;


const StyledCopyright = styled.small<{ isVisible: boolean }>`
    font-weight: 400;
    font-size: 12px;
    text-align: center;
    opacity: 0.5;
    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
    transform: ${({ isVisible }) => (isVisible ? 'translateY(0)' : 'translateY(20px)')};
    transition: opacity 0.6s ease, transform 0.6s ease;
`;

export default Footer;