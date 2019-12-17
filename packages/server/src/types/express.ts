import { IRouter } from 'express';
import { Domain } from './domain'


export interface Context extends IRouter {
  ctx: Domain
};
