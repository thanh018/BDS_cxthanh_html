/* eslint-disable camelcase */
import { AUTH_TYPE } from 'aws-appsync/lib/link/auth-link';

const base_url = 'https://solazudev-origin.travel.jp/stay/';
const rating_url = 'https://app.hotel.jp';
const api_url = 'https://solazudev2.travel.jp';
const article_url = 'https://api.guide.travel.co.jp/api';
const trust_you_url = 'https://api.trustyou.com';
const mapAPIKey = 'AIzaSyAkis9f_LwPbFXFNXc7N9rKvfGQp47guGE';
const fb_api_config = {
  appId: '168650993190178',
  xfbml: true,
  version: 'v3.0',
};

const app_sync = {
  url:
    'https://zsp2mvadl5dbvkrohncoogfrhq.appsync-api.ap-northeast-1.amazonaws.com/graphql',
  region: 'ap-northeast-1',
  auth: {
    type: AUTH_TYPE.API_KEY,
    apiKey: 'da2-2jmluaba75g6bf6xjndsvz5ryy',
  },
  disableOffline: true,
};

const google_api_config = {
  apiKey: 'AIzaSyA405h9doMX2-_Q-Kyiwi8vJN5u_XOuZ_I',
  holidayApi:
    'https://www.googleapis.com/calendar/v3/calendars/japanese__en%40holiday.calendar.google.com/events?key=',
  trackingDomain: {
    trackingId: 'UA-100015916-2',
    taskManagerId: 'GTM-N474KHD',
    crossDomains: ['hotel.jp', 'solazustg.travel.jp'],
  },
};

google_api_config.holidayApi += google_api_config.apiKey;

export {
  app_sync,
  api_url,
  rating_url,
  article_url,
  trust_you_url,
  mapAPIKey,
  fb_api_config,
  google_api_config,
  base_url,
};
