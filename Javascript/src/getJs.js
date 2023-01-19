import axios from 'axios';

const createConfig = (params, headers, authToken) => {
  const config = {};
  config.headers = { 'accept-encoding': 'application/json' };

  if (params) {
    config.params = params;
  }

  if (headers) {
    config.headers = {
      ...config.headers,
      ...headers
    };
  }

  if (authToken) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${authToken}`
    };
  }

  return config;
};

export const get = async (url, params, headers, authToken) => {
  const config = createConfig(params, headers, authToken);
  const resp = await axios.get(url, config);

  return resp.data;
}
