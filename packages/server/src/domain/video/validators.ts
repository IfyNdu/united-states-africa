import fp from 'lodash/fp';

const MIN_CHAR = 5;

export const videoCategory = fp.every(({ description, imageUrl }) => {

  return fp.isString(description) && fp.isString(imageUrl)
    && fp.size(description) >= MIN_CHAR
});
