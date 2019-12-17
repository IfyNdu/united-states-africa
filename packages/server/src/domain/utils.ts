import fp from 'lodash/fp';


const anyFp = fp as any
const fpReduce = anyFp.reduce.convert({ cap: false });

export const toSnakeCase = fpReduce((acc, value, key) => {

  acc[fp.snakeCase(key)] = value;
  return acc
}, {});
