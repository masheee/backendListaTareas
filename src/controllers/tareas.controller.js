
import Tarea from "../models/tareas.js"; 

//prueba
export const prueba = (req, res) => {
    console.log('desde el controlador de prueba')

    res.send('Hola desde el controlador de prueba')
} 

// Crear una nueva tarea
export const crearTarea = async (req, res) => {
    try {
        console.log(req.body);
        const tareaNueva = new Tarea(req.body);
        await tareaNueva.save(); 
        res.status(201).json({ mensaje: 'La tarea fue creada exitosamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({mensaje: 'Ocurrio un error al crear la tarea'});
    }
};

// Listar las tareas de la lista
export const listarTareas = async (req, res) => {
    try {
        //1- buscar la collection de tareas
        const tareas = await Tarea.find()
        //2- enviar la respuesta al front
        res.status(200).json(tareas)
    } catch (error) {
        console.error(error)
        res.status(500).json({ mensaje: 'Ocurrio un error al listar las tareas' })
    }
}

// borrar una tarea de la lista por ID
export const borrarTarea = async (req, res) => {
    try {
        console.log(req.params.id)
        const tareaBuscada = await Tarea.findById(req.params.id)
        if(!tareaBuscada){
            return res.status(404).json({ mensaje: "No se encontró la tarea" })
        }
        await Tarea.findByIdAndDelete(req.params.id)
        res.status(200).json({ mensaje: "El producto fue eliminado correctamente" })
    } catch (error) {
        console.error(error)
        res.status(500).json({ mensaje: "Ocurrio un error, no se pudo borrar la tarea" })
    }
}


