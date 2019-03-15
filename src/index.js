const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');

// Inicializações
const app = express();

// Configurações
app.set('port', process.env.PORT || 4000);
// const port = process.env.PORT || 4000;
app.set('views', path.join(__dirname, 'views'));
app.engine(
  '.hbs',
  exphbs({
    defaulLayout: 'main',
    layoutDir: path.join(app.get('views'), 'layouts'),
    partialDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
  })
);
app.set('view engine', '.hbs');

// Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Variaveis Globais
app.use((req, res, next) => {
  next();
});

// Routes
app.use(require('./routes/'));
app.use(require('./routes/authentication'));
app.use('links', require('./routes/links'));

// Public
app.use(express.static(path.join(__dirname, 'public')));

// Subir o servidor
// app.listen(port, () => {
//   console.log('Servidor rodando na porta', port);
// });

app.listen(app.get('port'), () => {
  console.log('Servidor rodando na porta', app.get('port'));
});
