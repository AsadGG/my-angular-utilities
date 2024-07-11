const plugin = require('tailwindcss/plugin');
const {
  default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'ion-bg': (value) => ({
            '--background': value,
          }),
          'ion-text': (value) => ({
            '--color': value,
          }),
          'ion-text-checked': (value) => ({
            '--color-checked': value,
          }),
          'ion-border-c': (value) => ({
            '--border-color': value,
          }),
        },
        { values: flattenColorPalette(theme('colors')) }
      );
    }),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'ion-rounded': (value) => ({
            '--border-radius': value,
          }),
          'ion-inner-rounded': (value) => ({
            '--inner-border-radius': value,
          }),
        },
        { values: theme('borderRadius') }
      );
    }),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'ion-border-w': (value) => ({
            '--border-width': value,
          }),
        },
        { values: flattenColorPalette(theme('borderWidth')) }
      );
    }),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'ion-border-s': (value) => ({
            '--border-style': value,
          }),
        },
        {
          values: {
            solid: 'solid',
            dashed: 'dashed',
            dotted: 'dotted',
            double: 'double',
            hidden: 'hidden',
            none: 'none',
          },
        }
      );
    }),

    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'ion-shadow': (value) => ({
            '--box-shadow': value,
          }),
        },
        { values: theme('boxShadow') }
      );
    }),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'ion-pt': (value) => ({
            '--padding-top': value,
          }),
          'ion-pb': (value) => ({
            '--padding-bottom': value,
          }),
          'ion-pl': (value) => ({
            '--padding-start': value,
          }),
          'ion-pr': (value) => ({
            '--padding-end': value,
          }),
          'ion-px': (value) => ({
            '--padding-start': value,
            '--padding-end': value,
          }),
          'ion-py': (value) => ({
            '--padding-top': value,
            '--padding-bottom': value,
          }),
          'ion-p': (value) => ({
            '--padding-top': value,
            '--padding-bottom': value,
            '--padding-start': value,
            '--padding-end': value,
          }),

          'ion-mt': (value) => ({
            '--margin-top': value,
          }),
          'ion-mb': (value) => ({
            '--margin-bottom': value,
          }),
          'ion-ml': (value) => ({
            '--margin-start': value,
          }),
          'ion-mr': (value) => ({
            '--margin-end': value,
          }),
          'ion-mx': (value) => ({
            '--margin-start': value,
            '--margin-end': value,
          }),
          'ion-my': (value) => ({
            '--margin-top': value,
            '--margin-bottom': value,
          }),
          'ion-m': (value) => ({
            '--margin-top': value,
            '--margin-bottom': value,
            '--margin-start': value,
            '--margin-end': value,
          }),
        },
        { values: theme('spacing') }
      );
    }),
  ],
};