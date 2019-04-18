import axios, { AxiosResponse, AxiosRequestConfig, AxiosError, AxiosPromise } from 'axios';

const PREFIX = '/api/';
const config: AxiosRequestConfig = {
    url: PREFIX,
};  

axios(config);

export function get<T>(resource: string): AxiosPromise<T> {
    return axios.get(resource);
}
