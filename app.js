const express = require('express');
const app = express();
const path = require('path');

// Configurar el motor de plantillas EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
//app.use(express.static('public'));

app.use(express.static(__dirname + '/public'));

// Datos sobre Renzo
const renzoData = {
    nombre: 'Renzo Sarmiento',
    grado: 'Titulado',
    telefono: '+51 900574926',
    ubicacion: 'Trjillo, Perú',
    cumple: '07 de Marzo',
    exp: '5 años',
    email: 'renzo.sarmiento@tecsup.edu.pe',
    free: 'Disponible',
    image: '/img/profile.jpg'
};

app.get('/portafolio/Renzo', (req, res) => {
    // Renderiza la vista "Eduardo.ejs" con los datos proporcionados
    res.render('index', { data: renzoData });
});

// Datos sobre Carmen
const carmenData = {
    nombre: 'Carmen Sandoval',
    grado: 'Titulado',
    telefono: '+51  937473824',
    ubicacion: 'Lima, Perú',
    cumple: '12 de Septiembre',
    exp: '6 años',
    email: 'carmen.sandoval@tecsup.edu.pe',
    free: 'Disponible',
    image: '/img/carmen.jpg'
};

app.get('/portafolio/Carmen', (req, res) => {
    // Renderiza la vista "Eduardo.ejs" con los datos proporcionados
    res.render('index', { data: carmenData });
});

// Datos sobre Leomar
const leomarData = {
    nombre: 'Leomar Urcia',
    grado: 'Titulado',
    telefono: '+51 983636274',
    ubicacion: 'Cartavio, Perú',
    cumple: '28 de abril',
    exp: '5 años',
    email: 'leomar.urcia@tecsup.edu.pe',
    free: 'Disponible',
    image: '/img/leomar.jpg'
};

app.get('/portafolio/Leomar', (req, res) => {
    // Renderiza la vista "Eduardo.ejs" con los datos proporcionados
    res.render('index', { data: leomarData });
});

// Datos sobre Eduardo
const eduardoData = {
    nombre: 'Eduardo Dioses',
    grado: 'Titulado',
    telefono: '+51  937473824',
    ubicacion: 'Piura, Perú',
    cumple: '12 de Septiembre',
    exp: '6 años',
    email: 'eduardo.dioses@tecsup.edu.pe',
    free: 'No disponible',
    image: '/img/eduardo.jpg'
};

app.get('/portafolio/Eduardo', (req, res) => {
    // Renderiza la vista "Eduardo.ejs" con los datos proporcionados
    res.render('index', { data: eduardoData });
});



// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});
