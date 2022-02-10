const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "rafaeldespachante",
});

app.use(cors());
app.use(express.json());

app.get("/login", (req, res) => {
    let SQL = "SELECT * FROM senhaprincipal";
    console.log(SQL);
    db.query(SQL, (err, result) => {
        if(err) console.log(err);
        else res.send(result);
    });
});

app.get("/pesquisar/:id", (req, res) => {
    const { id } = req.params;
    let SQL = "SELECT * FROM dados WHERE cod = ?";
    db.query(SQL, id, (err, result) => {
        if(err) console.log(err);
        else res.send(result);
    });
});

app.post("/gravar", (req, res) => {
    const { data } = req.body;
    const { cadastradoem } = req.body;
    const { numServico } = req.body;
    const { nomeServico } = req.body;
    const { firma } = req.body;
    const { cpf } = req.body;
    const { nome } = req.body;
    const { rg } = req.body;
    const { cep } = req.body;
    const { endereco } = req.body;
    const { numero } = req.body;
    const { complemento } = req.body;
    const { bairro } = req.body;
    const { numMun } = req.body;
    const { nomeMun } = req.body;
    const { uf } = req.body;
    const { nomeUf } = req.body;
    const { tel1 } = req.body;
    const { telnome1 } = req.body;
    const { tel2 } = req.body;
    const { telnome2 } = req.body;
    const { tel3 } = req.body;
    const { telnome3 } = req.body;
    const { datanasc } = req.body;
    const { email } = req.body;
    const { placa } = req.body;
    const { renavam } = req.body;
    const { chassi } = req.body;
    const { marca } = req.body;
    const { modelo } = req.body;
    const { numCombustivel } = req.body;
    const { nomeCombustivel } = req.body;
    const { numCor } = req.body;
    const { nomeCor } = req.body;
    const { numEspecie } = req.body;
    const { nomeEspecie } = req.body;
    const { numTipo } = req.body;
    const { nomeTipo } = req.body;
    const { numCarroceria } = req.body;
    const { nomeCarroceria } = req.body;
    const { numCategoria } = req.body;
    const { categoria } = req.body;
    const { capPass } = req.body;
    const { potencia } = req.body;
    const { cilindrada } = req.body;
    const { anoFab } = req.body;
    const { anoMod } = req.body;
    const { procedencia } = req.body;
    const { placaAnt } = req.body;
    const { remarcado } = req.body;
    const { capTonelada } = req.body;
    const { cpfAnt } = req.body;
    const { nomePropAnt } = req.body;
    const { numMunAnt } = req.body;
    const { nomeMunAnt } = req.body;
    const { numUfAnt } = req.body;
    const { nomeUfAnt } = req.body;
    const { crv } = req.body;
    const { dataCrv } = req.body;
    const { numnota } = req.body;
    const { dataCompra } = req.body;
    const { valorRecibo } = req.body;
    const { numAlienacao } = req.body;
    const { nomeAlienacao } = req.body;
    const { nomeAlienacaoFinan } = req.body;
    const { restricao } = req.body;
    const { obs } = req.body;

    const { recibo } = req.body;
    const { notafiscal } = req.body;
    const { notafabrica } = req.body;
    const { rg1 } = req.body;
    const { cnh1 } = req.body;
    const { residencia } = req.body;
    const { csocial } = req.body;
    const { csocialdocs } = req.body;
    const { contratofidu } = req.body;
    const { contratoleas } = req.body;
    const { copiadut } = req.body;
    const { registrado } = req.body;

    const { atendente } = req.body;

    const { cmt } = req.body;
    const { docpronto3 } = req.body;
    const { firmaOuNao } = req.body;
    const { vendedor } = req.body;
    const { docpronto } = req.body;
    const { dataentrega } = req.body;
    const { codcliente } = req.body;
    const { cnpj } = req.body;
    const { cnpjAnt } = req.body;
    // const { data } = req.body;

    // console.log(data, numServico, nomeServico, nome, rg, datanasc, cep, endereco, numero, complemento, bairro, numMun, nomeMun,
    //     uf, nomeUf, tel1, telnome1, tel2, telnome2, tel3, telnome3, email, placa, renavam, chassi, valorRecibo, dataCompra, crv, dataCrv,
    //     numnota, marca, modelo, numCombustivel, nomeCombustivel, numCor, nomeCor,anoFab, anoMod, numEspecie, nomeEspecie, numTipo, nomeTipo, 
    //     potencia, cilindrada, numCarroceria, nomeCarroceria,capPass, capTonelada, cmt, placaAnt, nomePropAnt, numMunAnt, nomeMunAnt,
    //     numUfAnt,nomeUfAnt, numAlienacao, nomeAlienacao, nomeAlienacaoFinan, atendente, vendedor, obs, cpf, cnpj, cpfAnt, cnpjAnt,
    //     procedencia, remarcado, docpronto3, docpronto, dataentrega, cadastradoem, categoria, firma);

    let SQL = "INSERT INTO rafaeldespachante.dados (data, numServico, nomeServico, nome, rg, datanasc, cep, endereco, numero, complemento, bairro, numMun, nomeMun,"
    + "uf, nomeUf, tel1, telnome1, tel2, telnome2, tel3, telnome3, email, placa, renavam, chassi, valorRecibo, dataCompra, crv, dataCrv,"
    + "numnota, marca, modelo, numCombustivel, nomeCombustivel, numCor, nomeCor, anoFab, anoMod, numEspecie, nomeEspecie, numTipo, nomeTipo,"
    + "potencia, cilindrada, numCarroceria, nomeCarroceria, capPass, capTonelada, cmt, placaAnt, nomePropAnt, numMunAnt, nomeMunAnt,"
    + "numUfAnt, nomeUfAnt, numAlienacao, nomeAlienacao, nomeAlienacaoFinan, atendente, vendedor, obs, cpf, cnpj, cpfAnt, cnpjAnt,"
    + "procedencia, remarcado, docpronto3, docpronto, dataentrega, cadastradoem, categoria, firma) "
    + "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,"
    + " ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    
    console.log(SQL);
    db.query(SQL, [data, numServico, nomeServico, nome, rg, datanasc, cep, endereco, numero, complemento, bairro, numMun, nomeMun,
                   uf, nomeUf, tel1, telnome1, tel2, telnome2, tel3, telnome3, email, placa, renavam, chassi, valorRecibo, dataCompra, crv, dataCrv,
                   numnota, marca, modelo, numCombustivel, nomeCombustivel, numCor, nomeCor,anoFab, anoMod, numEspecie, nomeEspecie, numTipo, nomeTipo, 
                   potencia, cilindrada, numCarroceria, nomeCarroceria,capPass, capTonelada, cmt, placaAnt, nomePropAnt, numMunAnt, nomeMunAnt,
                   numUfAnt,nomeUfAnt, numAlienacao, nomeAlienacao, nomeAlienacaoFinan, atendente, vendedor, obs, cpf, cnpj, cpfAnt, cnpjAnt,
                   procedencia, remarcado, docpronto3, docpronto, dataentrega, cadastradoem, categoria, numCategoria, firma],(err, result) => {
                       console.log(result);
        console.log(err);
    });
})

