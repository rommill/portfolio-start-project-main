import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {Link as ScrollLink} from "react-scroll"; // Переименуем импортируемый Link, чтобы избежать конфликта

type HeaderMenuProps = {
    menuItems: string[];
};

export const HeaderMenu: React.FC<HeaderMenuProps> = ({menuItems}) => {
    return (
        <StyledHeaderMenu>
            <ul>
                {menuItems.map((item, index) => (
                    <ListItem
                        key={item}
                        style={{}}
                    >
                        <StyledLink
                            href={`#${item.toLowerCase()}`}
                        >
                            {item}
                        </StyledLink>
                    </ListItem>
                ))}
            </ul>
        </StyledHeaderMenu>
    );
};

const StyledHeaderMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px; /* Расстояние между элементами списка */
        justify-content: center;
        padding: 0;
        margin: 0;
        list-style: none; /* Убираем стандартные маркеры списка */
    }

    @media ${theme.media.tablet} {
        display: none; /* Скрываем меню на планшетах */
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
            color: #c62121; /* Цвет текста при наведении */
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
`;

interface StyledLinkProps {
    to: string;
}

interface StyledLinkProps {
    to: string;
}

const StyledLink = styled.a
`
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 400;
    font-size: 14px;
    text-align: center;
    color: coral;

    &:hover {
        text-decoration: underline;
    }
`;

export default StyledLink;