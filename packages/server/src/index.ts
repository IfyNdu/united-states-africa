import Api from './api';
import Db from './db';
import Domain from './domain'
import * as Utils from './utils';


const startServer = async () => {
  
  const url = process.env.DB_URL;
  
  const sequelise = Db.init(url);
  const ctx = Utils.router(Domain);
  
  Api.init(sequelise, ctx, Utils.logger);
}

startServer();