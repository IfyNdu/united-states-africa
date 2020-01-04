import fp from 'lodash/fp';
import { mockLogger } from 'usa-utils';
import add from './add';
import DB from '../../db';


const dbAddVideoMock = jest.spyOn(DB.video, 'add')

jest.mock('uuid/v1', () => {
  return () => 'id-1';
});

const mockVideo = [{
  description: 'mayweather vs holyfield',
  id: 'id-1',
  imageUrl: 'testing-url',
  sourceId: 'i-dont-know',
  title: 'champ',
  videoCategoryId: 'vid-cat-id',
  videoId: 'depends-really',
  videoSourceId: 'youtube'
}]

dbAddVideoMock.mockReturnValue(Promise.resolve(mockVideo))

const data = [{
  description: 'mayweather vs holyfield',
  imageUrl: 'testing-url',
  sourceId: 'i-dont-know',
  title: 'champ',
  videoCategoryId: 'vid-cat-id',
  videoId: 'depends-really',
  videoSourceId: 'youtube'
}]

const logger = mockLogger.init()

describe('addVideo', () => {

  it('accepts an array of videos and calls Sequelize', async () => {

    await add(data, logger)

    expect(dbAddVideoMock).toHaveBeenCalledTimes(1);
    expect(dbAddVideoMock).toHaveBeenCalledWith([{
      description: 'mayweather vs holyfield',
      id: 'id-1',
      image_url: 'testing-url',
      source_id: 'i-dont-know',
      title: 'champ',
      video_category_id: 'vid-cat-id',
      video_id: 'depends-really',
      video_source_id: 'youtube'
    }]);
  });

  it('should add a new video', async () => {

    const res = await add(data, logger)
    expect(res).toBe(mockVideo);
  });

  it('should throw an error if the videos are not passed in as an array', async () => {

    expect.assertions(1)

    return add(fp.head(data) as any, logger)
      .catch(err => { expect(err).toEqual(expect.any(Error)) })
  });

  it('should throw an error if incorrect data is passed', async () => {

    expect.assertions(1)

    const invalidData = [{
      description: 455,
      imageUrl: 67,
      sourceId: null,
      title: 'champ',
      videoCategoryId: undefined,
      videoId: undefined,
      videoSourceId: null
    }]

    return add(invalidData as any, logger)
      .catch(err => { expect(err).toEqual(expect.any(Error)) })
  });
})