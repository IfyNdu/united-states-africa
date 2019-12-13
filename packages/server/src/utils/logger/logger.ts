import pino from 'pino';
import pinoExpress from 'express-pino-logger';


const logger = pino();
const middleware = pinoExpress({ logger });

export default { logger, middleware };