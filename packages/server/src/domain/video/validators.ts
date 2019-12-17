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

export const videoSource = fp.every(name => {

  return fp.isString(name) && isAlphabet(name)
});

export const tagVideo = fp.every(({ tagId, videoId }) => {

  return !fp.isNull(videoId) && !fp.isUndefined(videoId)
    && !fp.isNull(tagId) && !fp.isUndefined(tagId)
});

export const video = fp.every(({ description, imageUrl, sourceId, title, videoCategoryId, videoId, videoSourceId }) => {

  return fp.isString(title) && isAlphabet(title)
    && fp.isString(description) && fp.size(description) >= MIN_CHAR
    && fp.isString(imageUrl) && fp.size(imageUrl) >= MIN_CHAR
    && !fp.isNull(sourceId) && !fp.isUndefined(sourceId)
    && !fp.isNull(videoCategoryId) && !fp.isUndefined(videoCategoryId)
    && !fp.isNull(videoId) && !fp.isUndefined(videoId)
    && !fp.isNull(videoSourceId) && !fp.isUndefined(videoSourceId)
});
