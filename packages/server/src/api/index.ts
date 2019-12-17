import express from 'express';
import bodyParser from 'body-parser';
import { Context, LoggerInstance, Sequelize } from 'usa-types';
import routes from './routes';


const app = express();
const PORT = process.env.APP_PORT;

export default {

  init: (sequelize: Sequelize, router: Context, logger: LoggerInstance) => {

    app.use(logger.middleware);
    app.use(bodyParser.json());
    app.use('/api', routes(router));

    sequelize
      .sync({ force: false })
      .then(({ config }) => {

        logger.info({ message: 'Sequelise started [SUCCESSFULLY]', config });
        app.listen(PORT, err => {

          if (err) { return logger.error(err); }

          return logger.info(`server is listening on ${PORT}`);
        });
      })
      .catch(error => {
        logger.info({ message: 'Sequelise Failed to start [ERROR]', error });
        process.exit(1);
      });
  }
}