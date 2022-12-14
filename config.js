import dotenv from 'dotenv';

dotenv.config();

export default {
  PORT: process.env.PORT || 5000,
  MONGODB_URL: process.env.MONGODB_URL,
  JWT_SECRET: process.env.JWT_SECRET || 'somethingsecret',
  PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID || 'sb',
  ACCESS_KEY_ID: process.env.ACCESS_KEY_ID || 'accessKeyId',
  SECRET_ACCESS_KEY: process.env.SECRET_ACCESS_KEY || 'secretAccessKey',
  AWS_REGION: process.env.AWS_REGION,
  AWS_BUCKET: process.env.AWS_BUCKET,
};
