import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://memekviral.pages.dev',
  output: 'server',
  adapter: cloudflare(),
});