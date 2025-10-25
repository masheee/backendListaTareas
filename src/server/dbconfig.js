
import mongoose from "mongoose";

try {
    mongoose.connect(process.env.MONGODB_URI).then(()=>{
        console.info('La conexión a la BASE DE DATOS fue exitosa');
    });
} catch (error) {
    console.error(error);
}

export default mongoose;