import { IRouter } from 'express';
import { Domain } from './domain'


export type Router = IRouter

export interface Context {
  ctx: Domain
  router: IRouter
};
