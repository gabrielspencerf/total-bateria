import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

const ALLOWED_LANDING_KEYS = ['empilhadeiras', 'baterias', 'litio-retrofit'] as const;

function validateBuildEnv(mode: string) {
  const env = loadEnv(mode, process.cwd(), '');
  const requiredKeys = [
    'VITE_LANDING_KEY',
    'VITE_SITE_URL',
    'VITE_WHATSAPP_NUMBER',
    'VITE_COMPANY_NAME',
  ] as const;

  const missingKeys = requiredKeys.filter((key) => !env[key]?.trim());
  if (missingKeys.length > 0) {
    throw new Error(`[vite-config] Variáveis obrigatórias ausentes: ${missingKeys.join(', ')}`);
  }

  if (!(ALLOWED_LANDING_KEYS as readonly string[]).includes(env.VITE_LANDING_KEY)) {
    throw new Error(
      `[vite-config] VITE_LANDING_KEY inválida: "${env.VITE_LANDING_KEY}". Valores aceitos: ${ALLOWED_LANDING_KEYS.join(', ')}`,
    );
  }
}

export default defineConfig(({ mode }) => {
  validateBuildEnv(mode);

  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
