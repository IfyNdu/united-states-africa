import fp from 'lodash/fp';


const anyFp = fp as any
const fpReduce = anyFp.reduce.convert({ cap: false });

export const toCamelCase = data => fpReduce((acc, value, key) => {

  acc[fp.camelCase(key)] = value
  return acc
}, {}, fp.getOr(data, 'dataValues', data));
