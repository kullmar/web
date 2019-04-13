import axios, { AxiosResponse, AxiosRequestConfig, AxiosError } from 'axios';

const PREFIX = '/api/';
const config: AxiosRequestConfig = {
    url: PREFIX,
};  

axios(config);

export function get<T>(resource: string): void {
    axios
        .get(resource)
        .then((response: AxiosResponse) => response.data)
        .catch((error: AxiosError) => {
            return error;
        });
}
