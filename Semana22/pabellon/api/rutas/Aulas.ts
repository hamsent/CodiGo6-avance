import {Router} from 'express';
import {postAula} from './../controlador/aula';


export let aulas_router=Router();

aulas_router.post('/aula',postAula);