app.get("/pesquisar-servico/:numServico", (req, res) => {
    const { numServico } = req.params;
    let SQL = "SELECT nome FROM servicos WHERE cod = ?";
    db.query(SQL, numServico, (err, result) => {
        if(err) console.log(err);
        else res.send(result);
    });
});

app.get("/pesquisar-empresa-cliente/:empresa", (req, res) => {
    const { empresa } = req.params;
    let SQL = "SELECT nome FROM clientes WHERE nome LIKE CONCAT('%', ?,  '%')";
    db.query(SQL, empresa, (err, result) => {
        if(err) console.log(err);
        else res.send(result);
    });
});

app.get("/pesquisar-cliente/:cpf", (req, res) => {
    const { cpf } = req.params;
    let SQL = "SELECT NOME, endereco, bairro, numMun, nomeMun, Uf, nomeUf FROM dados WHERE cpf LIKE CONCAT('%', ?,  '%')";
    let SQL1 = "SELECT NOME, endereco, bairro, numMun, nomeMun, Uf, nomeUf FROM dados WHERE cnpj LIKE CONCAT('%', ?,  '%')";
    console.log(cpf);
    db.query(SQL, cpf, (err, result) => {
        if(err) console.log(err);
        else res.send(result);
    });
});

app.get("/pesquisar-cep/:cep", (req, res) => {
    const { cep } = req.params;
    let SQL = "SELECT sigla, nome, bairro, municipio, nomemunicipio, estado, nomeestado FROM endereco WHERE cep LIKE CONCAT('%', ?,  '%')";
    db.query(SQL, cep, (err, result) => {
        if(err) console.log(err);
        else res.send(result);
    });
});

app.get("/pesquisar-cidade/:codCidade", (req, res) => {
    const { codCidade } = req.params;
    let SQL = "SELECT nome FROM municipio WHERE cod = ?";
    db.query(SQL, codCidade, (err, result) => {
        if(err) console.log(err);
        else res.send(result);
    });
});

app.get("/pesquisar-estado/:siglaEstado", (req, res) => {
    const { siglaEstado } = req.params;
    let SQL = "SELECT nome FROM uf WHERE sigla LIKE CONCAT ('%', ?,  '%')";
    db.query(SQL, siglaEstado, (err, result) => {
        if(err) console.log(err);
        else res.send(result);
    });
});

app.listen(3001, () => {
    console.log("rodando servidor...")
});