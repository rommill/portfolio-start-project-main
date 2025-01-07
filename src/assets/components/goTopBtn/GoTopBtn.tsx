import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { animateScroll as scroll } from "react-scroll";
import arrowImg from '../../images/arrow.png';

export const GoTopBtn = () => {
    const [showBtn, setShowBtn] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setShowBtn(true);
            } else {
                setShowBtn(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <>
            {showBtn && (
                <StyledGoTopBtn onClick={scrollToTop}>
                    <StyledImageContainer>
                        <StyledImage src={arrowImg} alt="arrow to top" />
                        <StyledShadow />
                    </StyledImageContainer>
                </StyledGoTopBtn>
            )}
        </>
    );
};

// Стили для кнопки
const StyledGoTopBtn = styled.button`
    background: none; /* Убираем фон */
    border: none; /* Убираем рамки */
    position: fixed;
    right: 30px;
    bottom: 30px;
    cursor: pointer;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover div img {
        animation: jump 0.5s ease-in-out infinite; /* Анимация прыжка стрелки при наведении */
    }

    &:hover div div {
        animation: reduceShadow 0.5s ease-in-out infinite; /* Анимация уменьшения тени при наведении */
    }

    @keyframes jump {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-10px); /* Подпрыгивание вверх */
        }
    }

    @keyframes reduceShadow {
        0%, 100% {
            transform: scale(1);
            opacity: 1;
        }
        50% {
            transform: scale(0.5); /* Уменьшение тени */
            opacity: 0.5;
        }
    }
`;

// Контейнер для изображения и тени
const StyledImageContainer = styled.div`
    position: relative;
    width: 40px;
    height: 40px;
`;

// Стили для изображения стрелки
const StyledImage = styled.img`
    width: 40px; /* Размер изображения */
    height: 40px;
    transition: transform 0.3s; /* Плавный переход */
    position: absolute;
    top: 0;
    left: 0;
`;

// Стили для тени
const StyledShadow = styled.div`
    width: 40px;
    height: 10px;
    background: rgba(0, 0, 0, 0.25);
    border-radius: 50%;
    position: absolute;
    bottom: -5px;
    left: 0;
    transition: transform 0.3s, opacity 0.3s; /* Плавный переход */
`;