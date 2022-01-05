import dotenv from 'dotenv';
dotenv.config();

export default {
  PORT: process.env.PORT || 8080,
  TOKEN_KEEP_ALIVE: process.env.TOKEN_TIME || '2h',
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY || 'secretin',
  CLOUDINARY_URL: process.env.CLOUDINARY_URL || 'CloudinaryKey',
  ENVIROMENT: process.env.NODE_ENV || 'production',
  MONGO_TEST: process.env.MONGO_TEST || 'test',
  MONGO_INGRESS: process.env.MONGOATLAS_URI || 'mongodbaas',
  MONGOLOCAL_INGRESS: process.env.MONGOLOCAL_URI || 'mongolocal',
  SESSION_SECRET: process.env.SESSION_SECRET || 'secretin',
  GMAIL_NAME: process.env.GMAIL_NAME || 'Admin',
  GMAIL_EMAIL: process.env.GMAIL_EMAIL || 'sebastian.casal@gmail.com',
  GMAIL_PASSWORD: process.env.GMAIL_PASSWORD || 'password',
  TWILIO_ACCOUNT_ID: process.env.TWILIO_ACCOUNT_ID || 'twilioId',
  TWILIO_TOKEN: process.env.TWILIO_TOKEN || 'twilioToken',
  TWILIO_CELLPHONE: process.env.TWILIO_CELLPHONE || 'twiloCellphone',
  ETHEREAL_NAME: process.env.ETHEREAL_NAME || 'etherealName',
  ETHEREAL_EMAIL: process.env.ETHEREAL_EMAIL || 'etherealEmail',
  ETHEREAL_PASSWORD: process.env.ETHEREAL_PASSWORD || 'etherealPassword',
  SESSION_COOKIE_TIMEOUT_MIN: parseInt(
    process.env.SESSION_COOKIE_TIMEOUT_MIN || '10',
  ),
};
