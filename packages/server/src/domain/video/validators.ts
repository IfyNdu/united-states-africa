import fp from 'lodash/fp';


const MIN_CHAR = 10;
const ALPHABETS_REGEX = /^[a-zA-Z ]*$/;

const isAlphabet = string => ALPHABETS_REGEX.test(string);

export const videoCategory = fp.every(({ description, imageUrl }) => {

  return fp.isString(description) && fp.isString(imageUrl)
    && fp.size(description) >= MIN_CHAR
});

export const videoTag = fp.every(name => {

  return fp.isString(name) && fp.size(name) >= MIN_CHAR
  && isAlphabet(name)
});
