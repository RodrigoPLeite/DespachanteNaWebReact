import { Card, CardContent, TextField, Button, Box } from '@mui/material';
import TableContainer from "@mui/material/TableContainer";
import Typography from "@mui/material/Typography";
import React, { useState } from 'react';
import { getNome } from "../utils/storage";
import { useNavigate } from "react-router-dom";
import RecuperarSenha from '../pages/home/recuperarSenha'
import Axios from "axios";

const TelaLogin = () => {
    
    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");
    const navigate = useNavigate();

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const dadosLogin = {
            nome,
            senha
        }
        try{
            await Axios.get("http://localhost:3001/login")
            .then((res) => {  
              const resultado = res.data.filter(dados =>
                 dados.senha === dadosLogin.senha 
                && dados.nome === dadosLogin.nome);
              console.log(resultado)
              if(resultado.length > 0) {
                  let nomeLogin = resultado.map(r => r.nome)
                  alert("Bem vindo " + nomeLogin)
                  localStorage.setItem('nomeLogado', nomeLogin )
                  navigate("/home")
              }else{
                alert("Nome ou Senha Não conferem.")
              }
            });
        }catch(err){
            alert("Erro: " + err);
        }
    }

    const handleSubmitRecuperarSenha = () => {
        navigate("/recuperar-senha");
    }

    return (
        <>
            <Card sx={{
                display: "block",
                marginLeft: "auto",
                backgroundColor: '#123550',
                width: "350px",
                height: "430px",
                marginRight: 15,
                opacity: "80%",
            }}>
                <CardContent sx={{
                    // backgroundColor: "#0a72c7",
                    paddingTop: 2,
                    color: "white",
                }}>
                    <TableContainer>
                        <Typography sx={{
                        }}
                        variant="h4"
                        align="center"
                        color="white"
                        >
                            Login
                        </Typography>
                        <form onSubmit={handleSubmit}>
                            <TextField sx={{ width: 310, marginTop: 5, backgroundColor: 'white'}}
                                label="Nome"
                                variant="outlined"
                                type="text"
                                value={nome.toUpperCase()}
                                onChange={(e) => setNome(e.target.value)}
                            />
                             <TextField sx={{ width: 310, marginTop: 4, backgroundColor: 'white'}}
                                label="Senha"
                                variant="outlined"
                                type="password"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                            />
                            <Box sx={{ "& button": { m: 1 }, align: "center", paddingTop: 6}}>
                                <Typography
                                    variant="h4"
                                    component="div"
                                    align="center"
                                >
                                    <Button size="small" variant="contained" onClick={handleSubmit}>
                                        Confirmar
                                    </Button>
                                    <Button size="small" variant="contained" onClick={handleSubmitRecuperarSenha}>
                                        Esqueci minha Senha
                                    </Button>
                                </Typography>
                            </Box>
                        </form>
                    </TableContainer>
                </CardContent>

            </Card>
        </>
    );
}

export default TelaLogin;