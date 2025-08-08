import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    ...(mode === 'analyze' ? [
      visualizer({
        filename: 'dist/stats.html',
        open: true,
        gzipSize: true,
        brotliSize: true,
      })
    ] : []),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/index.css";`
      }
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    include: ['@radix-ui/react-dialog']
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunks for better caching
          'react-vendor': ['react', 'react-dom'],
          'router': ['react-router-dom'],
          'ui': ['lucide-react', '@radix-ui/react-slot', '@radix-ui/react-toast', '@radix-ui/react-tooltip'],
          'animations': ['framer-motion'],
        },
      },
    },
    commonjsOptions: {
      include: [/node_modules/],
      extensions: ['.js', '.cjs'],
      strictRequires: true,
      transformMixedEsModules: true,
    },
    // Enable source maps for production debugging but exclude from bundle
    sourcemap: false,
    // Optimize chunk size warnings
    chunkSizeWarningLimit: 600,
    // Enable minification (using esbuild by default)
    minify: true,
  }
}));
