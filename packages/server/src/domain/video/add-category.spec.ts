import { mockLogger } from 'usa-utils';
import addCategory from './add-category';
import DB from '../../db';


const dbAddCategoryMock = jest.spyOn(DB.video, 'addCategory')

jest.mock('uuid/v1', () => {
  return () => 'id-1';
});

const mockCategory = [{
  description: 'test-1 is long enough',
  id: 'id-1',
  thumbnail: 'http://www.goodurl.com'
}]

dbAddCategoryMock.mockReturnValue(Promise.resolve(mockCategory))

const data = [{
  description: 'test-1 is long enough',
  thumbnail: 'http://www.goodurl.com'
}]

const logger = mockLogger.init()

describe('addCategory', () => {

  it('accepts an array of categories and calls Sequelize', async () => {

    await addCategory(data, logger)

    expect(dbAddCategoryMock).toHaveBeenCalledTimes(1);
    expect(dbAddCategoryMock).toHaveBeenCalledWith([{
      description: 'test-1 is long enough',
      id: 'id-1',
      thumbnail: 'http://www.goodurl.com'
    }]);
  });

  it('should add a new category', async () => {

    const res = await addCategory(data, logger)
    expect(res).toBe(mockCategory);
  });

  it('should throw an error if the categories are not passed in as an array', async () => {

    expect.assertions(1)

    return addCategory({ description: 'test-1', thumbnail: 'http://www.goodurl.com' } as any, logger)
      .catch(err => { expect(err).toEqual(expect.any(Error)) })
  });

  it('should throw an error if incorrect data is passed', async () => {

    expect.assertions(1)

    return addCategory([{ description: 555, thumbnail: {} }] as any, logger)
      .catch(err => { expect(err).toEqual(expect.any(Error)) })
  });

  it('should throw an error if description doesnt meet minimum length', async () => {

    expect.assertions(1)

    return addCategory([{ description: 'invalid', thumbnail: 'url' }] as any, logger)
      .catch(err => { expect(err).toEqual(expect.any(Error)) })
  });
})