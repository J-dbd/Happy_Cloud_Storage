import { cleanEnv, str } from "envalid";

const env = cleanEnv(process.env, {
  FB_API_KEY: str(),
  FB_AUTH_DOMAIN: str(),
  FB_PJ_ID: str(),
  FB_STORAGE_BUCKET: str(),
  FB_MSG_SENDER_ID: str(),
  FB_APP_ID: str(),
  FB_MEASUREMENT_ID: str(),
});

export default env;
