import plugin from "tailwindcss/plugin";

export default plugin(function lullabyUI({ addComponents }) {
    addComponents({
        '.fluid-button': {
            "@apply text-gray-400": {},
        }
    });
})