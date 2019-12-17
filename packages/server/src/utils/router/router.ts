import { Router } from 'express';
import { Context, Domain } from 'usa-types';


const router: any = Router();

export default (ctx: Domain): Context => {

  router.ctx = ctx;
  return router;
}