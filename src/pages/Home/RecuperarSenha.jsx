// import imagemDocumento from '../../image/imagemDocumento.png';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Card, CardContent, TextField, Button } from '@mui/material';
import TableContainer from "@mui/material/TableContainer";
import React, { useState } from 'react';
import { getNome } from "../../utils/storage";


const RecuperarSenha = () => {

    const [nome, setNome] = useState("");
    const [palavraChave, setPalavraChave] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmaSenha, setConfirmaSenha] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const dadosLogin = {
            nome,
            palavraChave,
            senha,
            confirmaSenha
        }
        if(dadosLogin.nome === "Rodrigo Leite") {
            localStorage.setItem('nomeLogado', dadosLogin.nome);
            alert("Logado como: " + getNome('nomeLogado'));
            console.log("Logado como: " + getNome('nomeLogado'));
        } else{
            alert("Nome ou Senha Não confere.");
        }
    }

    const handleSubmitRecuperarSenha = () => {
    }

    return (
        <>
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
            <Card sx={{
                display: "block",
                marginLeft: "40%",
                backgroundColor: '#123550',
                width: "350px",
                height: "580px",
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
                            Alterar Senha
                        </Typography>
                        <form onSubmit={handleSubmit}>
                            <TextField sx={{ width: 310, marginTop: 5, backgroundColor: 'white'}}
                                label="Nome"
                                variant="outlined"
                                type="text"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                            />
                             <TextField sx={{ width: 310, marginTop: 5, backgroundColor: 'white'}}
                                label="Palavra-Chave"
                                variant="outlined"
                                type="text"
                                value={palavraChave}
                                onChange={(e) => setPalavraChave(e.target.value)}
                            />
                             <TextField sx={{ width: 310, marginTop: 4, backgroundColor: 'white'}}
                                label="Senha"
                                variant="outlined"
                                type="password"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                            />
                            <TextField sx={{ width: 310, marginTop: 4, backgroundColor: 'white'}}
                                label="Nova Senha"
                                variant="outlined"
                                type="password"
                                value={confirmaSenha}
                                onChange={(e) => setConfirmaSenha(e.target.value)}
                            />
                            <Box sx={{ "& button": { m: 1 }, align: "center", paddingTop: 5}}>
                                <Typography
                                    variant="h4"
                                    component="div"
                                    align="center"
                                >
                                    <Button size="small" variant="contained" onClick={handleSubmit}>
                                        Confirmar Nova Senha
                                    </Button>
                                    <Button size="small" variant="contained" onClick={handleSubmitRecuperarSenha}>
                                        Lembrei minha senha. Voltar!!
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

export default RecuperarSenha;
