declare const GLOBAL_ENV: GlobalEnv;

export interface GlobalEnv {
  ECO_API_URL: string;
  GOOGLE_CLIENT_ID: string;
}

export const getEnv = (): GlobalEnv => {
  return GLOBAL_ENV;
};
