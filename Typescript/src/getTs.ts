import axios, { AxiosRequestConfig, RawAxiosRequestHeaders } from 'axios';

const createConfig = (params?: Record<string, string>,
                      headers?: RawAxiosRequestHeaders,
                      authToken?: string) => {

  const config: AxiosRequestConfig = {
    headers: { 'accept-encoding': 'application/json' }
  };

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

const get = async <ResponseType>(
  url: string,
  params?: Record<string, string>,
  headers?: RawAxiosRequestHeaders,
  authToken?: string): Promise<ResponseType> => {

  const config = createConfig(params, headers, authToken);
  const resp = await axios.get<ResponseType>(url, config);

  return resp.data;
}


export {
  get
};
