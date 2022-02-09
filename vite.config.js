import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import viteCompression from 'vite-plugin-compression'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  define: {
    'process.env': {},
  },
  plugins: [
    vue(),
    viteCompression(), // 开启zip
    Components({
      resolvers: [
        AntDesignVueResolver(), // 官方组件地址：https://next.antdv.com/components/overview-cn/，页面上直接使用，无需单独引入组件
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@assets': resolve(__dirname, './src/assets'),
      '@js': resolve(__dirname, './src/assets/js'),
      '@components': resolve(__dirname, './src/components'),
      '@image': resolve(__dirname, './src/assets/images'), // 前面配置不行，用后面这个./src/assets/images
    },
  },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        // 生成环境时移除console
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        chunkFileNames: `assets/js/[name]-[hash].js`,
        entryFileNames: `assets/js/[name]-[hash].js`,
        assetFileNames: `assets/[ext]/[name]-[hash].[ext]`,
      },
    },
  },
})
