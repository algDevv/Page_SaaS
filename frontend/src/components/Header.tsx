import React from 'react';
import { styled, Box } from '@mui/material';
import Title from '../components/Title';
import Presentation from './Presentation';

const Header: React.FC = () => {
    const ContainerCss = styled(Box)(() => ({
        margin: "3rem",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        textAlign: "center"
    }));

    return (
        <ContainerCss>
            <Title />
            <Presentation />
        </ContainerCss>
    );
}

export default Header;
