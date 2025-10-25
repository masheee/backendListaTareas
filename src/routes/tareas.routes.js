// src/routes/tareas.routes.js

import { Router } from "express";
import { crearTarea, listarTareas, borrarTarea } from "../controllers/tareas.controller.js";

const router = Router();

// Ruta para crear y listar tareas
router.route('/').post(crearTarea).get(listarTareas)

// Ruta para obtener, borrar y editar una tarea por su ID
router.route('/:id').delete(borrarTarea)

export default router;