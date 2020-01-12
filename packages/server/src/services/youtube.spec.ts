import { mockLogger } from 'usa-utils';
import youtube from './youtube';


jest.mock('axios', () => {
  return {
    get: () => ({
      data: Promise.resolve({ items: [] })
    })
  };
});

const logger = mockLogger.init();

describe('Youtube', () => {

  it('should throw an error if items is empty or items does not exist', async () => {

    expect.assertions(1);

    return youtube('key', logger)('fake-id', {})
      .catch(err => { expect(err).toEqual(expect.any(Error)) })
  });
});