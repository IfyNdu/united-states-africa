import fp from 'lodash/fp';
import { Sequelize } from 'usa-types';
import AppImage from '../models/app-image';
import AppStatic from '../models/app-static';
import Video from '../models/video';
import VideoCategory from '../models/video-category';
import * as Utils from '../utils';


export default async (sequelize: Sequelize) => {

  try {

    const res = await sequelize.transaction(async transaction => {

      const image = await AppImage.findAll({ transaction });
      const statics = await AppStatic.findAll({ transaction });
      const videos = await Video.findAll({
        include: [{
          model: VideoCategory,
          required: true
        }],
        raw: true
      })

      return {
        image: fp.map(Utils.toCamelCase, image),
        statics: fp.map(Utils.toCamelCase, statics),
        videos: fp.map(Utils.toCamelCase, videos)
      };
    });

    return fp.castArray(res);
  } catch (err) {

    console.log(err);
  }
}