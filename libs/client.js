// libs/client.js
import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'seiichiblog',
  apiKey: process.env.API_KEY,
});