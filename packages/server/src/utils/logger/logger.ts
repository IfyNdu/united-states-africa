import pino from 'pino';
import pinoExpress from 'express-pino-logger';


const logger: any = pino();
logger.middleware = pinoExpress({ logger });

export default logger;