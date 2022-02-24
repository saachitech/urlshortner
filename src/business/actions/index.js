import { get, post, responseResult } from './api';

export const postURL = (url) => post('', { url }).then(responseResult)