import { Sequelize } from 'sequelize-typescript';


export default {

  init: (url: string): Sequelize => {

    return new Sequelize(url, { modelPaths: [__dirname + '/models'] });
  }
}