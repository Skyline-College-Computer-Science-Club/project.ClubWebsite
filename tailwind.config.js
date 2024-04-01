const plugin = require('tailwindcss/plugin')
// const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [ "./src/**/*.{js,jsx,ts,tsx}"],

    theme: {
        extend: {
            textShadow: {
                sm: '0 1px 2px var(--tw-shadow-color)',
                DEFAULT: '0 2px 4px var(--tw-shadow-color)',
                lg: '0 8px 12px var(--tw-shadow-color)',
            },
            colors: {
                lightpall: '#fcd690',
                medpall: '#c9aa72',
                darkpall: '#493d29',
            }
        },
    },

    variants: {
        extend: {
            visibility: ["group-hover"],
        },
    },

    plugins: [
        plugin(function ({ matchUtilities, theme }) {
            matchUtilities(
                {
                'text-shadow': (value) => ({
                    textShadow: value,
                }),
                },
                { values: theme('textShadow') }
            )
        }),
    ],
}

