import { LoggerInstance, Sequelize } from 'usa-types';
import Db from '../../db';
import addImage from './add-image';
import addStatics from './add-statics';


export default (sequelize: Sequelize, logger: LoggerInstance) => {

  return {

    addImage: body => {

      return addImage(body, logger);
    },
    addStatics: body => {

      return addStatics(body, logger);
    },
    getBootstrap: () => {

      logger.info({ message: `Getting bootstrap for index page`});
      return Db.config.getBootstrap(sequelize);
    }
  }
};