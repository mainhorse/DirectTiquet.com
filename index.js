require('./config/conexion');

const express = require('express');

const port =(process.env.port || 3000);

const app = express();

//admitir

app.use(express.json());

//conf 

app.set('port',port)

//rutas
app.use('/api',require('./rutas'))


//inica express

app.listen(app.get('port'),(error)=>{
  if (error){
    console.log('error al iniciar le servidor'+error)
  }

  else {
    console.log('servidior iniciado en el puerto: ' + port)
  }
})