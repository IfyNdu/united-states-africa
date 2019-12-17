import { BaseLogger } from 'pino';
import { RequestHandler } from 'express'


export type Logger = BaseLogger
export interface LoggerInstance extends BaseLogger {
  middleware: RequestHandler
};