import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [
      react({
        // plugins: [
        //   ['@swc-jotai/react-refresh', {}],
        //   ['@swc-jotai/debug-label', {}]
        // ]
      }),
      tsconfigPaths()
    ],
    envPrefix: 'RK_',
    server: {
      port: 9001
    }
  };
});
