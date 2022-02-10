import { Card, CardContent, TextField, Button, Box, Container, TextareaAutosize } from '@mui/material';
import TableContainer from "@mui/material/TableContainer";
import Typography from "@mui/material/Typography";
import React, { useState } from 'react';
import Navbar from '../../Components/Navbar';
import Axios from 'axios';
import { mask, unMask } from 'remask';

const Processos = () => {

    const [id, setId] = useState("");
    const [data, setData] = useState(Intl.DateTimeFormat('pt-br').format(new Date()).split('/').reverse().join('-'));
    const [dataCadastro, setDataCadastro] = useState(Intl.DateTimeFormat('pt-br').format(new Date()).split('/').reverse().join('-'));

    const [numeroServico, setNumeroServico] = useState("");
    const [descricaoServico, setDescricaoServico] = useState("");
    const [empresa, setEmpresa] = useState("");

    const [cpf, setCpf] = useState("");
    const [nome, setNome] = useState("");
    const [rg, setRg] = useState("");
    const [cep, setCep] = useState("");
    const [endereco, setEndereco] = useState("");
    const [numero, setNumero] = useState("");
    const [complemento, setComplemento] = useState("");
    const [bairro, setBairro] = useState("");
    const [codCidade, setCodCidade] = useState("");
    const [cidade, setCidade] = useState("");
    const [siglaEstado, setSiglaEstado] = useState("");
    const [estado, setEstado] = useState("");
    const [telefoneFixo, setTelefoneFixo] = useState("");
    const [falarCom1, setFalarCom1] = useState("");
    const [celular, setCelular] = useState("");
    const [falarCom2, setFalarCom2] = useState("");
    const [celular1, setCelular1] = useState("");
    const [falarCom3, setFalarCom3] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");
    const [email, setEmail] = useState("");

    const [placa, setPlaca] = useState("");
    const [renavam, setRenavam] = useState("");
    const [chassi, setChassi] = useState("");
    const [codMarca, setCodMarca] = useState("");
    const [descricaoMarca, setDescricaoMarca] = useState("");
    const [codCombustivel, setCodCombustivel] = useState("");
    const [descricaoCombustivel, setDescricaoCombustivel] = useState("");
    const [codCor, setCodCor] = useState("");
    const [descricaoCor, setDescricaoCor] = useState("");
    const [codEspecie, setCodEspecie] = useState("");
    const [descricaoEspecie, setDescricaoEspecie] = useState("");
    const [codTipo, setCodTipo] = useState("");
    const [descricaoTipo, setDescricaoTipo] = useState("");
    const [codCarroceria, setCodCarroceria] = useState("");
    const [descricaoCarroceria, setDescricaoCarroceria] = useState("");
    const [codCategoria, setCodCategoria] = useState("");
    const [descricaoCategoria, setDescricaoCategoria] = useState("");
    const [capPassageiro, setCapPassageiro] = useState("");
    const [potencia, setPotencia] = useState("");
    const [cilindrada, setCilindrada] = useState("");
    const [anoFabricacao, setAnoFabricacao] = useState("");
    const [anoModelo, setAnoModelo] = useState("");
    const [procedencia, setProcedencia] = useState("");
    const [placaAnterior, setPlacaAnterior] = useState("");
    const [remarcado, setRemarcado] = useState("");
    const [capTonelada, setCapTonelada] = useState("");

    const [cpfOuCnpjVendedor, setCpfOuCnpjVendedor] = useState("");
    const [nomeVendedor, setNomeVendedor] = useState("");
    const [codCidadeVendedor, setCodCidadeVendedor] = useState("");
    const [cidadeVendedor, setCidadeVendedor] = useState("");
    const [codEstadoVendedor, setCodEstadoVendedor] = useState("");
    const [estadoVendedor, setEstadoVendedor] = useState("");

    const [numeroCrv, setNumeroCrv] = useState("");
    const [dataEmissaoCrvNotaFiscal, setDataEmissaoCrvNotaFiscal] = useState("");
    const [numeroNotaFiscal, setNumeroNotaFiscal] = useState("");
    const [dataCompra, setDataCompra] = useState("");
    const [valorCompra, setValorCompra] = useState("");
    const [codAlienacao, setCodAlienacao] = useState("");
    const [nomeAlienacao, setNomeAlienacao] = useState("");
    const [nomeAlienacaoFinanceira, setNomeAlienacaoFinanceira] = useState("");
    const [restricao, setRestricao] = useState("");

    const [obs, setObs] = useState("");

    const limpar = () => {
        setData(Intl.DateTimeFormat('pt-br').format(new Date()).split('/').reverse().join('-'));
        setDataCadastro(Intl.DateTimeFormat('pt-br').format(new Date()).split('/').reverse().join('-'));
        
        setId("");
        setNumeroServico("");
        setDescricaoServico("");
        setEmpresa("");
        
        setNome("");
        setCpf("");
        setRg("");
        setCep("");
        setEndereco("");
        setNumero("");
        setComplemento("");
        setBairro("");
        setCodCidade("");//municipio
        setCidade("");
        setSiglaEstado("");
        setEstado("");
        setTelefoneFixo("");
        setFalarCom1("");
        setCelular("");
        setFalarCom2("");
        setCelular1("");
        setFalarCom3("");
        setDataNascimento("");    
        setEmail("");

        setPlaca("");
        setRenavam("");
        setChassi("");
        setCodMarca("");
        setDescricaoMarca("");
        setCodCombustivel("");
        setDescricaoCombustivel("");
        setCodCor("");
        setDescricaoCor("");
        setCodEspecie("");
        setDescricaoEspecie("");
        setCodTipo("");
        setDescricaoTipo("");
        setCodCarroceria("");
        setDescricaoCarroceria("");
        // setCodCategoria(Categoria);
        setDescricaoCategoria("");
        setCapPassageiro("");
        setPotencia("");
        setCilindrada("");
        setAnoFabricacao("");
        setAnoModelo("");
        setProcedencia("");
        setPlacaAnterior("");
        setRemarcado("");
        setCapTonelada("");
        setCpfOuCnpjVendedor("");
        setNomeVendedor("");
        setCodCidadeVendedor("");
        setCidadeVendedor("");
        setCodEstadoVendedor("");
        setEstadoVendedor("");
        setNumeroCrv("");
        setDataEmissaoCrvNotaFiscal("");    
        setNumeroNotaFiscal("");
        setDataCompra("");    
        setValorCompra("");
        setCodAlienacao("");
        setNomeAlienacao("");
        setNomeAlienacaoFinanceira("");
        setRestricao("");
        setObs("");
    }

    const handleClickGravarProcesso = () => {
        Axios.post("http://localhost:3001/gravar", {
            data: data,
            numServico: numeroServico,
            nomeServico: descricaoServico,
            nome: nome,
            rg: rg,
            datanasc: dataNascimento,
            cep: cep,
            endereco: endereco,
            numero: numero,
            complemento: complemento,
            bairro: bairro,
            numMun: codCidade,
            nomeMun: cidade,
            uf: siglaEstado,
            nomeUf: estado,
            tel1: telefoneFixo,
            telnome1: falarCom1,
            tel2: celular,
            telnome2: falarCom2,
            tel3: celular1,
            telnome3: falarCom3,
            email: email,
            placa: placa,
            renavam: renavam,
            chassi: chassi,
            valorRecibo: valorCompra,
            dataCompra: dataCompra,
            crv: numeroCrv,
            dataCrv: dataEmissaoCrvNotaFiscal,
            numnota: numeroNotaFiscal,
            marca: codMarca,
            modelo: descricaoMarca,
            numCombustivel: codCombustivel,
            nomeCombustivel: descricaoCombustivel,
            numCor: codCor,
            nomeCor: descricaoCor,
            anoFab: anoFabricacao,
            anoMod: anoModelo,
            numEspecie: codEspecie,
            nomeEspecie: descricaoEspecie,
            numTipo: codTipo,
            nomeTipo: descricaoTipo,
            potencia: potencia,
            cilindrada: cilindrada,
            numCarroceria: codCarroceria,
            nomeCarroceria: descricaoCarroceria,
            capPass: capPassageiro,
            capTonelada: capTonelada,
            cmt: 0,
            placaAnt: placaAnterior,
            nomePropAnt: nomeVendedor,
            numMunAnt: codCidadeVendedor,
            nomeMunAnt: cidadeVendedor,
            numUfAnt: codEstadoVendedor,
            nomeUfAnt: estadoVendedor,
            numAlienacao: codAlienacao,
            nomeAlienacao: nomeAlienacao,
            nomeAlienacaoFinan: nomeAlienacaoFinanceira,
            atendente: "Rdrigo",
            vendedor: "Rayan",
            obs: obs,
            cpf: cpf,
            cnpj: cpf,
            cpfAnt: cpfOuCnpjVendedor, 
            cnpjAnt: cpfOuCnpjVendedor,
            procedencia: procedencia,
            remarcado: remarcado,
            docpronto3: "N",
            docpronto: "RRR",
            dataentrega: '__/__/____',
            cadastradoem: dataCadastro,
            categoria: descricaoCarroceria,
            numCategoria: 1,
            firma: empresa,
           
        })
        .then((res) => {
            console.log(res);
            console.log("Gravou");
        })
    }

    const handleClickPesquisarServico = () => {
        Axios.get(`http://localhost:3001/pesquisar-servico/${numeroServico}`)
        .then((res) => {
            // console.log(res.data);
            setDescricaoServico(res.data[0].nome);
        })
    }

    const handleClickPesquisarEmpresaCliente = () => {
        Axios.get(`http://localhost:3001/pesquisar-empresa-cliente/${empresa}`)
        .then((res) => {
            console.log(res.data);
            setEmpresa(res.data[0].nome);
        })
    }

    const handleClickPesquisarCliente = () => {
        Axios.get(`http://localhost:3001/pesquisar-cliente/${cpf}`)
        .then((res) => {
            console.log(res.data);
            setNome(res.data[0].NOME)
            setEndereco(res.data[0].endereco);
            setBairro(res.data[0].bairro);
            setCodCidade(res.data[0].numMun);
            setCidade(res.data[0].nomeMun);
            setSiglaEstado(res.data[0].Uf);
            setEstado(res.data[0].nomeUf);
        })
    }

    const handleClickPesquisarCep = () => {
        Axios.get(`http://localhost:3001/pesquisar-cep/${cep}`)
        .then((res) => {
            console.log(res.data);
            setEndereco(res.data[0].sigla + ' ' + res.data[0].nome);
            setBairro(res.data[0].bairro);
            setCodCidade(res.data[0].municipio);
            setCidade(res.data[0].nomemunicipio);
            setSiglaEstado(res.data[0].estado);
            setEstado(res.data[0].nomeestado);
        })
    }

    const handleClickPesquisarCidade = () => {
        Axios.get(`http://localhost:3001/pesquisar-cidade/${codCidade}`)
        .then((res) => {
            console.log(res.data);
            setCidade(res.data[0].nome);
        })
    }

    const handleClickPesquisarEstado = () => {
        Axios.get(`http://localhost:3001/pesquisar-estado/${siglaEstado}`)
        .then((res) => {
            console.log(res.data);
            setEstado(res.data[0].nome);
        })
    }

    const handleClickPesquisarProcesso = () => {
        Axios.get(`http://localhost:3001/pesquisar/${id}`)
        .then((res) => {
    
            setData(res.data[0].data.slice(0, 10).replace('T', ' '));
            setDataCadastro(res.data[0].cadastradoem.slice(0, 10).replace('T', ' '));

            setNumeroServico(res.data[0].numServico);
            setDescricaoServico(res.data[0].nomeServico);
            setEmpresa(res.data[0].firma);
            
            setNome(res.data[0].NOME);
            if(res.data[0].cpf === "___.___.___-__"){
                setCpf(res.data[0].cnpj);
            }else{
                setCpf(res.data[0].cpf);
            }
            setRg(res.data[0].rg);
            setCep(res.data[0].cep);
            setEndereco(res.data[0].endereco);
            setNumero(res.data[0].numero);
            setComplemento(res.data[0].complemento);
            setBairro(res.data[0].bairro);
            setCodCidade(res.data[0].numMun);//municipio
            setCidade(res.data[0].nomeMun);
            setSiglaEstado(res.data[0].Uf);
            setEstado(res.data[0].nomeUf);
            setTelefoneFixo(res.data[0].tel1);
            setFalarCom1(res.data[0].telnome1);
            setCelular(res.data[0].tel2);
            setFalarCom2(res.data[0].telnome2);
            setCelular1(res.data[0].tel3);
            setFalarCom3(res.data[0].telnome3);
            if(res.data[0].datanasc === "__/__/____"){
                setDataNascimento("");    
            }else{
                setDataNascimento(res.data[0].datanasc.split('/').reverse().join('-'));
            }
            setEmail(res.data[0].email);

            setPlaca(res.data[0].placa);
            setRenavam(res.data[0].renavam);
            setChassi(res.data[0].chassi);
            setCodMarca(res.data[0].marca);
            setDescricaoMarca(res.data[0].modelo);
            setCodCombustivel(res.data[0].numCombustivel);
            setDescricaoCombustivel(res.data[0].nomeCombustivel);
            setCodCor(res.data[0].numCor);
            setDescricaoCor(res.data[0].nomeCor);
            setCodEspecie(res.data[0].numEspecie);
            setDescricaoEspecie(res.data[0].nomeEspecie);
            setCodTipo(res.data[0].numTipo);
            setDescricaoTipo(res.data[0].nomeTipo);
            setCodCarroceria(res.data[0].numCarroceria);
            setDescricaoCarroceria(res.data[0].nomeCarroceria);
            // setCodCategoria(res.data[0].numCategoria);
            setDescricaoCategoria(res.data[0].categoria);
            setCapPassageiro(res.data[0].capPass);
            setPotencia(res.data[0].potencia);
            setCilindrada(res.data[0].cilindrada);
            setAnoFabricacao(res.data[0].anoFab);
            setAnoModelo(res.data[0].anoMod);
            setProcedencia(res.data[0].procedencia);
            setPlacaAnterior(res.data[0].placaAnt);
            setRemarcado(res.data[0].remarcado);
            setCapTonelada(res.data[0].capTonelada);
            
            if(res.data[0].cpfAnt === "___.___.___-__"){
                setCpfOuCnpjVendedor(res.data[0].cnpjAnt);
            }else{
                setCpfOuCnpjVendedor(res.data[0].cpfAnt);
            }
            setNomeVendedor(res.data[0].nomePropAnt);
            setCodCidadeVendedor(res.data[0].numMunAnt);
            setCidadeVendedor(res.data[0].nomeMunAnt);
            setCodEstadoVendedor(res.data[0].numUfAnt);
            setEstadoVendedor(res.data[0].nomeUfAnt);
            
            setNumeroCrv(res.data[0].crv);
            if(res.data[0].dataCrv === "__/__/____"){
                setDataEmissaoCrvNotaFiscal("");    
            }else{
                setDataEmissaoCrvNotaFiscal(res.data[0].dataCrv.split('/').reverse().join('-'));
            }
            setNumeroNotaFiscal(res.data[0].numnota);
            if(res.data[0].dataCompra === "__/__/____"){
                setDataCompra("");    
            }else{
                setDataCompra(res.data[0].dataCompra.split('/').reverse().join('-'));
            }
            setValorCompra(res.data[0].valorRecibo);
            setCodAlienacao(res.data[0].numAlienacao);
            setNomeAlienacao(res.data[0].nomeAlienacao);
            setNomeAlienacaoFinanceira(res.data[0].nomeAlienacaoFinan);
            setRestricao(res.data[0].restricao);

            setObs(res.data[0].obs);

        })
        
    }
    
    return (
        <>
            <Navbar />
            <Container maxWidth="lg">
                <Box sx={{ width: "100%", height: "auto", border: "2px solid blue", marginTop: 2 }}>

                    <Box sx={{ width: "100%", height: "70px", marginTop: 2, display: "flex", flexDirection: "row" }}>

                        <TextField sx={{
                            width: 100,  marginLeft: "5px", marginRight: "5px"
                        }}
                            label="ID"
                            variant="outlined"
                            type="number"
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                            onKeyPress={(e) => { 
                                if(e.key === 'Enter'){
                                    handleClickPesquisarProcesso();
                                }
                            }}
                        >
                        </TextField>
                        <Button sx={{ height: "55px" }}
                            size="large" variant="contained" onClick={handleClickPesquisarProcesso}>
                            Pesquisar
                        </Button>
                        <TextField sx={{
                            width: 180,  marginLeft: "5px", marginRight: "5px"
                        }}
                            label="Data Último Serviço"
                            variant="outlined"
                            type="date"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            value={data}
                            onChange={(e) => setData(e.target.value)} 
                        >
                        </TextField>
                        <TextField sx={{
                            width: 180, marginLeft: "5px", marginRight: "5px"
                        }}
                            label="Cadastrado Em:"
                            variant="outlined"
                            type="date"
                            value={dataCadastro}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(e) => setDataCadastro(e.target.value)}
                        >
                        </TextField>
                            <TextField sx={{
                                width: 150, marginLeft: "45px", marginRight: "5px"
                            }}
                            label="Total Serviços"
                            variant="outlined"
                            type="text"
                            >
                            </TextField>
                            <TextField sx={{
                                width: 150, marginLeft: "5px", marginRight: "5px"
                            }}
                            label="Total Devedor"
                            variant="outlined"
                            type="text"
                            >
                            </TextField>
                            <TextField sx={{
                                width: 150, marginLeft: "5px", marginRight: "5px"
                            }}
                            label="Total Pago"
                            variant="outlined"
                            type="text"
                            >
                            </TextField>
                    </Box>
                    <Box sx={{ textAlign: "center" }}>
                            <Button sx={{ height: "35px", margin: 1 }}
                                size="large" variant="contained" onClick={handleClickGravarProcesso} >
                                Gravar
                            </Button>
                            <Button sx={{ height: "35px", margin: 1 }}
                                size="large" variant="contained" >
                                Serviços
                            </Button>
                            <Button sx={{ height: "35px", margin: 1 }}
                                size="large" variant="contained">
                                Atualizar
                            </Button>
                            <Button sx={{ height: "35px", margin: 1 }}
                                size="large" variant="contained" onClick={limpar}>
                                Limpar
                            </Button>
                            <Button sx={{ height: "35px", margin: 1 }}
                                size="large" variant="contained" >
                                Imprimir
                            </Button>
                        </Box>
                    <Box>
                        <fieldset style={{borderColor: "blue"}}>
                         <legend style={{color: "orange", fontFamily: "Lucida Sans", fontSize: 20}}>Serviço Atual E Empresa/Cliente Contratante</legend>
                            <TextField sx={{
                                width: 120, margin: "8px"
                            }}
                            label="Nº Serviço"
                            variant="outlined"
                            type="text"
                            value={numeroServico}
                            onChange={(e) => setNumeroServico(e.target.value)}
                            onKeyPress={(e) => { 
                                if(e.key === 'Enter'){
                                    handleClickPesquisarServico();
                                }
                            }}
                            >
                            </TextField>
                            <TextField sx={{
                                width: "45%", minWidth: "320px", margin: "8px"
                            }}
                            label="Descrição do Serviço Atual"
                            variant="outlined"
                            type="text"
                            value={descricaoServico}
                            onChange={(e) => setDescricaoServico(e.target.value)}
                            >
                            </TextField>
                            <TextField sx={{
                                width: "40%", minWidth: "420px", margin: "8px"
                            }}
                            label="Empresa/Cliente"
                            variant="outlined"
                            type="text"
                            value={empresa}
                            onChange={(e) => setEmpresa(e.target.value)}
                            onKeyPress={(e) => { 
                                if(e.key === 'Enter'){
                                    handleClickPesquisarEmpresaCliente();
                                }
                            }}
                            >
                            </TextField>
                        </fieldset>
                        <fieldset style={{borderColor: "blue", marginTop: "20px"}}>
                         <legend style={{color: "orange", fontFamily: "Lucida Sans", fontSize: 20}}>Dados do Comprador</legend>
                            <TextField sx={{
                                width: "15%",  minWidth: "200px", margin: "8px"
                            }}
                            label="CPF ou CNPJ"
                            variant="outlined"
                            type="text"
                            value={cpf}
                            onChange={(e) => setCpf(mask(unMask(e.target.value), ['999.999.999-99', '99.999.999/9999-99']))}
                            onKeyPress={(e) => { 
                                if(e.key === 'Enter'){
                                    handleClickPesquisarCliente();
                                }
                            }}
                            >
                            </TextField>
                            <TextField sx={{
                                width: "45%", minWidth: "400px", margin: "8px"
                            }}
                            label="Nome"
                            variant="outlined"
                            type="text"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            >
                            </TextField>
                            <TextField sx={{
                                width: "18%", minWidth: "200px", margin: "8px"
                            }}
                            label="RG com Orgão Emissor"
                            variant="outlined"
                            type="text"
                            value={rg}
                            onChange={(e) => setRg(e.target.value)}
                            >
                            </TextField>
                            <TextField sx={{
                                width: "10%", minWidth: "150px", margin: "8px"
                            }}
                            label="CEP"
                            variant="outlined"
                            type="text"
                            value={cep}
                            onChange={(e) => setCep(mask(unMask(e.target.value), ['99.999-999']))}
                            onKeyPress={(e) => { 
                                if(e.key === 'Enter'){
                                    handleClickPesquisarCep();
                                }
                            }}
                            >
                            </TextField>
                            <TextField sx={{
                                width: "40%", minWidth: "450px", margin: "8px"
                            }}
                            label="Endereço"
                            variant="outlined"
                            type="text"
                            value={endereco}
                            onChange={(e) => setEndereco(e.target.value)}
                            >
                            </TextField>
                            <TextField sx={{
                                width: "10%", minWidth: "120px", margin: "8px"
                            }}
                            label="Número"
                            variant="outlined"
                            type="text"
                            value={numero}
                            onChange={(e) => setNumero(e.target.value)}
                            >
                            </TextField>
                            <TextField sx={{
                                width: "15%", minWidth: "220px", margin: "8px"
                            }}
                            label="Complemento"
                            variant="outlined"
                            type="text"
                            value={complemento}
                            onChange={(e) => setComplemento(e.target.value)}
                            >
                            </TextField>
                            <TextField sx={{
                                width: "18%", minWidth: "260px", margin: "8px"
                            }}
                            label="Bairro"
                            variant="outlined"
                            type="text"
                            value={bairro}
                            onChange={(e) => setBairro(e.target.value)}
                            >
                            </TextField>
                            <TextField sx={{
                                width: "8%", minWidth: "120px", margin: "8px"
                            }}
                            label="Cód. Cidade"
                            variant="outlined"
                            type="text"
                            value={codCidade}
                            onChange={(e) => setCodCidade(e.target.value)}
                            onKeyPress={(e) => { 
                                if(e.key === 'Enter'){
                                    handleClickPesquisarCidade();
                                }
                            }}
                            >
                            </TextField>
                            <TextField sx={{
                                width: "30%", minWidth: "300px", margin: "8px"
                            }}
                            label="Cidade"
                            variant="outlined"
                            type="text"
                            value={cidade}
                            onChange={(e) => setCidade(e.target.value)}
                            >
                            </TextField>
                            <TextField sx={{
                                width: "8%", minWidth: "120px", margin: "8px"
                            }}
                            label="Sigla Estado"
                            variant="outlined"
                            type="text"
                            value={siglaEstado}
                            onChange={(e) => setSiglaEstado(e.target.value)}
                            onKeyPress={(e) => { 
                                if(e.key === 'Enter'){
                                    handleClickPesquisarEstado();
                                }
                            }}
                            >
                            </TextField>
                            <TextField sx={{
                                width: "30%", minWidth: "300px", margin: "8px"
                            }}
                            label="Estado"
                            variant="outlined"
                            type="text"
                            value={estado}
                            onChange={(e) => setEstado(e.target.value)}
                            >
                            </TextField>
                            <TextField sx={{
                                width: "15%", minWidth: "150px", margin: "8px"
                            }}
                            label="Telefone Fixo"
                            variant="outlined"
                            type="text"
                            value={telefoneFixo}
                            onChange={(e) => setTelefoneFixo(mask(unMask(e.target.value), ['(99) 9999-9999']))}
                            >
                            </TextField>
                            <TextField sx={{
                                width: "10%", minWidth: "180px", margin: "8px"
                            }}
                            label="Falar Com"
                            variant="outlined"
                            type="text"
                            value={falarCom1}
                            onChange={(e) => setFalarCom1(e.target.value)}
                            >
                            </TextField>
                            <TextField sx={{
                                width: "10%", minWidth: "150px", margin: "8px"
                            }}
                            label="Celular"
                            variant="outlined"
                            type="text"
                            value={celular}
                            onChange={(e) => setCelular(mask(unMask(e.target.value), ['(99) 99999-9999']))}
                            >
                            </TextField>
                            <TextField sx={{
                                width: "10%", minWidth: "180px", margin: "8px"
                            }}
                            label="Falar Com"
                            variant="outlined"
                            type="text"
                            value={falarCom2}
                            onChange={(e) => setFalarCom2(e.target.value)}
                            >
                            </TextField>
                            <TextField sx={{
                                width: "10%", minWidth: "150px", margin: "8px"
                            }}
                            label="Celular/Outro"
                            variant="outlined"
                            type="text"
                            value={celular1}
                            onChange={(e) => setCelular1(mask(unMask(e.target.value), ['(99) 99999-9999']))}
                            >
                            </TextField>
                            <TextField sx={{
                                width: "10%", minWidth: "180px", margin: "8px"
                            }}
                            label="Falar Com"
                            variant="outlined"
                            type="text"
                            value={falarCom3}
                            onChange={(e) => setFalarCom3(e.target.value)}
                            >
                            </TextField>
                            <TextField sx={{
                            width: 180,  margin: "8px"
                        }}
                            label="Data Nascimento"
                            variant="outlined"
                            type="date"
                            value={dataNascimento}
                            onChange={(e) => setDataNascimento(e.target.value)}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        >
                        </TextField>
                        <TextField sx={{
                                width: "40%", minWidth: "600px", margin: "8px"
                            }}
                            label="E-mail"
                            variant="outlined"
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            >
                            </TextField>
                        </fieldset>
                        <fieldset style={{borderColor: "blue", marginTop: "20px"}}>
                         <legend style={{color: "orange", fontFamily: "Lucida Sans", fontSize: 20}}>Dados do Veículo</legend>
                            <TextField sx={{
                                width: "9%",  minWidth: "120px", margin: "8px"
                            }}
                            label="Placa"
                            variant="outlined"
                            type="text"
                            value={placa}
                            onChange={(e) => setPlaca(mask(unMask(e.target.value), ['AAA-9S99']))}
                            >
                            </TextField>
                            <TextField sx={{
                                width: "17%", minWidth: "150px", margin: "8px"
                            }}
                            label="Renavam"
                            variant="outlined"
                            type="text"
                            value={renavam}
                            onChange={(e) => setRenavam(e.target.value)}
                            >
                            </TextField>
                            <TextField sx={{
                                width: "20%", minWidth: "220px", margin: "8px"
                            }}
                            label="Chassi"
                            variant="outlined"
                            type="text"
                            value={chassi}
                            onChange={(e) => setChassi(e.target.value)}
                            >
                            </TextField>
                            <TextField sx={{
                                width: "10%", minWidth: "140px", margin: "8px"
                            }}
                            label="Cód. Marca"
                            variant="outlined"
                            type="number"
                            value={codMarca}
                            onChange={(e) => setCodMarca(e.target.value)}
                            >
                            </TextField>
                            <TextField sx={{
                                width: "30%", minWidth: "350px", margin: "8px"
                            }}
                            label="Descrição Marca/Modelo"
                            variant="outlined"
                            type="text"
                            value={descricaoMarca}
                            onChange={(e) => setDescricaoMarca(e.target.value)}
                            >
                            </TextField>
                            <TextField sx={{
                                width: "8%", minWidth: "120px", margin: "8px"
                            }}
                            label="Combustível"
                            variant="outlined"
                            type="number"
                            placeholder="Código"
                            value={codCombustivel}
                            onChange={(e) => setCodCombustivel(e.target.value)}
                            >
                            </TextField>
                            <TextField sx={{
                                width: "18%", minWidth: "250px", margin: "8px"
                            }}
                            label="Descrição Combustível"
                            variant="outlined"
                            type="text"
                            value={descricaoCombustivel}
                            onChange={(e) => setDescricaoCombustivel(e.target.value)}
                            >
                            </TextField>
                            <TextField sx={{
                                width: "8%", minWidth: "100px", margin: "8px"
                            }}
                            label="Cód. Cor"
                            variant="outlined"
                            type="number"
                            value={codCor}
                            onChange={(e) => setCodCor(e.target.value)}
                            >
                            </TextField>
                            <TextField sx={{
                                width: "12%", minWidth: "130px", margin: "8px"
                            }}
                            label="Descrição Cor"
                            variant="outlined"
                            type="text"
                            value={descricaoCor}
                            onChange={(e) => setDescricaoCor(e.target.value)}
                            >
                            </TextField>
                            <TextField sx={{
                                width: "8%", minWidth: "120px", margin: "8px"
                            }}
                            label="Cód. Espécie"
                            variant="outlined"
                            type="number"
                            value={codEspecie}
                            onChange={(e) => setCodEspecie(e.target.value)}
                            >
                            </TextField>
                            <TextField sx={{
                                width: "20%", minWidth: "270px", margin: "8px"
                            }}
                            label="Descrição Espécie"
                            variant="outlined"
                            type="text"
                            value={descricaoEspecie}
                            onChange={(e) => setDescricaoEspecie(e.target.value)}
                            >
                            </TextField>
                            <TextField sx={{
                                width: "8%", minWidth: "120px", margin: "8px"
                            }}
                            label="Cód Tipo"
                            variant="outlined"
                            type="number"
                            value={codTipo}
                            onChange={(e) => setCodTipo(e.target.value)}
                            >
                            </TextField>
                            <TextField sx={{
                                width: "18%", minWidth: "200px", margin: "8px"
                            }}
                            label="Descrição Tipo"
                            variant="outlined"
                            type="text"
                            value={descricaoTipo}
                            onChange={(e) => setDescricaoTipo(e.target.value)}
                            >
                            </TextField>
                            <TextField sx={{
                                width: "8%", minWidth: "120px", margin: "8px"
                            }}
                            label="Carroceria"
                            variant="outlined"
                            type="number"
                            placeholder="Código"
                            value={codCarroceria}
                            onChange={(e) => setCodCarroceria(e.target.value)}
                            >
                            </TextField>
                            <TextField sx={{
                                width: "18%", minWidth: "250px", margin: "8px"
                            }}
                            label="Descrição Carroceria"
                            variant="outlined"
                            type="text"
                            value={descricaoCarroceria}
                            onChange={(e) => setDescricaoCarroceria(e.target.value)}
                            >
                            </TextField>
                            <TextField sx={{
                                width: "8%", minWidth: "120px", margin: "8px"
                            }}
                            label="Categoria"
                            variant="outlined"
                            type="number"
                            placeholder="Código"
                            value={codCategoria}
                            onChange={(e) => setCodCategoria(e.target.value)}
                            >
                            </TextField>
                            <TextField sx={{
                                width: "18%", minWidth: "200px", margin: "8px"
                            }}
                            label="Descrição Categoria"
                            variant="outlined"
                            type="text"
                            value={descricaoCategoria}
                            onChange={(e) => setDescricaoCategoria(e.target.value)}
                            >
                            </TextField>
                            <TextField sx={{
                                width: "8%", minWidth: "100px", margin: "8px"
                            }}
                            label="Cap. Passageiro"
                            variant="outlined"
                            type="number"
                            placeholder="Capacidade"
                            value={capPassageiro}
                            onChange={(e) => setCapPassageiro(e.target.value)}
                            >
                            </TextField>
                            <TextField sx={{
                                width: "8%", minWidth: "100px", margin: "8px"
                            }}
                            label="Potência"
                            variant="outlined"
                            type="number"
                            value={potencia}
                            onChange={(e) => setPotencia(e.target.value)}
                            >
                            </TextField>
                            <TextField sx={{
                                width: "8%", minWidth: "100px", margin: "8px"
                            }}
                            label="Cilindrada"
                            variant="outlined"
                            type="number"
                            value={cilindrada}
                            onChange={(e) => setCilindrada(e.target.value)}
                            >
                            </TextField>
                            <TextField sx={{
                                width: "8%", minWidth: "110px", margin: "8px"
                            }}
                            label="Ano Fab."
                            variant="outlined"
                            type="number"
                            placeholder="Fabricação"
                            value={anoFabricacao}
                            onChange={(e) => setAnoFabricacao(e.target.value)}
                            >
                            </TextField>
                            <TextField sx={{
                                width: "8%", minWidth: "110px", margin: "8px"
                            }}
                            label="Ano Mod."
                            variant="outlined"
                            type="number"
                            placeholder="Modelo"
                            value={anoModelo}
                            onChange={(e) => setAnoModelo(e.target.value)}
                            >
                            </TextField>
                            <TextField sx={{
                                width: "8%", minWidth: "120px", margin: "8px"
                            }}
                            label="Procedência"
                            variant="outlined"
                            type="text"
                            value={procedencia}
                            onChange={(e) => setProcedencia(e.target.value)}
                            >
                            </TextField>
                            <TextField sx={{
                                width: "8%", minWidth: "120px", margin: "8px"
                            }}
                            label="Placa Anterior"
                            variant="outlined"
                            type="text"
                            value={placaAnterior}
                            onChange={(e) => setPlacaAnterior(mask(unMask(e.target.value), ['AAA-9S99']))}
                            >
                            </TextField>
                            <TextField sx={{
                                width: "8%", minWidth: "90px", margin: "8px"
                            }}
                            label="Remarcado"
                            variant="outlined"
                            type="text"
                            placeholder="S ou N"
                            value={remarcado}
                            onChange={(e) => setRemarcado(e.target.value)}
                            >
                            </TextField>
                            <TextField sx={{
                                width: "8%", minWidth: "120px", margin: "8px"
                            }}
                            label="Cap. Tonelada"
                            variant="outlined"
                            type="text"
                            placeholder="Tonelada"
                            value={capTonelada}
                            onChange={(e) => setCapTonelada(e.target.value)}
                            >
                            </TextField>
                        </fieldset>
                        <fieldset style={{borderColor: "blue", marginTop: "20px"}}>
                         <legend style={{color: "orange", fontFamily: "Lucida Sans", fontSize: 20}}>Dados do Vendedor</legend>
                            <TextField sx={{
                                width: "20%",  minWidth: "300px", margin: "8px"
                            }}
                            label="CPF ou CNPJ"
                            variant="outlined"
                            type="text"
                             value={cpfOuCnpjVendedor}
                            onChange={(e) => setCpfOuCnpjVendedor(mask(unMask(e.target.value), ['999.999.999-99', '99.999.999/9999-99']))}
                            >
                            </TextField>
                            <TextField sx={{
                                width: "65%", minWidth: "450px", margin: "8px"
                            }}
                            label="Nome"
                            variant="outlined"
                            type="text"
                            value={nomeVendedor}
                            onChange={(e) => setNomeVendedor(e.target.value)}
                            >
                            </TextField>
                            <TextField sx={{
                                width: "8%", minWidth: "150px", margin: "8px"
                            }}
                            label="Cód. Cidade"
                            variant="outlined"
                            type="text"
                            value={codCidadeVendedor}
                            onChange={(e) => setCodCidadeVendedor(e.target.value)}
                            >
                            </TextField>
                            <TextField sx={{
                                width: "30%", minWidth: "350px", margin: "8px"
                            }}
                            label="Cidade"
                            variant="outlined"
                            type="text"
                            value={cidadeVendedor}
                            onChange={(e) => setCidadeVendedor(e.target.value)}
                            >
                            </TextField>
                            <TextField sx={{
                                width: "8%", minWidth: "150px", margin: "8px"
                            }}
                            label="Cód. Estado"
                            variant="outlined"
                            type="text"
                            value={codEstadoVendedor}
                            onChange={(e) => setCodEstadoVendedor(e.target.value)}
                            >
                            </TextField>
                            <TextField sx={{
                                width: "30%", minWidth: "350px", margin: "8px"
                            }}
                            label="Estado"
                            variant="outlined"
                            type="text"
                            defaultValue=" "
                            InputProps={{
                                readOnly: true,
                            }}
                            value={estadoVendedor}
                            onChange={(e) => setEstadoVendedor(e.target.value)}
                            >
                            </TextField>
                        </fieldset>
                        <fieldset style={{borderColor: "blue", marginTop: "20px"}}>
                         <legend style={{color: "orange", fontFamily: "Lucida Sans", fontSize: 20}}>Dados do Recibo (CRV)</legend>
                            <TextField sx={{
                                width: "15%",  minWidth: "250px", margin: "8px"
                            }}
                            label="Número do CRV (Recibo)"
                            variant="outlined"
                            type="text"
                            value={numeroCrv}
                            onChange={(e) => setNumeroCrv(e.target.value)}
                            >
                            </TextField>
                            <TextField sx={{
                                width: "15%", minWidth: "150px", margin: "8px"
                            }}
                            label="Nº Nota Fiscal"
                            variant="outlined"
                            type="text"
                            value={numeroNotaFiscal}
                            onChange={(e) => setNumeroNotaFiscal(e.target.value)}
                            >
                            </TextField>
                            <TextField sx={{
                                width: "15%", minWidth: "180px", margin: "8px"
                            }}
                            label="Emissão CRV/Nota Fiscal"
                            variant="outlined"
                            type="date"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            value={dataEmissaoCrvNotaFiscal}
                            onChange={(e) => setDataEmissaoCrvNotaFiscal(e.target.value)}
                            >
                            </TextField>
                            <TextField sx={{
                                width: "15%", minWidth: "180px", margin: "8px"
                            }}
                            label="Data da Compra"
                            variant="outlined"
                            type="date"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            value={dataCompra}
                            onChange={(e) => setDataCompra(e.target.value)}
                            >
                            </TextField>
                            <TextField sx={{
                                width: "10%", minWidth: "180px", margin: "8px"
                            }}
                            label="Valor da Compra R$"
                            variant="outlined"
                            type="text"
                            value={valorCompra}
                            onChange={(e) => setValorCompra(e.target.value)}
                            >
                            </TextField>
                            <TextField sx={{
                                width: "10%", minWidth: "100px", margin: "8px"
                            }}
                            label="Cód. Alienacão"
                            variant="outlined"
                            type="number"
                            value={codAlienacao}
                            onChange={(e) => setCodAlienacao(e.target.value)}
                            >
                            </TextField>
                            <TextField sx={{
                                width: "20%", minWidth: "300px", margin: "8px"
                            }}
                            label="Tipo de Alienação"
                            variant="outlined"
                            type="text"
                            value={nomeAlienacao}
                            onChange={(e) => setNomeAlienacao(e.target.value)}
                            >
                            </TextField>
                            <TextField sx={{
                                width: "25%", minWidth: "450px", margin: "8px"
                            }}
                            label="Financeira ou Arredantário"
                            variant="outlined"
                            type="text"
                            value={nomeAlienacaoFinanceira}
                            onChange={(e) => setNomeAlienacaoFinanceira(e.target.value)}
                            >
                            </TextField>
                            <TextField sx={{
                                width: "10%", minWidth: "100px", margin: "8px"
                            }}
                            label="Restrição"
                            variant="outlined"
                            type="text"
                            value={restricao}
                            onChange={(e) => setRestricao(e.target.value)}
                            >
                            </TextField>
                        </fieldset>
                        <fieldset style={{borderColor: "blue", marginTop: "20px"}}>
                         <legend style={{color: "orange", fontFamily: "Lucida Sans", fontSize: 20}}>Observações</legend>
                            <TextareaAutosize sx={{
                                margin: "8px"
                            }}
                            label="Observações"
                            variant="outlined"
                            type="textarea"
                            minRows={5}
                            cols={57}
                            value={obs}
                            onChange={(e) => setObs(e.target.value)}
                            >
                            </TextareaAutosize>
                        </fieldset>
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default Processos;