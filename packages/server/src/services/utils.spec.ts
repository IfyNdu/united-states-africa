import fp from 'lodash/fp';
import * as Utils from './utils';


describe('Utils', () => {

  describe('parseDuration', () => {

    it('returns correct value for minutes and seconds', () => {

      const duration = Utils.parseDuration('PT58M16S');

      expect(duration).not.toBe('3496');
      expect(duration).toBe(3496);
    });

    it('returns correct value for hours, minutes and seconds', () => {

      const duration = Utils.parseDuration('PT512H8M16S');

      expect(duration).not.toBe('1843696');
      expect(duration).toBe(1843696);
    });

    it('should throw an error if an invalid duration is passed', () => {

      expect.assertions(1);

      try {
        Utils.parseDuration('INV3H45M45S');
      } catch (err) {
        expect(err).toEqual(expect.any(Error));
      }
    })
  });

  describe('getProperties', () => {

    const data = {
      items: [{
        prop1: {
          age: 31,
          name: 'Dare Devil'
        },
        prop2: {
          sex: 'B'
        },
        prop3: {
          address: {
            home: 'Ef off!'
          }
        },
        prop4: {
          thumbnails: { url: 'url' }
        }
      }]
    }

    it('parses and returns the correct properties', () => {

      const mockProperties = {
        prop1: ['name', 'age'],
        prop2: ['sex']
      };
      const properties = Utils.getProperties(data, mockProperties);

      expect(properties).toMatchObject({
        age: 31,
        name: 'Dare Devil',
        sex: 'B'
      });
    })

    it('parses and returns nested properties', () => {

      const mockProperties = {
        prop3: ['address.home']
      };
      const properties = Utils.getProperties(data, mockProperties)

      expect(fp.join('', fp.values(properties))).toEqual('Ef off!');
    })

    it('maps certain names correctly', () => {

      const mockProperties = {
        prop4: ['thumbnails.url']
      };
      const properties = Utils.getProperties(data, mockProperties)

      expect(properties).toMatchObject({ thumbnail: 'url' });
    })
  });
});