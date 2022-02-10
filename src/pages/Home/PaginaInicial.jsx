import React from 'react';
import TelaLogin from '../../Components/TelaLogin';
import imagemDocumento from '../../image/imagemDocumento.png';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const PaginaInicial = () => {
    return (
        <>
            {/* <Navbar /> */}
            <Box sx={{backgroundColor: 'blue', width: "100%", height: "70px", marginBottom: 3}}>
                <Typography sx={{
                    fontSize: 55,
                    fontFamily: 'Hauser Condensed',
                    textAlign: "center",
                    color: "white",
                    marginTop: -1
                }}
                >
                    Despachante Na Web
                </Typography>
                <Typography sx={{
                     fontSize: 20,
                     fontFamily: 'Hauser Condensed',
                     textAlign: "center",
                     color: "black",
                     marginTop: -2
                }}
                >
                    Sistema Para Despachantes
                </Typography>
            </Box>
            <Box sx={{ 
                backgroundImage: `url(${imagemDocumento})`,
                backgroundRepeat: 'no-repeat',
                width: "100%",
                height: "600px",  
                backgroundPosition: "center",
                }}>
                    <Box sx={{paddingTop: 3}}>
                        <TelaLogin />
                    </Box>
            </Box>
            
        </>
    );
}

export default PaginaInicial;
