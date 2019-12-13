import { Router } from 'express';
import { Context } from 'usa-types';


const router = Router();

export default (ctx): Context => {

  return { ctx, router }
}