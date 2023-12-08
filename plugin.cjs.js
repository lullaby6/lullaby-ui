const plugin = require('tailwindcss/plugin')

module.exports =  plugin(function lullabyUI({ addComponents }) {
    addComponents({
        '.fluid-button': {
            "@apply text-gray-400": {},
        }
    });
})