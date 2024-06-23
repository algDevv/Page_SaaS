import React from 'react';
import { styled } from '@mui/system';
import { Box, Button, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ControlPointRoundedIcon from '@mui/icons-material/ControlPointRounded';
import DomainAddIcon from '@mui/icons-material/DomainAdd';
import EastRoundedIcon from '@mui/icons-material/EastRounded';

interface CardsProps {
    Pourcentage: number;
}

const Cards: React.FC<CardsProps> = ({ Pourcentage }) => {
    let Prix1 = Number(169) - (169 * (Number(Pourcentage) / 100));
    let Prix2 = Number(199) - (199 * (Number(Pourcentage) / 100));

    const ContainerCss = styled(Box)(() => ({
        display: "flex",
        justifyContent: "space-between",
        gap: "3rem"
        
    }));

    const ContainerMid = styled(Box)(() => ({
        display: "flex",
        flexDirection: 'column',
        gap: "3rem",
        textAlign: "center",
        alignItems: "center",
        border: "solid 2px #3358ff",
        borderRadius: "6px",
        padding: "4rem 2rem",
        position: "relative",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
        
    }));

    const Container1_3 = styled(Box)(() => ({
        display: "flex",
        flexDirection: 'column',
        gap: "3rem",
        textAlign: "center",
        alignItems: "center",
        border: "solid 2px lightgrey",
        borderRadius: "6px",
        padding: "4rem 2rem"
    }));

    const TypoListe = styled(Typography)(() => ({
        display: "flex",
        flexDirection: "row",
        textAlign: "start",
        alignItems: "center",
        gap: "1rem"
    }));

    return (
        <ContainerCss my={15} sx={{ flexDirection: { xs: "column", lg: "row" }, alignItems: { xs: "center", lg: "normal" } }}>

            <Container1_3 sx={{ width: { xs: 0.8, lg: 1 } }}>
                <Typography variant="h2">Standard</Typography>
                <Typography variant="h2" color="primary">{Math.floor(Prix1)}€</Typography>
                <Box sx={{ display: 'flex', alignItems: "start", flexDirection: "column", gap: "1rem" }}>
                    <TypoListe>
                        <CheckIcon />
                        <Typography variant='h5'>Accès aux jeux en version non personnalisés</Typography>
                    </TypoListe>
                    <TypoListe>
                        <CheckIcon />
                        <Typography variant='h5'>3 actions disponibles</Typography>
                    </TypoListe>
                    <TypoListe variant='h5'>
                        <CheckIcon />
                        Sélection de l'ordre de priorité des actions
                    </TypoListe>
                    <TypoListe variant='h5'>
                        <CheckIcon />
                        Sélection de l'ordre de priorité des actions
                    </TypoListe>
                    <TypoListe variant='h5'>
                        <CheckIcon />
                        Sélection des cadeaux
                    </TypoListe>
                    <TypoListe variant='h5'>
                        <CheckIcon />
                        Accès au tableau de bord pour suivre vos activités
                    </TypoListe>
                </Box>
                <Button sx={{ marginTop: 'auto', border: "solid 2px #4615b2", boxShadow: "5px 4px 0 #4615b2" }} variant="outlined" color="primary">
                    <Typography sx={{ textTransform: 'none' }} variant='h3'>Je sélectionne cette offre</Typography>
                </Button>
            </Container1_3>

            <ContainerMid sx={{ width: { xs: 0.8, lg: 1 }, transform: { lg: 'scale(1.07)' } }}>
                <Box sx={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", backgroundColor: "rgba(51, 88, 255, 0.1)" }}></Box>
                <BookmarkIcon sx={{ color: "#3358ff", height: "50px", width: "40px", position: "absolute", top: "-20px", right: "10px" }} />
                <Typography variant="h2" color="secondary.main">Premium</Typography>
                <Typography sx={{fontSize : "3rem" }} variant="h1" color="secondary.main">{Math.floor(Prix2)}€</Typography>
                <Box sx={{ display: 'flex', alignItems: "start", flexDirection: "column", gap: "0.5rem" }}>
                    <TypoListe>
                        <CheckIcon />
                        <Typography variant='h5'>3 actions disponibles</Typography>
                    </TypoListe>
                    <TypoListe>
                        <CheckIcon />
                        <Typography variant='h5'>Sélection de l'ordre de priorité des actions</Typography>
                    </TypoListe>
                    <TypoListe variant='h5'>
                        <CheckIcon />
                        Sélection des cadeaux
                    </TypoListe>
                    <TypoListe variant='h5'>
                        <CheckIcon />
                        Accès au tableau de bord pour suivre vos activités
                    </TypoListe>
                    <TypoListe variant='h5'>
                        <ControlPointRoundedIcon sx={{ color: "#ffa726" }} />
                        Accès aux jeux en version personnalisés
                    </TypoListe>
                    <TypoListe variant='h5'>
                        <ControlPointRoundedIcon sx={{ color: "#ffa726" }} />
                        Intégration de vos couleurs dans les jeux
                    </TypoListe>
                    <TypoListe variant='h5'>
                        <ControlPointRoundedIcon sx={{ color: "#ffa726" }} />
                        Intégration de votre logo dans les jeux
                    </TypoListe>
                    <TypoListe variant='h5'>
                        <ControlPointRoundedIcon sx={{ color: "#ffa726" }} />
                        Intégration vos pictogrammes dans les jeux
                    </TypoListe>
                </Box>
                <Button sx={{
                    backgroundColor: "#ff9100", marginTop: 'auto',
                    border: "solid 2px #4615b2",
                    boxShadow: "5px 4px 0 #4615b2"
                }} variant="contained">
                    <Typography sx={{ textTransform: 'none' }} variant='h3'>Je sélectionne cette offre</Typography>
                </Button>
            </ContainerMid>

            <Container1_3 sx={{ width: { xs: 0.8, lg: 1 } }}>
                <Typography variant="h2">Sur Devis</Typography>
                <DomainAddIcon sx={{ width: "50px", height: "50px", color: "#3358ff" }} />
                <Box sx={{ display: 'flex', alignItems: "start", flexDirection: "column", gap: "0.5rem" }}>
                    <TypoListe>
                        <EastRoundedIcon />
                        <Typography variant='h5'>Vous avez plusieurs établissements ?</Typography>
                    </TypoListe>
                    <TypoListe>
                        <EastRoundedIcon />
                        <Typography variant='h5'>Vous souhaitez un jeu sur mesure à l'effigie de votre marque ?</Typography>
                    </TypoListe>
                    <TypoListe variant='h5'>
                        <EastRoundedIcon />
                        Vous souhaitez une intégration caisse ?
                    </TypoListe>
                </Box>
                <Box sx={{ textAlign: 'center', width: "100%", marginTop: "2rem" }}>
                    <TypoListe variant='h5' sx={{ textAlign: 'start' }}>
                        Un devis sur mesure est nécessaire pour répondre avec précision aux besoins spécifiques de votre réseau d'établissements et assurer une intégration harmonieuse
                    </TypoListe>
                </Box>
                <Button sx={{
                    marginTop: 'auto',
                    border: "solid 2px #4615b2",
                    boxShadow: "5px 4px 0 #4615b2"
                }} variant="outlined" color="primary">
                    <Typography sx={{ textTransform: 'none' }} variant='h3'>Demander un devis</Typography>
                </Button>
            </Container1_3>

        </ContainerCss>
    )
}

export default Cards;
