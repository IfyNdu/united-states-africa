import { logger, router } from 'usa-utils';
import Api from './api';
import Sequelize from './db/sequelize/sequelize';
import Domain from './domain'


const startServer = async () => {

  const url = process.env.DB_URL;
  const { video } = Domain

  const sequelise = Sequelize.init(url);
  const ctx = router({
    video: video(logger.logger)
  });

  Api.init(sequelise, ctx, logger);
}

startServer();