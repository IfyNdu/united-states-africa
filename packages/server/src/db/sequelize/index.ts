import { Sequelize } from 'sequelize-typescript';
import path from 'path';


export default {

  init: (url: string): Sequelize => {

    return new Sequelize(url, { modelPaths: [path.join(__dirname, '../models')] });
  }
}