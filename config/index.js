/* eslint-disable camelcase */
import * as ENVS from './envs';

const currentEnvKey = process.env.NODE_ENV || 'development';
const currentEnv = ENVS[currentEnvKey] || ENVS.development;
// const currentEnv = ENVS[currentEnvKey] || ENVS['development'];
const mapAPI = 'https://maps.googleapis.com/maps/api';
const { mapAPIKey } = currentEnv;
// const mapAPIKey = currentEnv['mapAPIKey'];
const reloadProcessInterval = 10000;
const base_url = currentEnv.base_url;

export {
  base_url,
  currentEnvKey,
  currentEnv,
  mapAPI,
  mapAPIKey,
  reloadProcessInterval,
};
