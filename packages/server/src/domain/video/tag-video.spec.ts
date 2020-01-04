import { mockLogger } from 'usa-utils';
import tagVideo from './tag-video';
import DB from '../../db';


const dbTagVideoMock = jest.spyOn(DB.video, 'tagVideo')

jest.mock('uuid/v1', () => {
  return () => 'id-1';
});

const mockVideo = [{
  id: 'id-1',
  videoId: 'video-id',
  tagId: 'youttag-id'
}];

dbTagVideoMock.mockReturnValue(Promise.resolve(mockVideo));

const data = [{
  videoId: 'video-id',
  tagId: 'youttag-id'
}];

const logger = mockLogger.init();

describe('addVideo', () => {

  it('accepts an array of tagged videos and calls Sequelize', async () => {

    await tagVideo(data, logger);

    expect(dbTagVideoMock).toHaveBeenCalledTimes(1);
    expect(dbTagVideoMock).toHaveBeenCalledWith([{
      id: 'id-1',
      video_id: 'video-id',
      tag_id: 'youttag-id'
    }]);
  });

  it('should add a new tagged video', async () => {

    const res = await tagVideo(data, logger);
    expect(res).toBe(mockVideo);
  });

  it('should throw an error if incorrect data is passed', async () => {

    expect.assertions(1);

    const invalidData = [{
      tagId: null
    }];

    return tagVideo(invalidData as any, logger)
      .catch(err => { expect(err).toEqual(expect.any(Error)) });
  });
})