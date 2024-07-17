import { Envs } from './enums';

export const BASE_URL: {
    [env in Envs]: string
} = {
  [Envs.dev]: 'https://httpbin.org',
  [Envs.staging]: 'https://httpbin.org',
  [Envs.prod]: 'https://httpbin.org',
};
