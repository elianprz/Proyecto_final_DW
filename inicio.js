const express = require('express');
const path = require('path');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8081;

// Configuración de Handlebars
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Registrar partials
hbs.registerPartials(path.join(__dirname, 'views/partials'));

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/proyecto1', (req, res) => {
  res.render('proyecto1');
});

app.get('/proyecto2', (req, res) => {
  res.render('proyecto2');
});

app.get('/proyecto3', (req, res) => {
  res.render('proyecto3');
});

app.get('/proyecto4', (req, res) => {
  res.render('proyecto4');
});

app.get('/proyecto5', (req, res) => {
  res.render('proyecto5');
});

app.get('/proyecto6', (req, res) => {
  res.render('proyecto6');
});

app.get('/proyecto7', (req, res) => {
  res.render('proyecto7');
});

// Ruta para la página "Sobre Mí" (infopersonal.hbs)
app.get('/infopersonal', (req, res) => {
  res.render('infopersonal');
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
