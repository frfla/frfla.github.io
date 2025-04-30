import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

export default defineConfig({
  base: '/<REPO_NAME>/',
  plugins: [react(), tsconfigPaths(), vanillaExtractPlugin()],
  build: {
    outDir: 'docs',
  },
});
