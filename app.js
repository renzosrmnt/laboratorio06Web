const express = require('express');
const app = express();
const path = require('path');

// Configurar el motor de plantillas EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
//app.use(express.static('public'));

app.use(express.static(__dirname + '/public'));

// Datos sobre los usuarios
const usuarios = {
    Renzo: {
        nombre: 'Renzo Sarmiento',
        grado: 'Titulado',
        telefono: '+51 900574926',
        ubicacion: 'Trujillo, Perú',
        cumple: '07 de Marzo',
        exp: '5 años',
        email: 'renzo.sarmiento@tecsup.edu.pe',
        free: 'Disponible',
        image: '/img/profile.jpg'
    },
    Carmen: {
        nombre: 'Carmen Sandoval',
        grado: 'Titulado',
        telefono: '+51 937473824',
        ubicacion: 'Lima, Perú',
        cumple: '12 de Septiembre',
        exp: '6 años',
        email: 'carmen.sandoval@tecsup.edu.pe',
        free: 'Disponible',
        image: '/img/carmen.jpg'
    },
    Leomar: {
        nombre: 'Leomar Urcia',
        grado: 'Titulado',
        telefono: '+51 983636274',
        ubicacion: 'Cartavio, Perú',
        cumple: '28 de abril',
        exp: '5 años',
        email: 'leomar.urcia@tecsup.edu.pe',
        free: 'Disponible',
        image: '/img/leomar.jpg'
    },
    Eduardo: {
        nombre: 'Eduardo Dioses',
        grado: 'Titulado',
        telefono: '+51 937473824',
        ubicacion: 'Piura, Perú',
        cumple: '12 de Septiembre',
        exp: '6 años',
        email: 'eduardo.dioses@tecsup.edu.pe',
        free: 'No disponible',
        image: '/img/eduardo.jpg'
    }
};

// Ruta base para obtener los perfiles
app.get('/portafolio/:id', (req, res) => {
    const userId = req.params.id;
    // Verificar si el usuario existe en la base de datos
    if (usuarios.hasOwnProperty(userId)) {
        const userData = usuarios[userId];
        res.render('index', { data: userData });
    } else {
        // Renderizar una página de error o redireccionar a otra página
        res.render('error', { mensaje: 'Usuario no encontrado' });
    }
});


// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});
