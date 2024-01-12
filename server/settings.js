import { config } from 'dotenv';

const debug = true;

config();

let port;
const clientUrl = process.env.CLIENT_URL;
const secretToken = process.env.SECRET_TOKEN;

if (debug) {
  port = process.env.DEV_PORT;
} else {
  port = process.env.DEPLOY_PORT;
}

export default {port, clientUrl, secretToken};