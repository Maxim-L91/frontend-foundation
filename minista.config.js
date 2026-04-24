import { defineConfig, pluginSsg, pluginBundle, pluginSprite } from "minista"
import svgoConfig from "./svgo.config.mjs"
import path from 'path'

export default defineConfig({
  // Корень проекта (обычно не меняется)
  root: '', // В данном случае это папка, где лежит minista.config.js

  // Базовый путь (если деплой не в корень сайта, поменяй)
  // префикс, который будет добавляться ко всем путям в продакшене: Скрипты, стили, картинки
  base: '/',

  // Папка с публичными файлами (копируются как есть без обработки бандлером)
  public: 'public',

  // Папка для сборки (туда складывается результат)
  out: 'dist',

  resolve: {
    // Настройка алиаса @/ → src/
    alias: [
      {
        find: '@/',
        replacement: path.resolve('src') + '/',
      },
    ],
  },

  css: {
    modules: {
      // Поведение CSS-модулей (используется редко, но пусть будет)
      scopeBehaviour: 'local',
      localsConvention: 'camelCaseOnly',
    },
    preprocessorOptions: {
      scss: {
        // Автоматически подключаем helpers во все SCSS-файлы
        additionalData: `
          @use '@/styles/helpers' as *;
        `,
        // Убираем варнинги от старого API
        silenceDeprecations: ['legacy-js-api'],
      },
    },
  },
})
