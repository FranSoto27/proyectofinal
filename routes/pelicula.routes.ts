import { Request, Response, Router } from "express";
import { Pelicula } from "../models/pelicula.model";


const peliculaRoutes = Router();

peliculaRoutes.get('/',async (req:Request,res:Response)=>{

    const peliculas = await Pelicula.find();

    return res.json({
        ok:true,
        peliculas
    })
    
})

peliculaRoutes.post('/',(req:Request,res:Response)=>{

    const body = req.body;

    const pelicula = {
        nombre:body.nombre,
        director:body.director,
        categoria:body.categoria
    }

    Pelicula.create(pelicula).then(peliculaDb =>{
        
        return res.json({
            ok:true,
            peliculaDb
        })
       
    }) .catch (err=>{
        return res.json({
        ok:false,
        err
        })
    })

});

peliculaRoutes.put('/:id', (req:Request, res:Response)=>{

    const peliculaId = req.params.id;

    const body = req.body;

    const pelicula = {
        nombre:body.nombre,
        director:body.director,
        categoria:body.categoria 
    }

    Pelicula.findByIdAndUpdate(peliculaId, pelicula).then(peliculaDb=>{

        return res.json({
            ok:true,
            peliculaDb
        })
    })
    
    
});

peliculaRoutes.delete('/', async (req:Request, res:Response)=>{

const peliculaId = req.query.id;

if (peliculaId){
    return res.json({
        ok:false,
        msj:"El registro solicitado no existe"
    })
}

const peliculaDb = await Pelicula.findById(peliculaId);

if(!peliculaDb){
    return res.json({
        ok:false,
        msj:"El registro solicitado no existe"
    })
}

Pelicula.findByIdAndDelete(peliculaId).then(pelicula=>{

    return res.json({
        ok:true,
        msj:"Eliminado correctamente"
    })
}).catch(err=>{
    return res.json({
        ok:false,
        msj:"El registro solicitado no existe"
    })
    })
});

export default peliculaRoutes;