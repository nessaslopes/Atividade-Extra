// EXTRA CONCESSIONÁRIA v1 LISTA

const express = require('express');
const app = express();

porta const= 3003;

app.usar(express.json());

modelos  const =[];
const marcas = [];
const categorias = [];
const tipoCombustiveis = [];
const anos = [];


const msgInicio = [
    "Bem vindos, caros alunos",
    "Ola amigos, bem vindo ao servidor da BLUE",
    "Servidor de javascript BLUE",
    "Este é um servidor AZUL",
];

function random() {
    return Math.floor(Math.random() * msgInicio.length);
}
console.log(aleatório());

app.get("/", (req, res) => {
    res.enviar(msgInicio[random()]);
});

app.get("/ carros", (req, res) => {
    res.enviar(`
    Modelos: $ { modelos } ,
    Marcas: $ { marcas } ,
    Categorias: $ { categorias } ,
    Combustivel: $ { tipoCombustiveis } ,
    Ano: $ { anos } ` );
});

app.get("/ carros /: id", (req, res) => {
    const id = req.params.id - 1;

    if (!modelos[id] || !marcas[id] || !categorias[id] || !tipoCombustiveis[id] || !anos[id]) {
        res.send("Veiculo não encontrado, tente novamente");
    }
    res.enviar(`
    Modelo: $ { modelos [ id ] } ,
    Marca: $ { marcas [ id ] } ,
    Categoria: $ { categorias [ id ] } ,
    Combustivel: $ { tipoCombustiveis [ id ] } ,
    Ano: $ { anos [ id ] } ` );
});

app.post('/ carros', (req, res) => {
    const modelo = req.corpo.modelo;
    const marca = req.corpo.marca;
    const categoria = req.corpo.categoria;
    const tipoCombustivel = req.corpo.tipoCombustivel;
    const ano = req.corpo.ano;

    const id = modelos.comprimento;

    modelos[id] = modelo;
    marcas[id] = marca;
    categorias[id] = categoria;
    tipoCombustiveis[id] = tipoCombustivel;
    anos[id] = ano;

    res.enviar(`Veículo adicionado com sucesso: $ { modelo } .
    O ID do Veiculo é $ { id + 1 } ` )
});

app.put("/ carros /: id", (req, res) => {
    const id = req.params.id - 1;

    if (!modelos[id] || !marcas[id] || !categorias[id] || !tipoCombustiveis[id] || !anos[id]) {
        res.send("Veiculo não encontrado, tente novamente");
    }

    const modelo = req.corpo.modelo;
    const modeloAnterior = modelos[id];
    const marca = req.corpo.marca;
    const categoria = req.corpo.categoria;
    const tipoCombustivel = req.corpo.tipoCombustivel;
    const ano = req.corpo.ano;

    modelos[id] = modelo;
    marcas[id] = marca;
    categorias[id] = categoria;
    tipoCombustiveis[id] = tipoCombustivel;
    anos[id] = ano;
    res.send(`Veiculo atualizado com sucesso, veiculo anterior: $ { modeloAnterior } , substituido por: $ { modelo } `)
});

app.delete("/ carros /: id", (req, res) => {
    const id = req.params.id - 1;

    if (!modelos[id] || !marcas[id] || !categorias[id] || !tipoCombustiveis[id] || !anos[id]) {
        res.send("Veiculo não encontrado, tente novamente");
    }

    excluir  modelos[id];
    excluir  marcas[id];
    excluir  categorias[id];
    excluir  tipoCombustiveis[id];
    excluir  anos[id];
    res.enviar("Veículo excluido com sucesso.")
});

app.escute(porta, função() {
    console.info(`App rodando na porta http: // localhost: $ { port } /`) ;
});
