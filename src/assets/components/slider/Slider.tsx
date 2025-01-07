import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import styled from 'styled-components';
import 'react-alice-carousel/lib/alice-carousel.css';

type SlideProps = {
    text: string;
    userName: string;
};

const Slide = ({ text, userName }: SlideProps) => {
    return (
        <SlideContainer>
            <StyledText>{text}</StyledText>
            <StyledName>{userName}</StyledName>
        </SlideContainer>
    );
};

const items = [
    <Slide
        key={1}
        userName="Димыч"
        text="Я хотел бы выучить JavaScript, так качай головой под этот бит. Я хотел бы врубиться в алгоритм, так танцуй, брат, со мной под этот ритм!"
    />,
    <Slide
        key={2}
        userName="Вася"
        text="Изучаю React и радуюсь, как ребенок, ведь это потрясающий инструмент!"
    />,
    <Slide
        key={3}
        userName="Аня"
        text="Программирование — это не только работа, но и творчество."
    />,
    <Slide
        key={4}
        userName="Саша"
        text="Кодинг — это как искусство. Найди в нем красоту!"
    />,
];

export const Slider = () => (
    <SliderWrapper>
        <AliceCarousel
            mouseTracking
            items={items}
            responsive={{
                0: { items: 1 }, // 1 элемент для ширины до 576px
                576: { items: 2 }, // 2 элемента для ширины от 576px
                1024: { items: 3 }, // 3 элемента для ширины от 1024px
            }}
            controlsStrategy="responsive"
            autoPlay
            autoPlayInterval={3000}
            infinite
        />
    </SliderWrapper>
);

// Стили для слайдера
const SliderWrapper = styled.div`
    max-width: 90%;
    margin: 0 auto;

    .alice-carousel__stage {
        display: flex;
        gap: 20px; /* Отступы между элементами слайдера */
    }

    .alice-carousel__wrapper {
        margin: 0 auto;
    }

    .alice-carousel__dots {
        margin-top: 20px;
        button {
            background-color: #ddd;
        }
        .__active {
            background-color: #333;
        }
    }
`;

// Стили для слайда
const SlideContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #ffffff;
    color: #333;
    height: 350px; /* Увеличено для десктопа */
    width: 90%; /* Устанавливаем ширину карточки */
    max-width: 500px; /* Ограничиваем максимальную ширину карточки */
    border: 2px solid #ddd;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    margin: auto; /* Центрируем карточки */

    @media (max-width: 576px) {
        height: 200px;
        width: 90%; /* Для мобильных устройств */
        font-size: 16px;
    }

    @media (max-width: 768px) {
        height: 220px;
        font-size: 17px;
    }
`;

const StyledText = styled.p`
    font-size: 16px;
    line-height: 1.5;
    color: #555;
    margin-bottom: 10px;

    /* Предотвращаем выход текста за пределы карточки */
    word-wrap: break-word;
    overflow-wrap: break-word;

    @media (max-width: 576px) {
        font-size: 14px;
    }
`;

const StyledName = styled.h3`
    font-size: 18px;
    font-weight: bold;
    color: #c62121;

    @media (max-width: 576px) {
        font-size: 16px;
    }
`;









// import React from 'react';
// import {FlexWrapper} from "../FlexWrapper";
// import {theme} from "../../../styles/Theme";
// import styled from 'styled-components';
//
// export const Slider = () => {
//     return (
//         <StyledSlider>
//             <FlexWrapper>
//                 <Slide>
//                     <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Text>
//                     <Name>@ivan ivanow</Name>
//                 </Slide>
//             </FlexWrapper>
//             <Pagination>
//                 <span> </span>
//                 <span className={"active"}> </span>
//                 <span> </span>
//             </Pagination>
//
//         </StyledSlider>
//     );
// };
//
// const StyledSlider = styled.div`
//     max-width: 500px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
// `
// const Slide = styled.div`
//     text-align: center;
// `
// const Text = styled.p`
//
// `
// const Name = styled.span`
// font-family: 'Josefin Sans', sans-serif;
//     font-weight: 600;
//     font-size: 16px;
//     letter-spacing: 1px;
//     text-transform: uppercase;
//     margin: 22px 0 42px;
//     display: inline-block;
// `
//
// const Pagination = styled.div`
// span {
//     display: inline-block;
//     width: 7px;
//     height: 7px;
//
//     background-color: rgba(255, 255, 255, 0.5);
//     border-radius: 20px;
//     & + span {
//         margin-left: 5px;
//     }
//
//     &.active {
//         background-color: ${theme.colors.accent};
//         width: 20px;
//     }
// }
// `