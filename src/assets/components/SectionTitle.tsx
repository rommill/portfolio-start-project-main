import styled from 'styled-components';
import {theme} from "../../styles/Theme";
import {font} from "../../styles/Common";

export const SectionTitle = styled.h2`
    ${font({ family: "'Josefin Sans', sans-serif", weight: 600, Fmax: 36, Fmin: 30 })}

    text-align: center;
    letter-spacing: 5px;
    margin-bottom: 90px;

    position: relative;
    overflow: hidden; /* Обрезка текста */
    white-space: nowrap;
    animation: typing 3s steps(30) forwards;

    text-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    
    


    @keyframes typing {
        from {
            width: 0;
        }
        to {
            width: 100%;
        }
    }
`;

