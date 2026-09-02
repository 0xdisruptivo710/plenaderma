// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO: [CONFIRMAR] domínio a registrar (plenaderma.com.br)
const SITE_URL = 'https://plenaderma.com.br';

export default defineConfig({
  site: SITE_URL,
  // Rotas antigas (estrutura v1) para a nova arquitetura de cuidados
  redirects: {
    '/ultraformer': '/tecnologias',
    '/lasers-e-pele': '/tratamentos-de-pele',
    '/corporal': '/harmonizacao-corporal',
  },
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
});
