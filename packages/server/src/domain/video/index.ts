import { Logger } from 'usa-types';
import addCategory from './add-category';


export default (logger: Logger) => {

  return {

    addCategory: body => {
      
      return addCategory(body, logger);
    }
  }
};