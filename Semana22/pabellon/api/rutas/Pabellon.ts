//PABELLON ROUTER
import { Router } from "express";

import { postPabellon, getPabellones, getPabellonesById, updatePabellon, getAulasXPabellon, getAulasByPabellonId } from './../controlador/Pabellon';

export let pabellon_router=Router();

pabellon_router.post('/pabellon', postPabellon);
pabellon_router.get('/pabellon', getPabellones);
pabellon_router.get('/pabellon/:id', getPabellonesById);
pabellon_router.put('/pabellon', updatePabellon);
// las rutas no pueden ser iguales por eso se cambio pabellones, '/pabellon/:id' asume que es igual '/pabellon/aulas'
pabellon_router.get('/pabellones/aulas', getAulasXPabellon);
pabellon_router.get('/pabellones/:id/aulas', getAulasByPabellonId);