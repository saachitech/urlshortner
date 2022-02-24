import { API } from 'aws-amplify';
const API_NAME = process.env.REACT_APP_AWS_API_NAME;
//
export const get = async (route, params) => {
  return API.get(API_NAME, route, {
    queryStringParameters: params,
  })
}

export const post = async (route, params, headers) => {
  return API.post(API_NAME, route, {
    body: params,
    headers: {
      accept: 'application/json',
      ...headers
    }
  });
}

export const del = async (route, params) => {
  return API.del(API_NAME, route, {
    body: params,
    headers: {
      accept: 'application/json',
    }
  });
}

export const patch = async (route, params) => {
  return API.patch(API_NAME, route, {
    body: params,
    headers: {
      accept: 'application/json',
    }
  });
}

export const responseResult = response => response;