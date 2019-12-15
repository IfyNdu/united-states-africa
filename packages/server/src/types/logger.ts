import { BaseLogger } from 'pino';
import { RequestHandler } from 'express'


export type Logger = BaseLogger
export interface LoggerInterface {
  logger: Logger,
  middleware: RequestHandler
};