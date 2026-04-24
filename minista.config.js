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
})
