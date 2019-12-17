import { mockLogger } from 'usa-utils';
import addImage from './add-image';
import DB from '../../db';


const dbAddImageMock = jest.spyOn(DB.config, 'addImage')

jest.mock('uuid/v1', () => {
  return () => 'id-1';
});

const mockImages = [{
  bannerImageUrl: 'test-1 is long enough',
  id: 'id-1'
}]

dbAddImageMock.mockReturnValue(Promise.resolve(mockImages))

const data = [{ bannerImageUrl: 'test-1 is long enough' }]

const logger = mockLogger.init()

describe('addCategory', () => {

  it('accepts an array of images and calls Sequelize', async () => {

    await addImage(data, logger)

    expect(dbAddImageMock).toHaveBeenCalledTimes(1);
    expect(dbAddImageMock).toHaveBeenCalledWith([{
      banner_image_url: 'test-1 is long enough',
      id: 'id-1'
    }]);
  });

  it('should add a new iamge', async () => {

    const res = await addImage(data, logger)
    expect(res).toBe(mockImages);
  });

  it('should throw an error if the images are not passed in as an array', async () => {

    expect.assertions(1)

    return addImage({ bannerImageUrl: 'test-1' } as any, logger)
      .catch(err => { expect(err).toEqual(expect.any(Error)) })
  });

  it('should throw an error if incorrect data is passed', async () => {

    expect.assertions(1)

    return addImage([{ bannerImageUrl: 5998 }] as any, logger)
      .catch(err => { expect(err).toEqual(expect.any(Error)) })
  });

  it('should throw an error if bannerImageUrl doesnt meet minimum length', async () => {

    expect.assertions(1)

    return addImage([{ bannerImageUrl: 'invalid' }] as any, logger)
      .catch(err => { expect(err).toEqual(expect.any(Error)) })
  });
})