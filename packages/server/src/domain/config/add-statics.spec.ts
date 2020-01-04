import { mockLogger } from 'usa-utils';
import addStatics from './add-statics';
import DB from '../../db';


const dbAddStaticsMock = jest.spyOn(DB.config, 'addStatics')

jest.mock('uuid/v1', () => {
  return () => 'id-1';
});

const mockStatics = [{
  bannerBody: 'this is a test banner body',
  bannerTitle: 'this is a test banner title',
  id: 'id-1'
}]

dbAddStaticsMock.mockReturnValue(Promise.resolve(mockStatics))

const data = [{
  bannerBody: 'this is a test banner body',
  bannerTitle: 'this is a test banner title'
}]

const logger = mockLogger.init()

describe('addStatics', () => {

  it('accepts an array of statics and calls Sequelize', async () => {

    await addStatics(data, logger)

    expect(dbAddStaticsMock).toHaveBeenCalledTimes(1);
    expect(dbAddStaticsMock).toHaveBeenCalledWith([{
      banner_body: 'this is a test banner body',
      banner_title: 'this is a test banner title',
      id: 'id-1'
    }]);
  });

  it('should add new statics', async () => {

    const res = await addStatics(data, logger)
    expect(res).toBe(mockStatics);
  });

  it('should throw an error if the statics are not passed in as an array', async () => {

    expect.assertions(1)

    return addStatics({ bannerBody: 'test-1', bannerTitle: 'damn!' } as any, logger)
      .catch(err => { expect(err).toEqual(expect.any(Error)) })
  });

  it('should throw an error if incorrect data is passed', async () => {

    expect.assertions(1)

    return addStatics([{ bannerBody: 5998, bannerTitle: [] }] as any, logger)
      .catch(err => { expect(err).toEqual(expect.any(Error)) })
  });

  it('should throw an error if request fields are incomplete', async () => {

    expect.assertions(1)

    return addStatics([{ bannerImageUrl: 'no title' }] as any, logger)
      .catch(err => { expect(err).toEqual(expect.any(Error)) })
  });
})