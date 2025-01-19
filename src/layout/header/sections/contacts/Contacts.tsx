import React, { useEffect, useRef, useState } from 'react';
import styled from "styled-components";
import { SectionTitle } from "../../../../assets/components/SectionTitle";
import { Button } from "../../../../assets/components/Button";
import { Container } from "../../../../assets/components/Container";
import { theme } from "../../../../styles/Theme";
import emailjs from '@emailjs/browser';

interface ContactProps {
    id?: string
}

export const Contact = ({ id }: ContactProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const contactRef = useRef<HTMLDivElement>(null);
    const formRef = useRef<HTMLFormElement>(null); // Используем правильный тип для формы

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

        if (contactRef.current) {
            observer.observe(contactRef.current);
        }

        return () => {
            if (contactRef.current) {
                observer.unobserve(contactRef.current);
            }
        };
    }, []);

    const sendEmail = (e: any) => {
        e.preventDefault();

        emailjs.sendForm('service_y6vjv7n', 'template_re3h5kt', formRef.current, 'ZzQwBzZQLSrWY2FUP')
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            );
        e.target.reset()
    };

    return (
        <StyledContacts id={id} ref={contactRef}>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <StyledForm ref={formRef} onSubmit={sendEmail} isVisible={isVisible}>
                    <Field name="name" placeholder="name" required />
                    <Field name="subject" placeholder="subject" required />
                    <TextAreaField name="message" placeholder="message" required />
                    <Button type="submit">Send message</Button>
                </StyledForm>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    padding: 60px 20px;
    background-color: ${theme.colors.primaryBg};
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    @media (max-width: 768px) {
        padding: 40px 10px;
    }

    @media (max-width: 576px) {
        padding: 20px 5px;
    }
`;

const StyledForm = styled.form<{ isVisible: boolean }>`
    max-width: 540px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin: 0 auto;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;

    ${({ isVisible }) => isVisible && `
        opacity: 1;
        transform: translateY(0);
    `}

    textarea {
        resize: none;
        height: 155px;
    }
`;

const Field = styled.input`
    width: 100%;
    background-color: ${theme.colors.secondaryBg};
    border: 1px solid ${theme.colors.borderColor};
    padding: 7px 15px;
    border-radius: 4px;

    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 12px;
    letter-spacing: 0.05em;

    color: ${theme.colors.font};

    &::placeholder {
        color: ${theme.colors.placeholderColor};
        text-transform: capitalize;
    }

    &:focus-visible {
        outline: 1px solid ${theme.colors.borderColor};
    }
`;

const TextAreaField = styled(Field).attrs({ as: 'textarea' })``;