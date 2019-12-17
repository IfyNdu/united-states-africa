import { LoggerInstance } from 'usa-types';
import addCategory from './add-category';
import addTag from './add-tag';


export default (logger: LoggerInstance) => {

  return {

    addCategory: body => {
      
      return addCategory(body, logger);
    },
    addTag: body => {
      
      return addTag(body, logger);
    }
  }
};