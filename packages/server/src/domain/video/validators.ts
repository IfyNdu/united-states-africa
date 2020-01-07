import fp from 'lodash/fp';


const MIN_CHAR = 10;
const ALPHABETS_REGEX = /^[a-zA-Z ]*$/;
const URL_REGEX = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;

const isAlphabet = string => ALPHABETS_REGEX.test(string);
const isValidURL = string => URL_REGEX.test(string);

export const videoCategory = fp.every(({ description, thumbnail }) => {

  return fp.isString(description) && fp.size(description) >= MIN_CHAR
    && fp.isString(thumbnail) && isValidURL(thumbnail)
});

export const videoTag = fp.every(id => {

  return fp.isString(id) && isAlphabet(id)
});

export const videoSource = fp.every(name => {

  return fp.isString(name) && isAlphabet(name)
});

export const tagVideo = fp.every(({ tagId, videoId }) => {

  return !fp.isNull(videoId) && !fp.isUndefined(videoId)
    && !fp.isNull(tagId) && !fp.isUndefined(tagId)
});

export const video = fp.every(({ sourceId, videoCategoryId, videoSourceId }) => {

  return !fp.isNull(videoCategoryId) && !fp.isUndefined(videoCategoryId)
    && !fp.isNull(sourceId) && !fp.isUndefined(sourceId)
    && !fp.isNull(videoSourceId) && !fp.isUndefined(videoSourceId)
});
