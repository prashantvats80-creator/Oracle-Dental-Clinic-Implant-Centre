import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

import type {Plugin} from 'vite';

function nonBlockingCssPlugin(): Plugin {
  return {
    name: 'oracle-non-blocking-css',
    apply: 'build',
    transformIndexHtml(html) {
      return html.replace(
        /<link rel="stylesheet"([^>]*?)href="([^"]+\.css)"([^>]*)>/g,
        '<link rel="preload" as="style"$1href="$2"$3 onload="this.onload=null;this.rel=\'stylesheet\'">\n    <noscript><link rel="stylesheet"$1href="$2"$3></noscript>'
      );
    },
  };
}

export default defineConfig(({mode}) => {
  const isProd = mode === 'production';

  return {
    base: process.env.VITE_BASE_PATH || '/',
    plugins: [react(), tailwindcss(), nonBlockingCssPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
    },
    esbuild: {
      drop: isProd ? ['console', 'debugger'] : [],
      legalComments: 'none',
    },
    build: {
      cssMinify: 'esbuild',
      cssCodeSplit: true,
      minify: 'esbuild',
      target: 'es2018',
      assetsInlineLimit: 4096,
      modulePreload: { polyfill: false },
      reportCompressedSize: true,
      chunkSizeWarningLimit: 600,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (id.includes('lucide-react')) {
                return 'vendor-icons';
              }
              if (/[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/.test(id)) {
                return 'vendor-react';
              }
              return 'vendor-misc';
            }
          },
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
          assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
        },
      },
    },
  };
});
