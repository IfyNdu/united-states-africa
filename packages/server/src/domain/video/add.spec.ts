import fp from 'lodash/fp';
import { mockLogger } from 'usa-utils';
import add from './add';
import DB from '../../db';


const dbAddVideoMock = jest.spyOn(DB.video, 'add');
const dbTagVideoMock = jest.spyOn(DB.video, 'tagVideo');

jest.mock('uuid/v1', () => {
  return () => 'id-1';
});

const mockVideo = [{
  definition: 'cd',
  description: 'mayweather vs holyfield',
  duration: 4000,
  id: 'id-1',
  sourceId: 'depends-really',
  thumbnail: 'http://www.goodurl.com',
  title: 'champ',
  videoCategoryId: 'vid-cat-id',
  videoSourceId: 'youtube'
}]
dbAddVideoMock.mockReturnValue(Promise.resolve(mockVideo));

const taggedVidMock = [{
  tagId: '',
  videoId: 'id-1'
}];
dbTagVideoMock.mockReturnValue(Promise.resolve(taggedVidMock));

const mockYoutubeData = {
  definition: 'cd',
  description: 'mayweather vs holyfield',
  duration: 4000,
  thumbnail: 'http://www.goodurl.com',
  title: 'champ',
};
const youtube = jest.fn();
youtube.mockReturnValue(mockYoutubeData);

const data = [{
  sourceId: 'depends-really',
  videoCategoryId: 'vid-cat-id',
  videoSourceId: 'youtube'
}]

const logger = mockLogger.init();
const mockServices = { youtube };

describe('addVideo', () => {

  it('accepts an array of videos and calls Sequelize', async () => {

    await add(data, mockServices, logger)

    expect(dbAddVideoMock).toHaveBeenCalledTimes(1);
    expect(dbAddVideoMock).toHaveBeenCalledWith([{
      ...mockYoutubeData,
      id: 'id-1',
      source_id: 'depends-really',
      video_category_id: 'vid-cat-id',
      video_source_id: 'youtube'
    }]);
  });

  it('should add a new video', async () => {

    const res = await add(data, mockServices, logger)
    expect(res).toBe(mockVideo);
  });

  it('should throw an error if the videos are not passed in as an array', async () => {

    expect.assertions(1)

    return add(fp.head(data) as any, mockServices, logger)
      .catch(err => { expect(err).toEqual(expect.any(Error)) })
  });

  it('should throw an error if incorrect data is passed', async () => {

    expect.assertions(1)

    const invalidData = [{
      videoCategoryId: undefined,
      sourceId: undefined,
      videoSourceId: null
    }]

    return add(invalidData as any, mockServices, logger)
      .catch(err => { expect(err).toEqual(expect.any(Error)) })
  });
});
