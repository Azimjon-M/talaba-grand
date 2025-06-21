import styled from 'styled-components';
// ${(props) => props.color || '#f8f9fa'}

export const FooterContainer = styled.div`
    background: linear-gradient(
        to right,
        ${(props) => props.color.left || '#f8f9fa'},
        ${(props) => props.color.right || '#f8f9fa'}
    );
    padding: 0 8px;
    @media (width >= 40rem) {
        padding: 0 16px;
    }
    @media (width >= 48rem) {
        padding: 0 24px;
    }
`;
