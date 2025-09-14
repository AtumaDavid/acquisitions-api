import 'dotenv/config';

export default {
  schema: './src/models/*.{ts,js}',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
};
