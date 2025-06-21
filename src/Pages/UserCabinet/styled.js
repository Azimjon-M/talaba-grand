import styled, { keyframes } from 'styled-components';

// Animatsiya uchun @keyframes
const gradientMove = keyframes`
    0%, 100% {
    transform: translateX(0);
    }
    50% {
    transform: translateX(-10%);
    }
`;

const textColorChange = keyframes`
    0%, 100% {
    color: rgb(255, 204, 0); /* sariq */
    }
    50% {
    color: rgb(0, 204, 255); /* ko'k */
    }
`;

// Styled component
export const AnimatedText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
    width: 300px;
    border-radius: 0.5rem;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    overflow: hidden;
    background: linear-gradient(to right, #fbbf24, #10b981, #3b82f6);
    -webkit-background-clip: text;
    color: transparent;
    animation: ${gradientMove} 3s linear infinite,
        ${textColorChange} 5s linear infinite;
`;
