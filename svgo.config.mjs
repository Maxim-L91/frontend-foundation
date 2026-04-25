export default {
  multipass: true,

  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          cleanupIds: false,
        },
      },
    },

    {
      name: 'removeAttrs',
      params: {
        attrs: '(fill|stroke|style)',
      },
    },

    {
      name: 'removeDimensions',
    },

    {
      name: 'addAttributesToSVGElement',
      params: {
        attributes: [{ fill: 'currentColor' }],
      },
    },
  ],
}