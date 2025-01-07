import React, { useState } from 'react';
import styled from "styled-components";
import { Link } from "../../../../../assets/components/Link";

// Определяем интерфейс для пропсов
interface TabMenuProps {
    menuItems: Array<string>;
}

export const TabMenu = ({ menuItems }: TabMenuProps) => {
    // Состояние для отслеживания активного индекса
    const [activeIndex, setActiveIndex] = useState<number>(0);

    // Обработчик клика
    const handleClick = (index: number) => {
        setActiveIndex(index); // Устанавливаем активный индекс
    };

    return (
        <StyledTabMenu>
            <ul>
                {menuItems.map((item: string, index: number) => (
                    <ListItem
                        key={index}
                        isActive={index === activeIndex}
                        onClick={() => handleClick(index)} // Добавляем обработчик клика
                    >
                        <StyledLink href="#">{item}</StyledLink>
                    </ListItem>
                ))}
            </ul>
        </StyledTabMenu>
    );
};

// Стили для компонента TabMenu
const StyledTabMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px; /* Расстояние между элементами списка */
        justify-content: center;
        padding: 0;
        margin: 10px;
        list-style: none; /* Убираем стандартные маркеры списка */
    }
`;

const ListItem = styled.li<{ isActive: boolean }>`
    position: relative;
    z-index: 0;
  cursor: pointer; /* Добавляем курсор "рука" для кликабельности */

  /* Подчеркивание активного элемента */
  ${({ isActive }) =>
    isActive &&
    `
    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      right: 0;
      height: 2px;
      background-color: #007BFF; /* Цвет подчеркивания */
      z-index: 1;
    }
  `}
`;

const StyledLink = styled(Link)`
  text-decoration: none; /* Убираем стандартное подчеркивание */
  color: #333;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: #007BFF; /* Цвет при наведении */
  }
`;
