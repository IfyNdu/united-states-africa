import { LoggerInstance } from 'usa-types';
import addImage from './add-image';


export default (logger: LoggerInstance) => {

  return {

    addImage: body => {

      return addImage(body, logger);
    }
  }
};