import { mockLogger } from 'usa-utils';
import addTag from './add-tag';
import DB from '../../db';


const dbAddTagMock = jest.spyOn(DB.video, 'addTag')

jest.mock('uuid/v1', () => {
  return () => 'mock-id';
});

const mockTag = [{
  name: 'test video tag',
  id: 'mock-id'
}]

dbAddTagMock.mockReturnValue(Promise.resolve(mockTag))

const data = ['test video tag']

const logger = mockLogger.init()

describe('addTag', () => {

  it('accepts an array of tags and calls Sequelize', async () => {

    await addTag(data, logger)

    expect(dbAddTagMock).toHaveBeenCalledTimes(1);
    expect(dbAddTagMock).toHaveBeenCalledWith(mockTag);
  });

  it('should add a new tag', async () => {

    const res = await addTag(data, logger)
    expect(res).toBe(mockTag);
  });

  it('should throw an error if the tags are not passed in as an array', async () => {

    expect.assertions(1)

    return addTag({ name: 'test-1' } as any, logger)
      .catch(err => { expect(err).toEqual(expect.any(Error)) })
  });

  it('should throw an error if incorrect data is passed', async () => {

    expect.assertions(1)

    return addTag([565] as any, logger)
      .catch(err => { expect(err).toEqual(expect.any(Error)) })
  });

  it('should throw an error if tag name doesnt meet minimum length', async () => {

    expect.assertions(1)

    return addTag(['invalid'] as any, logger)
      .catch(err => { expect(err).toEqual(expect.any(Error)) })
  });
})