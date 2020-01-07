import fp from 'lodash/fp';


const anyFp = fp as any
const fpReduce = anyFp.reduce.convert({ cap: false });
const SECONDS = 60;

const propertyMap = {
  thumbnails: 'thumbnail'
};

const resolveProperty = val => propertyMap[fp.head(fp.split('.', val))];

export const parseDuration = (raw: string) => {

  if (!raw.match(/PT/g)) {
    throw new Error(`Cannot parse Youtube rawv duration ${raw}`);
  }

  const duration = raw.substring(2);

  const hourArr = fp.split('H', duration);
  const hours = fp.size(hourArr) === 2 ? Number(fp.head(hourArr)) * SECONDS * SECONDS : 0;
  const minutesArr = fp.split('M', hourArr[1] || duration);
  const minutes = fp.size(minutesArr) === 2 ? Number(fp.head(minutesArr)) * SECONDS : 0;
  const secondsArr = fp.split('S', minutesArr[1] || duration);
  const seconds = fp.size(secondsArr) === 2 ? Number(fp.head(secondsArr)) : 0;

  return hours + minutes + seconds;
};

export const getProperties = (raw: object, properties: { [key: string]: Array<string> }) => {

  const data = fp.get('items[0]', raw)

  return fpReduce((acc, value, key) => {

    acc = {
      ...acc,
      ...fp.reduce((accumulator, val) => {

        if (val === 'duration') {

          accumulator[val] = parseDuration(fp.get(`${key}.${val}`, data));
          return accumulator;
        }

        const isNested = val.match(/\./g);
        accumulator[isNested ? resolveProperty(val) : val] = fp.get(`${key}.${val}`, data);

        return accumulator;
      }, {}, value)
    };

    return acc
  }, {}, properties);
};
