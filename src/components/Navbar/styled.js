import styled from 'styled-components';

export const NavbarContainer = styled.div`
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    background-color: ${({ color }) => color};
    overflow: hidden;
    user-select: none;
    padding: 0 8px;
    z-index: 30;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
    @media (width >= 40rem) {
        padding: 0 16px;
    }
    @media (width >= 48rem) {
        padding: 0 24px;
    }
`;
