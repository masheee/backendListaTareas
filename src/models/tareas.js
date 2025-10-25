
import mongoose, { Schema } from 'mongoose';

const tareaSchema = new Schema({
    // Aquí definiremos la estructura de nuestra tarea
    nombreTarea: {
        type: String,
        minLength: 2,
        maxLength: 20,
        required: true,
        unique: true
    }
});

const Tarea = mongoose.model('tarea', tareaSchema);

export default Tarea;