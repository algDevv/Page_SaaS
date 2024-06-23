import React, { useState } from 'react';
import { Box, Button, Grid, styled, Typography } from '@mui/material';
import Cards from "./Cards"

const LayoutCard: React.FC = () => {
    const [isActive, setisActive] = useState<string>("1 mois");
    const PourcentagePrice: number[] = [0, 20, 30, 40, 50];
    let finalPourcentage: number[] = [0];

    switch (isActive) {
        case "1 mois":
            finalPourcentage.push(PourcentagePrice[0]);
            break;
        case "3 mois":
            finalPourcentage.push(PourcentagePrice[1]);
            break;
        case "6 mois":
            finalPourcentage.push(PourcentagePrice[2]);
            break;
        case "12 mois":
            finalPourcentage.push(PourcentagePrice[3]);
            break;
        case "24 mois":
            finalPourcentage.push(PourcentagePrice[4]);
            break;
        default:
            break;
    }

    const GridActive = styled(Button)<{ isactive: string }>((props) => ({
        display: "flex", flexDirection: 'column', alignItems: "baseline", gap: "1rem", padding: ' 1rem 2rem', borderRadius: "1", color: "#3358ff", position: 'relative', overflow: 'hidden',
        '&::before, &::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            height: '6px',
            width: props.isactive ? "100%" : 0,
            backgroundColor: '#3358ff',
            transition: 'width 1s',
        },
        '&::before': {
            left: '50%',
        },
        '&::after': {
            right: '50%',
            '&:hover': {
                backgroundColor: 'transparent'
            }
        }
    }));

    const GridInactive = styled(Button)(() => ({
        display: "flex", flexDirection: 'column', alignItems: "baseline", gap: "1rem", padding: ' 1rem 2rem', borderRadius: "0", color: "#3358ff", opacity: "0.4",
    }));

    interface GridItemProps {
        isActive: boolean;
        onClick: () => void;
        children: React.ReactNode;
    }

    const GridItem: React.FC<GridItemProps> = ({ isActive, onClick, children }) => (
        isActive ? (
            <GridActive isactive={isActive.toString()} onClick={onClick}>
                {children}
            </GridActive>
        ) : (
            <GridInactive onClick={onClick}>
                {children}
            </GridInactive>
        )
    );

    return (
        <Box>
            <Grid container spacing={6} justifyContent="space-around">
                <Grid item>
                    <GridItem isActive={isActive === '1 mois'} onClick={() => setisActive('1 mois')}>
                        <Typography variant="h3">1 Mois</Typography>
                    </GridItem>
                </Grid>
                <Grid item>
                    <GridItem isActive={isActive === '3 mois'} onClick={() => setisActive('3 mois')}>
                        <Typography variant="h3">3 Mois</Typography>
                        <Typography variant='h5'>-20% / mois</Typography>
                    </GridItem>
                </Grid>
                <Grid item>
                    <GridItem isActive={isActive === '6 mois'} onClick={() => setisActive('6 mois')}>
                        <Typography variant="h3">6 Mois</Typography>
                        <Typography variant='h5'>-30% / mois</Typography>
                    </GridItem>
                </Grid>
                <Grid item>
                    <GridItem isActive={isActive === '12 mois'} onClick={() => setisActive('12 mois')}>
                        <Typography variant="h3">12 Mois</Typography>
                        <Typography variant='h5'>-40% / mois</Typography>
                    </GridItem>
                </Grid>
                <Grid item>
                    <GridItem isActive={isActive === '24 mois'} onClick={() => setisActive('24 mois')}>
                        <Typography variant="h3">24 Mois</Typography>
                        <Typography variant='h5'>-50% / mois</Typography>
                    </GridItem>
                </Grid>
            </Grid>
                <Cards Pourcentage={finalPourcentage[1]} />
        </Box>
    );
}

export default LayoutCard;
