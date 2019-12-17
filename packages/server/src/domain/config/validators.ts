import fp from 'lodash/fp';


const MIN_CHAR = 10;

export const appImages = fp.every(({ bannerImageUrl }) => {

  return fp.isString(bannerImageUrl) && fp.size(bannerImageUrl) >= MIN_CHAR
});

export const appStatics = fp.every(({ bannerBody, bannerTitle }) => {

  return fp.isString(bannerBody) && fp.size(bannerBody) >= MIN_CHAR
    && fp.isString(bannerTitle)
});