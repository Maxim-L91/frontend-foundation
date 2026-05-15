/** 
 * @see https://stylelint.io/user-guide/configure/
 * @type {import('stylelint').Config} 
 */
export default {
  ignoreFiles: [
    // dependencies / build artifacts
    '**/node_modules/**',
    '**/dist/**',
    '**/build/**',
    '**/coverage/**',

    // logs
    '**/*.log',
    '**/npm-debug.log*',

    // VCS / IDE
    '**/.git/**',
    '**/.idea/**',
    '**/.vscode/**',

    // OS-specific junk
    '**/.DS_Store',
    '**/Thumbs.db',
    '**/.directory',
    '**/*~',
    '**/*.swp',
    '**/*.swo',
  ],
  defaultSeverity: 'warning',
  extends: ['stylelint-config-standard-scss'],
  plugins: ['stylelint-order'],
  rules: {
    'at-rule-disallowed-list': ['import'],

    'value-keyword-case': [
      'lower',
      {
        ignoreKeywords: ['currentColor'],
      },
    ],

    'font-family-name-quotes': 'always-unless-keyword',

    'color-hex-length': 'long',
    'color-function-alias-notation': null,
    'color-function-notation': null,
    'alpha-value-notation': null,
    'color-named': 'never',

    'custom-property-empty-line-before': null,
    'custom-property-pattern': '^[a-z][a-z0-9-]*$',
    'scss/dollar-variable-pattern': '^[a-z][a-z0-9-]*$',
    'scss/dollar-variable-empty-line-before': null,
    'scss/operator-no-newline-before': null,
    'scss/operator-no-newline-after': null,

    'selector-class-pattern': '^[a-z0-9\\-_]+$',

    'length-zero-no-unit': [
      true,
      {
        ignore: ['custom-properties'],
      },
    ],
    'declaration-no-important': true,
    'no-descending-specificity': null,
    'no-empty-source': [true, { severity: 'warning' }],

    'order/order': ['custom-properties', 'declarations'],
    'order/properties-order': [
      'content',
      'appearance',
      'order',

      /*
        * Positioning
      */
      'position',
      'top',
      'right',
      'bottom',
      'left',
      'z-index',

      'overflow',
      'overflow-x',
      'overflow-y',
      'overscroll-behavior',

      /*
        * Layout
      */
      'display',
      'flex',
      'flex-direction',
      'justify-content',
      'align-items',

      'grid',
      'grid-template-columns',
      'grid-template-rows',

      /*
       * Box model
      */
      'width',
      'min-width',
      'max-width',
      'height',
      'min-height',
      'max-height',

      'margin',
      'padding',

      /*
       * Typography
      */
      'font',
      'font-family',
      'font-size',
      'font-weight',
      'line-height',
      'letter-spacing',

      'text-align',
      'text-transform',
      'color',

      /*
       * Visual
      */
      'background',
      'background-color',
      'border',
      'border-radius',
      'box-shadow',
      'opacity',

      /*
       * Effects
      */
      'transition',
      'transform',
      'animation',

      /*
       * Misc
      */
      'cursor',
      'pointer-events',
      'will-change',
      'overflow',
    ],
  },
};