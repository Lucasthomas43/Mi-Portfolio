const express = require('express');
const app = express();
const ejs = require('ejs')
const mainRouter = require('./routes/mainRoutes')
const path = require('path')
app.listen(3000, console.log('estamos corriendo en el puerto 3000'))

//template engine EJS
app.set('view engine', 'ejs')
app.set('views', './src/views')
//archivos estaticos

app.use(express.static(path.join(__dirname, '../public')))

//rutas Main
app.use('/', mainRouter)

//static
//static