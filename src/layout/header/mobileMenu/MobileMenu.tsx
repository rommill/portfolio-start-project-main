import React, { useState, useEffect } from 'react';
import styled, { css } from "styled-components";
import { theme } from "../../../styles/Theme";

export const MobileMenu = (props: { menuItems: Array<string> }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = (state: boolean) => {
        setIsOpen(state);
    };

    // Добавляем useEffect для обработки кликов вне меню
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            // Проверяем, был ли клик вне области меню
            if (!document.querySelector('.mobile-menu-popup')?.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={isOpen} onClick={() => toggleMenu(!isOpen)}>
                <span></span>
            </BurgerButton>

            <MobileMenuPopup
                isOpen={isOpen}
                onClick={() => {
                    toggleMenu(false);
                }}
                className="mobile-menu-popup" // Добавляем класс для useEffect
            >
                <ul>
                    {props.menuItems.map((item: string, index) => (
                        <ListItem key={index}>
                            <Link href="#" onClick={() => setIsOpen(false)}>{item}</Link>
                        </ListItem>
                    ))}
                </ul>
            </MobileMenuPopup>
        </StyledMobileMenu>
    );
};

// Стили остаются без изменений
const StyledMobileMenu = styled.nav`
    display: none;
    
    @media ${theme.media.tablet} {
        display: block;
    }
        
    }

    li {
        display: inline-block;
    }

    a {
        text-decoration: none; /* Убираем подчеркивание ссылок */
        color: #333; /* Цвет текста ссылок */
        font-size: 16px;
        font-weight: 500;

        &:hover {
            color: #c62121; /* Цвет при наведении */
        }
    }
`;
const ListItem = styled.li`
    animation: float 3s ease-in-out infinite;

    @keyframes float {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-10px);
        }
    }
    ; 
`
const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    background-color: rgba(31, 31, 31, 0.9);
    opacity: 0;
    transform: translateY(-100%);
    transition: all 0.3s ease-in-out;

    ${props =>
    props.isOpen &&
    css`
                opacity: 1;
                transform: translateY(0);
            `}

    ul {
        display: flex;
        gap: 30px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        list-style: none;
        padding: 0;
        margin: 0;
    }
`;

const BurgerButton = styled.button<{ isOpen: boolean }>`
    position: fixed;
    top: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    background: none;
    border: none;
    cursor: pointer;
    z-index: 1000;

    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.font};
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        transition: all 0.3s ease;

        &:before,
        &:after {
            content: '';
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.font};
            position: absolute;
            transition: all 0.3s ease;
        }

        &:before {
            transform: translateY(-10px);
        }

        &:after {
            transform: translateY(10px);
        }

        ${props =>
    props.isOpen &&
    css`
                    background-color: transparent;

                    &:before {
                        transform: rotate(-45deg);
                    }

                    &:after {
                        transform: rotate(45deg);
                    }
                `}
    }
`;

const Link = styled.a`
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 400;
    font-size: 14px;
    text-align: center;
    color: coral;
    transition: color 0.3s ease;

    &:hover {
        color: #ff7f50;
    }
`;
