import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const NavbarInicio = () => {
    return (
        <>
            <Box sx={{ backgroundColor: 'blue', width: "100%", height: "70px", marginBottom: 3 }}>
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

        </>
    )
}

export default NavbarInicio();