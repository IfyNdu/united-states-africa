import { IRouter } from 'express';


export type Router = IRouter

export interface Context {
  ctx: { [key: string]: Function }
  router: IRouter
};
