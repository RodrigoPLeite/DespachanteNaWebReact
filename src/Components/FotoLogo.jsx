import React from 'react'
import imagemDocumento from '../image/RafaelDespachanteLogo.png';
import Box from "@mui/material/Box";

const FotoLogo = () => {
    return (
        <>
        <Box sx={{
            backgroundImage: `url(${imagemDocumento})`,
            backgroundRepeat: 'no-repeat',
            width: "100%",
            height: "600px",
            backgroundPosition: "center",
        }}>
        </Box>
        </>
    );
}

export default FotoLogo;