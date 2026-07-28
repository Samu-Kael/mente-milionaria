import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/infrastructure/schemas/*.ts',
  out: './drizzle',
  dialect: 'sqlite',
  dbCredentials: {
    url: 'local.db',
  },
});