import React, { useState, useEffect } from 'react';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Link, useNavigate } from 'react-router-dom';


const Navbar = () => {

    const navigate = useNavigate();
    const [nomeLogado, setNomeLogado] = useState("");

    useEffect(() => {
        setNomeLogado(localStorage.getItem('nomeLogado'))
    })

    const logOff = () => {
        localStorage.clear();
        navigate("/");
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: "blue", display: "flex", justifyContent: "center"}}>
                <Toolbar>
                    <Typography sx={{
                        fontSize: 25,
                        fontFamily: 'Hauser Condensed',
                        textAlign: "left",
                        color: "white",
                        marginTop: -1,
                    }}
                    >
                        Despachante Na Web
                        <Typography sx={{
                            fontSize: 20,
                            fontFamily: 'Hauser Condensed',
                            textAlign: "left",
                            color: "black",
                            marginTop: -1,
                        }}
                        >
                            Sistema Para Despachantes
                        </Typography>
                    </Typography>
                    <Link to="/home">
                        <Button sx={{
                            color: 'white',
                            paadingLeft: 2
                        }}
                        >Home
                        </Button>

                    </Link>
                    <Link to="/processos">
                        <Button sx={{
                            color: 'white',
                        }}>
                            Processos
                        </Button>
                    </Link>
                    <Button sx={{
                        color: 'white',
                    }}>
                        Habilitação
                    </Button>
                    <span style={{
                        color: "white",
                        float: "right",
                        width: "60%",
                        textAlign: "right",
                    }}
                    >
                        {nomeLogado}
                    </span>
                    <IconButton
                        size="small"
                        sx={{ color: "white", backgroundColor: "red", marginLeft: "15px", borderRadius: '20%' }}
                        onClick={logOff}
                    >
                        Sair
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar;