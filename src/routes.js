import { Router } from 'express';
import { datosFalsos } from './utils';
import express from 'express'
import session from 'express-session';
import  path from 'path';
import { home, Productostest, signin, signUp } from '../Controller/Controller';
import Auth from '../Middlewares/Auth';
const router = Router();


router.use(express.static(path.join(__dirname, 'public')));
router.get('/',Auth,home)
router.get('/signUp', signUp)
router.post('/sign',signin)
router.get('/productos-test',Productostest);
    


export{router} 