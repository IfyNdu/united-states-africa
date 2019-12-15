import { Router } from 'express';
import { Context, Domain } from 'usa-types';


const router = Router();

export default (ctx: Domain): Context => {

  return { ctx, router }
}