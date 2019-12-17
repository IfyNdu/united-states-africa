import { LoggerInstance } from 'usa-types';
import add from './add';
import addCategory from './add-category';
import addSource from './add-source';
import addTag from './add-tag';
import tagVideo from './tag-video';


export default (logger: LoggerInstance) => {

  return {

    add: body => {
      
      return add(body, logger);
    },

    addCategory: body => {
      
      return addCategory(body, logger);
    },

    addSource: body => {
      
      return addSource(body, logger);
    },

    addTag: body => {
      
      return addTag(body, logger);
    },

    tagVideo: body => {
      
      return tagVideo(body, logger);
    }
  }
};