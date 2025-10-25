// src/routes/tareas.routes.js

import { Router } from "express";
import { prueba, crearTarea, listarTareas, borrarTarea } from "../controllers/tareas.controller.js";

const router = Router();

// Para probar que el servidor funciona
router.route('/test').get(prueba);

// Ruta para crear y listar tareas
router.route('/').post(crearTarea).get(listarTareas)

// Ruta para obtener, borrar y editar una tarea por su ID
router.route('/:id').delete(borrarTarea)

export default router;