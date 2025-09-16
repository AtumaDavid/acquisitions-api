import 'dotenv/config';

import { neon, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

const sql = neon(
  process.env.DATABASE_URL
  //   neonConfig({ fetch: globalThis.fetch })
);

const db = drizzle(sql);

export { db, sql };

// TODO: Configure for neon local database
