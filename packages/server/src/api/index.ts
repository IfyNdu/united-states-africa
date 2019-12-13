import express from 'express';
import { Context, loggerInterface, Sequelize } from 'usa-types';
import router from './router';


const app = express();
const PORT = process.env.PORT;

export default {

  init: (sequelize: Sequelize, ctx: Context, { logger, middleware }: loggerInterface) => {

    app.use(middleware);
    app.use('/api', router(ctx));

    sequelize
      .sync({ force: false })
      .then(({ config }) => {

        logger.info({ message: 'Sequelise started [SUCCESSFULLY]', config });
        app.listen(process.env.PORT, err => {

          if (err) { return logger.error(err); }

          return logger.info(`server is listening on ${PORT}`);
        });
      });
  }
}