import { logger, router } from 'usa-utils';
import Api from './api';
import Domain from './domain'
import Services from './services';
import Sequelize from './db/sequelize';


(async () => {

  const url = process.env.DB_URL;
  const { config, video } = Domain
  
  const services = Services.init({ youtubeKey: 'AIzaSyBDzeadcNLhGfcGvApwnaoEP7A8Z3JO6n4' }, logger)
  const sequelise = Sequelize.init(url);

  const ctx = router({
    config: config(sequelise, logger),
    video: video(services, logger)
  });

  Api.init(sequelise, ctx, logger);
})();
