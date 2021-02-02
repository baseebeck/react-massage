import styled from 'styled-components';
import {Link} from 'react-scroll';

export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({ primary }) => (primary ? '#F9F4E8' : '#010606')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
    color: ${({ dark }) => (dark ? '#010606' : '#fff')};
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: 1px solid ${({ primary }) => (primary ? '#F9F4E8' : '#010606')};
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({ primary }) => (primary ? '#CDA646' : '#F9F4E8')};
        color: ${({ primary }) => (primary ? '#010606' : '#010606')};
        border: 1px solid ${({ primary }) => (primary ? '#CDA646' : '#010606')};
    }
`