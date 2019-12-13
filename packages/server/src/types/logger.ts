import { BaseLogger } from 'pino';
import { RequestHandler } from 'express'


export interface loggerInterface {
  logger: BaseLogger,
  middleware: RequestHandler
};