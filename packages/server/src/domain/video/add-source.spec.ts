import { mockLogger } from 'usa-utils';
import addSource from './add-source';
import DB from '../../db';


const dbAddSourceMock = jest.spyOn(DB.video, 'addSource');

jest.mock('uuid/v1', () => {
  return () => 'mock-id';
});

const mockSource = [{
  name: 'test video source',
  id: 'mock-id'
}];

dbAddSourceMock.mockReturnValue(Promise.resolve(mockSource));

const data = ['test video source'];

const logger = mockLogger.init();

describe('addSource', () => {

  it('accepts an array of tags and calls Sequelize', async () => {

    await addSource(data, logger);

    expect(dbAddSourceMock).toHaveBeenCalledTimes(1);
    expect(dbAddSourceMock).toHaveBeenCalledWith(mockSource);
  });

  it('should add a new tag', async () => {

    const res = await addSource(data, logger);
    expect(res).toBe(mockSource);
  });

  it('should throw an error if the tags are not passed in as an array', async () => {

    expect.assertions(1);

    return addSource({ name: 'test-1' } as any, logger)
      .catch(err => { expect(err).toEqual(expect.any(Error)) });
  });

  it('should throw an error if incorrect data is passed', async () => {

    expect.assertions(1);

    return addSource([565] as any, logger)
      .catch(err => { expect(err).toEqual(expect.any(Error)) });
  });
})