const plugin = require('tailwindcss/plugin');

module.exports =  plugin(function lullabyUI({ addComponents }) {
    addComponents({
        '.red': {
            "@apply bg-red-900": {},
        },
    });
});