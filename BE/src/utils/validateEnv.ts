import { cleanEnv } from "envalid";
import { str, port } from "envalid/dist/validators";
const env = cleanEnv(process.env, {
  MONGODB_URL: str(),
  DEV_PORT: port(),
  JWT_SECRET_KEY: str(),
});

export default env;
