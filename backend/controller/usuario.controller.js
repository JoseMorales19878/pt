const { Usuario, Sequelize } = require("../models");
const Op = Sequelize.Op;
const controller = {};


controller.listado = async (req, res) => 
{

  try 
  {
    const data = await Usuario.findAll({});
     console.log("Listado de Usuarios")
	return res.status(200).json(
	{
       success: true,
       count: data.length,
	   message:'Listado usuario mostrado con exito',
       data: data
    })
  
  }catch(error) 
  { 
    res.status(500).json(
	{
      success: false,
	  message:'Error al mostrar listado de  usuario',
      error: error
    })
  }//fin del try catch

}//fin del get all




controller.insertar = async (req, res) => 
{
  
  const newUser = 
  {
    
	email: req.body.email,
	password: req.body.password,
    nivel: req.body.nivel
    
  };
  
  
  try 
  {
    const data = await Usuario.create(newUser);
     console.log("Registro de Usuarios")
	return res.status(200).json(
	{
       success: true,
       count: data.length,
	   message:'Registro de usuario con exito',
       data: data
    })
  
  }catch(error) 
  { 
    res.status(500).json(
	{
      success: false,
	  message:'Error al registrar  usuario',
      error: error
    })
  }//fin del try catch

}//fin del insertar


controller.id = async (req, res) => {

 try 
 {
	   const id = req.params.id;
	   const data = await Usuario.findByPk(id);
       console.log("Consultado Usuario")	  
	  if (data)
		return res.status(200).json({
		success: true,
		message:'Usuario consultado con Exito',
		data: data
		})
	   
	   else
	   return res.status(400).json({
	   success: false,
	   error: "No existe el usuario",
	   data: []
	   })

 }catch(error){
  res.status(500).json({
  success: false,
  message:'Error al consultar el usuario',
  error: error
    })
 }
}

controller.modificar = async (req, res) => {

   try 
   {
    
	const id = req.params.id;
    const body = req.body;
    const  data = await Usuario.update(body, {
      where: {id: id}
    });
     console.log("Actualizar usuario")
    if (data[0] === 0) 
	{
     return res.status(200).json({
     success: false,
     error: "No existe el  id del usuario"
    })
   }

   return res.status(200).json({
   success: true,
   "number of rows changed": data,
   message:'Usuario actualizado con  exito',
   })
  
  }catch (error) 
  {
    res.status(500).json({
    success: false,
	message:'Error al actualiar el usuario',
    error: error
  })
  }
}//fin del actualizar

controller.eliminar = async (req, res) => 
{
  
  try 
  {
    
	let id = req.params.id;
    let data = await Usuario.destroy({
    where: {
     id: id
     }
    });
	console.log(`Eliminar Usuario ${id}`)
    if (data === 1) 
	{
      
	  return res.status(200).json({
      success: true,
      message: `Usuario con  id=${id} eliminado con exito`
      })
    }
	
    return res.status(200).json({
    success: false,
    message: `No existe el id=${id} del usuario`
    })
  
  }catch (error){
	  
    return res.status(500).json({
    success: false,
	message: `Error al eliminar id=${id} del usuario`,
    error: error
     })
  }

}//fin del eliminar



module.exports=controller