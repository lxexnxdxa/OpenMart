require('dotenv').config();

const express = require('express');
const path = require('path');
// ... o resto do seu código ...

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Product = require('./product.model');
const app = express();
const port = 3000;

// Configurar o EJS como motor de visualização
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Servir ficheiros estáticos da pasta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Rota para a página principal (raiz)
app.get('/', (req, res) => {
    res.redirect('/produtos');
});

// Ligar à base de dados MongoDB
// A string de conexão deve ser uma variável de ambiente por segurança
const mongoURI = process.env.MONGODB_URI || "mongodb://localhost:27017/OpenMart";
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado ao MongoDB com sucesso!'))
  .catch(err => console.error('Erro ao conectar-se ao MongoDB:', err));

// Rota para a página de produtos
app.get('/produtos', async (req, res) => {
    try {
        const products = await Product.find({ type: 'produtos' });
        res.render('produtos', { products: products, activePage: 'produtos' });
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao buscar produtos.');
    }
});

// Rota para a página de serviços
app.get('/servicos', async (req, res) => {
    try {
        const services = await Product.find({ type: 'servicos' });
        res.render('produtos', { products: services, activePage: 'servicos' });
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao buscar serviços.');
    }
});

// Rota para a página de ofertas
app.get('/ofertas', async (req, res) => {
    try {
        const offers = await Product.find({ type: 'ofertas' });
        res.render('produtos', { products: offers, activePage: 'ofertas' });
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao buscar ofertas.');
    }
});

// Rota para a página de detalhes de um único produto
app.get('/produtos/:id', async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await Product.findById(productId);

        if (product) {
            res.render('produtos.details.ejs', { product: product });
        } else {
            res.status(404).send('Produto não encontrado.');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao buscar produto.');
    }
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor a correr em http://localhost:${port}`);
});