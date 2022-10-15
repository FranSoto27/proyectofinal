import { model, Schema } from "mongoose";


const peliculaSchema = new Schema({
    nombre: {
        type: String,
        require: [true, 'El nombre es requerido']
    },
    director:{
        type : String,
        require : [true, 'El director es requerido']
    },
    categoria: {
        type: String,
        require : [true, 'La categoria es requerida']
    },
    imagen: {
        type: String,
        require : [true, 'La imagen es requerida']
    }
});

interface IPelicula extends Document{
    nombre:string;
    director:string;
    categoria:string;
    imagen:string;

}

export const Pelicula = model<IPelicula>('Pelicula',peliculaSchema);

