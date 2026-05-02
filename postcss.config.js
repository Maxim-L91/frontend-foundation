import postcssPxToRem from 'postcss-pxtorem'
import postcssPresetEnv from 'postcss-preset-env'

export default ({ env }) => {
  const isProd = env === 'production'
  /**
   * Документация чтобы прикрутить разные плагин для postcss, которые вставляются ниже в массив
   * @see https://postcss.org/docs/postcss-plugins
   */
  const plugins = []

  if (isProd) {
    plugins.push(
      postcssPxToRem({
        propList: ['*'],
        mediaQuery: true,
      })
    )

    plugins.push(postcssPresetEnv())
  }

  return {
    plugins,
  }
}