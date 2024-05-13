import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig(({ mode }) => {
  let base = '/';

  if (mode === 'production') {
    base = '/bakery/';
  } else if (mode === 'wordpress') {
    base = '/wp-content/themes/bakery/';
  }

  return {
    base,
    root: path.resolve(__dirname),
    resolve: {
      alias: {
        '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
        '~modern-normalize': path.resolve(__dirname, 'node_modules/modern-normalize'),
      },
    },
    server: {
      port: 8080,
      hot: true,
    },
    build: {
      outDir: path.resolve(__dirname, 'dist'),
    },
  };
});
