const  router  = require('express').Router()
const conexion = require('./config/conexion');


//-----------------
//get

router.get('/',(req, res)=>{

  let sql ='select *from usuario '
  conexion.query(sql,(err, rows, fields)=>{

    if(err)throw err;
    else{
      res.json(rows)
    }
  })


})
 //tomar un usuario

 router.get('/:id',(req, res)=>{

  const {id} = req.params

  let sql ='select *from usuario where idusuario = ? '
  conexion.query(sql,[id],(err, rows, fields)=>{

    if(err)throw err;
    else{
      res.json(rows)
    }
  })


})

//crear usuario

router.post('/',(req,res)=>{

  const{idusuario, nombre, apellido, cedula, genero, edad, email, direccion} = req.body
  let sql = `insert into usuario(idusuario, nombre, apellido, cedula, genero ,edad, email, direccion) values ('${idusuario}','${nombre}','${apellido}','${cedula}','${genero}','${edad}','${email}','${direccion}')`

  conexion.query(sql, (err, rows, fields)=>{

    if(err)throw err
    else{
     res.json({status: 'usuario agregado'}) 
    }
  })

})
//eliminar usuario

router.delete('/:idusuario',(req,res)=>{

  const{idusuario}=req.params

  let sql = `delete from usuario where idusuario = '${idusuario}'`
  conexion.query(sql,(err, rows, fields)=>{

    if(err)throw err;
    else{
      res.json({status: 'usuario eliminado'}) 
    }
  })
});

//modificar usuario

router.put('/:idusuario',(req, res)=>{

  const{idusuario}=req.params
  const{nombre, apellido, cedula, genero, edad, email, direccion}=req.body

  let sql = `update usuario set 
              nombre='${nombre}',apellido='${apellido}',
              cedula='${cedula}',
              genero='${genero}',
              edad='${edad}',
              email='${email}',
              direccion='${direccion}'
              where idusuario='${idusuario}'`
  conexion.query(sql,(err, rows, fields)=>{

    if(err)throw err;
     else{
      res.json({status: 'usuario modificado'}) 
    }
   });



})

module.exports = router;