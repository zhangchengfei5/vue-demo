import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import tsconfigPaths from 'vite-tsconfig-paths';

function _resolve(dir: string) {
  return resolve(__dirname, dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
    host: true,
    port: 3096
  },
  resolve: {
    alias: {
      '@': _resolve('src')
    }
  },
  plugins: [
      vue(),
    AutoImport({
      imports: [
        'vue',
        {
          'naive-ui': [
            'useDialog',
            'useMessage',
            'useNotification',
            'useLoadingBar'
          ]
        }
      ]
    }),
    Components({
      resolvers: [NaiveUiResolver()]
    }),
    tsconfigPaths()
  ]
})
