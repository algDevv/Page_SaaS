import React from 'react';
import { Box, SvgIcon, Typography } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const Title: React.FC = () => {
  const icons: JSX.Element[] = [];

  for (let i = 0; i < 3; i++) {
    icons.push(
      <SvgIcon
        key={i}
        component={CloseRoundedIcon}
        sx={{ strokeWidth: 10, height: "0.8rem", width: "1rem", rotate: "10deg" }}
      />
    );
  }

  return (
    <Typography variant="h1" gutterBottom>
      DÉCOUVREZ <span style={{ color: '#3358ff', position: 'relative', display: 'inline-block', marginTop: "2rem", whiteSpace: "nowrap" }}>
        NOS OFFRES
        <Box
          component="span"
          sx={{
            position: 'absolute',
            top: '-9px',
            right: '-10px',
            width: '100%',
            height: '3rem',
            border: '1.5px solid #3358ff',
            borderRadius: '50%',
            transform: 'rotate(-5deg)',
            pointerEvents: 'none'
          }}
        ></Box>
        <Box sx={{ position: "absolute", display: "flex", alignItems: "center", top: "-22px", right: "5px" }}>
          {icons}
        </Box>
      </span>
    </Typography>
  );
}

export default Title;
