import styled from 'styled-components';

export const FooterContainer = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    background-color: ${({ color }) => color};
    overflow: hidden;
    user-select: none;
    padding: 0 8px;
    z-index: -10;
    @media (width >= 40rem) {
        padding: 0 16px;
    }
    @media (width >= 48rem) {
        padding: 0 24px;
    }
`;
