import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import { LANDING_KEYS, type LandingKey } from './config/landing-keys';

function validateBuildEnv(env: Record<string, string>) {
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

  if (!(LANDING_KEYS as readonly string[]).includes(env.VITE_LANDING_KEY)) {
    throw new Error(
      `[vite-config] VITE_LANDING_KEY inválida: "${env.VITE_LANDING_KEY}". Valores aceitos: ${LANDING_KEYS.join(', ')}`,
    );
  }
}

function resolveViteBase(env: Record<string, string>): string {
  const raw = env.VITE_BASE_PATH?.trim();
  if (!raw || raw === '/') return '/';
  return raw.endsWith('/') ? raw : `${raw}/`;
}

const VIRTUAL_SELECTED_LANDING_ID = 'virtual:selected-landing-config';
const RESOLVED_VIRTUAL_SELECTED_LANDING_ID = `\0${VIRTUAL_SELECTED_LANDING_ID}`;

const landingModuleByKey: Record<LandingKey, { relativePath: string; exportName: string }> = {
  empilhadeiras: {
    relativePath: './src/content/landings/empilhadeiras.ts',
    exportName: 'empilhadeirasLandingConfig',
  },
  baterias: {
    relativePath: './src/content/landings/baterias.ts',
    exportName: 'bateriasLandingConfig',
  },
  'litio-retrofit': {
    relativePath: './src/content/landings/litio-retrofit.ts',
    exportName: 'litioRetrofitLandingConfig',
  },
};

function createSelectedLandingConfigPlugin(landingKey: LandingKey) {
  const selectedModule = landingModuleByKey[landingKey];
  const selectedModuleFilePath = path
    .resolve(__dirname, selectedModule.relativePath)
    .replace(/\\/g, '/');

  return {
    name: 'selected-landing-config-plugin',
    resolveId(id: string) {
      if (id === VIRTUAL_SELECTED_LANDING_ID) {
        return RESOLVED_VIRTUAL_SELECTED_LANDING_ID;
      }
      return null;
    },
    load(id: string) {
      if (id !== RESOLVED_VIRTUAL_SELECTED_LANDING_ID) {
        return null;
      }

      return `export { ${selectedModule.exportName} as selectedLandingConfig } from ${JSON.stringify(selectedModuleFilePath)};`;
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  validateBuildEnv(env);
  const base = resolveViteBase(env);
  const landingKey = env.VITE_LANDING_KEY as LandingKey;

  return {
    base,
    plugins: [
      createSelectedLandingConfigPlugin(landingKey),
      react(),
      tailwindcss(),
    ],
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
