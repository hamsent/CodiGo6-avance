import { Router } from 'express';
import { producto_controller} from '../controladores/cont_producto';
export let producto_router = Router();
producto_router.get('/producto',producto_controller.getAll);
