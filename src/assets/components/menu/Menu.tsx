import React from 'react';
import styled from "styled-components";

export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Skills</a>
                </li>
                <li>
                    <a href="#">Works</a>
                </li>
                <li>
                    <a href="#">Testimony</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
        </StyledMenu>
    );
};

// Стили для компонента Menu
const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px; /* Расстояние между элементами списка */
        padding: 0;
        margin: 0;
        list-style: none; /* Убираем стандартные маркеры списка */
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
