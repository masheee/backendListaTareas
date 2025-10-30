
import Tarea from "../models/tareas.js"; 

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
        const tareaBuscada = await Tarea.findByIdAndDelete(req.params.id)
        if(!tareaBuscada){
            return res.status(404).json({ mensaje: "No se encontró la tarea" })
        }
        res.status(200).json({ mensaje: "La tarea fue eliminada correctamente" })
    } catch (error) {
        console.error(error)
        res.status(500).json({ mensaje: "Ocurrio un error, no se pudo borrar la tarea" })
    }
}

//editar una tarea de la lista por ID
export const editarTarea = async (req, res) => {
    try {
        const { id } = req.params
        const updateData = req.body
        const tareaBuscada = await Tarea.findByIdAndUpdate(
            id, 
            updateData, 
            { new: true }
        )
        if(!tareaBuscada){
            return res.status(404).json({ mensaje: "No se encontro la tarea" })
        }
        res.status(200).json(tareaBuscada)
    } catch (error) {
        console.error(error)
        res.status(500).json({ mensaje: "Ocurrio un error, no se pudo editar la tarea" })
    }
}

