import { drizzle } from 'drizzle-orm/bun-sql';
import * as schema from './schema';

const db = drizzle(process.env.DATABASE_URL!, { schema });

export default db;
